import classes from './WindowForm.module.scss';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { getColors } from '../../utils/getColors';
import { getWindowSpecification } from '../../utils/getWindows';
import { useParams } from 'react-router-dom';
import Selector from '../Selector/Selector';
import TwoCasement from './FieldsType/TwoCasement';
import OneCasement from './FieldsType/OneCasement';
import ThreeCasement from './FieldsType/ThreeCasement';

const WindowForm = () => {

    const { opening, style, type } = useParams();
    const [colors, setColors] = useState([]);
    const [typeSpecification, setTypeSpecification] = useState([]);

    useEffect(() => {
        getWindowSpecification(opening, style, type).then(data => {
            setTypeSpecification(data);
        });
    }, []);

    console.log(typeSpecification);

    useEffect(() => {
        getColors().then(data => {
            setColors(data);
        });
    }, []);

    const renderCasementComponent = () => {
        if (typeSpecification) {
            if (typeSpecification.casementQuantity === 1) {
                return <OneCasement />;
            } else if (typeSpecification.casementQuantity === 2) {
                return <TwoCasement />;
            } else if (typeSpecification.casementQuantity === 3) {
                return <ThreeCasement />
            }
        };
        return null;
    };

    return (
        <Selector title={'Cargar producto'} description={'Complete el formulario para cargar el producto al pedido'}>
            <div className={classes.form}>
                <div className={classes.formContainer}>

                    <img src={typeSpecification.image} alt={typeSpecification.name} className={classes.image} />

                    {renderCasementComponent()}
                </div>

                <div className={classes.radios}>

                    <div className={classes.radio}>
                        <label htmlFor="dvhEstandar">Vidrio DVH estándar</label>
                        <input type="radio" id="dvhEstandar" name="glassType" required />
                    </div>

                    <div className={classes.radio}>
                        <label htmlFor="dvhLaminado">Vidrio DVH laminado</label>
                        <input type="radio" id="dvhLaminado" name="glassType" />
                    </div>

                </div>


                {/* Lista de colores como checkboxes */}
                <ul className={classes.colors}>
                    {
                        colors.map(color => (
                            <li key={color.id}>
                                <input
                                    type="checkbox"
                                    id={`color-${color.slug}`}
                                    name="color"
                                    value={color.slug}
                                    className={classes.hiddenCheckbox}
                                    required
                                />
                                <label htmlFor={`color-${color.slug}`} className={classes.colorLabel}>
                                    <p>{color.name}</p>
                                    <img className={`doorColor ${classes.colorImage}`} src={color.image} alt={`Imagen del color ${color.slug}`} />
                                </label>
                            </li>
                        ))
                    }
                </ul>

                <Button>Cargar producto</Button>
            </div>
        </Selector>
    );
};

export default WindowForm;
