import classes from './WindowForm.module.scss';
import { useEffect, useState } from 'react';
import { getColors } from '../../utils/getColors';
import { getWindowSpecification } from '../../utils/getWindows';
import { useParams } from 'react-router-dom';
import Selector from '../Selector/Selector';
import TwoCasement from './FieldsType/TwoCasement';
import OneCasement from './FieldsType/OneCasement';
import ThreeCasement from './FieldsType/ThreeCasement';
import { useCart } from '../../context/CartContext';
import { handleInputChange, initializeFormData, handleSubmit } from '../../utils/useWindowForm';

const WindowForm = () => {
    const { opening, style, type } = useParams();
    const [colors, setColors] = useState([]);
    const [typeSpecification, setTypeSpecification] = useState({});
    const [formData, setFormData] = useState(initializeFormData(opening, style, type));

    const { addItem } = useCart();

    // Obtener especificaciones de la ventana
    useEffect(() => {
        getWindowSpecification(opening, style, type).then(setTypeSpecification);
    }, [opening, style, type]);

    // Obtener colores disponibles
    useEffect(() => {
        getColors().then(setColors);
    }, []);

    // Renderizar componente según cantidad de hojas
    const renderCasementComponent = () => {
        if (typeSpecification.casementQuantity === 1) {
            return <OneCasement formData={formData} handleInputChange={(e) => handleInputChange(e, formData, setFormData)} />;
        } else if (typeSpecification.casementQuantity === 2) {
            return <TwoCasement formData={formData} handleInputChange={(e) => handleInputChange(e, formData, setFormData)} />;
        } else if (typeSpecification.casementQuantity === 3) {
            return <ThreeCasement formData={formData} handleInputChange={(e) => handleInputChange(e, formData, setFormData)} />;
        };
        return null;
    };

    return (
        <Selector title={'Cargar producto'} description={'Complete el formulario para cargar el producto al pedido'}>
            <form className={classes.form} onSubmit={(e) => handleSubmit(e, formData, addItem, navigate, successNotification, alertNotification)}>
                <div className={classes.formContainer}>
                    <img src={typeSpecification.image} alt={typeSpecification.name} className={classes.image} />
                    {renderCasementComponent()}
                </div>

                <div className={classes.radios}>
                    <div className={classes.radio}>
                        <label htmlFor="dvhEstandar">Vidrio DVH estándar</label>
                        <input type="radio" id="dvhEstandar" name="glassType" value="Estandar" onChange={(e) => handleInputChange(e, formData, setFormData)} required />
                    </div>

                    <div className={classes.radio}>
                        <label htmlFor="dvhLaminado">Vidrio DVH laminado</label>
                        <input type="radio" id="dvhLaminado" name="glassType" value="Laminado" onChange={(e) => handleInputChange(e, formData, setFormData)} />
                    </div>
                </div>

                <ul className={classes.colors}>
                    {colors.map(color => (
                        <li key={color.id}>
                            <input
                                type="checkbox"
                                id={`color-${color.slug}`}
                                name="color"
                                value={color.slug}
                                className={classes.hiddenCheckbox}
                                onChange={(e) => handleInputChange(e, formData, setFormData)}
                            />
                            <label htmlFor={`color-${color.slug}`} className={classes.colorLabel}>
                                <p>{color.name}</p>
                                <img className={`doorColor ${classes.colorImage}`} src={color.image} alt={`Imagen del color ${color.slug}`} />
                            </label>
                        </li>
                    ))}
                </ul>

                <input type="submit" value='Agregar al carrito' className={classes.submit} />
            </form>
        </Selector>
    );
};

export default WindowForm;
