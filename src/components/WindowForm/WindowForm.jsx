import classes from './WindowForm.module.scss';
import { useEffect, useState } from 'react';
import { getColors } from '../../utils/getColors';
import { getWindowSpecification } from '../../utils/getWindows';
import { useParams, useNavigate } from 'react-router-dom';
import Selector from '../Selector/Selector';
import TwoCasement from './FieldsType/TwoCasement';
import OneCasement from './FieldsType/OneCasement';
import ThreeCasement from './FieldsType/ThreeCasement';
import { useCart } from '../../context/CartContext';
import { handleInputChange, initializeFormData, handleSubmit } from '../../utils/windowFormFunctions';
import ColorSelector from '../ColorSelector/ColorSelector';

const WindowForm = () => {
    const { opening, style, type } = useParams();
    const [colors, setColors] = useState([]);
    const [typeSpecification, setTypeSpecification] = useState({});
    const [formData, setFormData] = useState(initializeFormData(opening, style, type));

    const { addItem } = useCart();
    const navigate = useNavigate();

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
            <form className={classes.form} onSubmit={(e) => handleSubmit(e, formData, addItem, navigate)}>
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

                <ColorSelector colors={colors} formData={formData} handleInputChange={(e) => handleInputChange(e, formData, setFormData)} />

                <input type="submit" value='Agregar al carrito' className={classes.submit} />
            </form>
        </Selector>
    );
};

export default WindowForm;
