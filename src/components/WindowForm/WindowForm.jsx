import classes from './WindowForm.module.scss';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { getColors } from '../../utils/getColors';
import { getWindowImage } from '../../utils/getWindows';
import { useParams } from 'react-router-dom';
import Selector from '../Selector/Selector';

const WindowForm = () => {

    const { opening, style, type } = useParams();
    const [colors, setColors] = useState([]);
    const [typeSpecification, setTypeSpecification] = useState([]);

    useEffect(() => {
        getWindowImage(opening, style, type).then(data => {
            setTypeSpecification(data);
        });
    }, []);

    useEffect(() => {
        getColors().then(data => {
            setColors(data);
        });
    }, []);

    return (
        <Selector title={'Cargar producto'} description={'Complete el formulario para cargar el producto al pedido'}>
            <div className={classes.form}>
                <div className={classes.formContainer}>

                    <img src={typeSpecification.image} alt={typeSpecification.name} className={classes.image} />

                    <div className={classes.fields}>

                        <div className={classes.field}>
                            <label>Ancho: </label>
                            <input type="number" min={20} required={true} name='width' />
                        </div>

                        <div className={classes.field}>
                            <label>Alto: </label>
                            <input type="number" min={20} required={true} name='height' />
                        </div>

                        <div className={classes.field}>
                            <label>Medida de Hoja: </label>
                            <input type="number" min={20} required={true} name='height1' />
                        </div>

                        <div className={classes.field}>
                            <label>Cantidad: </label>
                            <input type="number" min={1} required={true} name='height2' />
                        </div>

                    </div>
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
