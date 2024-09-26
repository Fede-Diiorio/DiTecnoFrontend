import classes from './ProductForm.module.scss';
import { useEffect, useState } from 'react';
import { getColors } from '../../utils/getColors';
import { getWindowSpecification } from '../../utils/getWindows';
import { getDoorModel } from '../../utils/getDoors';
import { useParams, useNavigate } from 'react-router-dom';
import Selector from '../Selector/Selector';
import { useCart } from '../../context/CartContext';
import { handleInputChange, initializeFormData, handleSubmit } from '../../utils/useFormFunctions';
import ColorSelector from './ColorSelector/ColorSelector';
import GlassOptions from './GlassOptions/GlassOptions';
import CasementComponent from './FieldsType/CasementComponent';

const ProductForm = () => {
    const { opening, style, type, design } = useParams();
    const [colors, setColors] = useState([]);
    const [typeSpecification, setTypeSpecification] = useState({});
    const [formData, setFormData] = useState(initializeFormData(opening, style, type, design));
    const [loading, setLoading] = useState(true);

    const { addItem } = useCart();
    const navigate = useNavigate();

    // Obtener especificaciones del product
    if (!design) {
        useEffect(() => {
            getWindowSpecification(opening, style, type).then(setTypeSpecification);
        }, [opening, style, type]);
    } else {
        useEffect(() => {
            getDoorModel(opening, style, type, design).then(setTypeSpecification)
        }, [opening, style, type, design]);
    };

    // Obtener colores disponibles
    useEffect(() => {
        setLoading(true);

        getColors()
            .then(setColors)
            .finally(() => setLoading(false))
    }, []);

    if (loading) {
        return (
            <Selector title={'Cargando...'}></Selector>
        );
    };

    return (
        <Selector title={'Cargar producto'} description={'Complete el formulario para cargar el producto al pedido'}>
            <form className={classes.form} onSubmit={(e) => handleSubmit(e, formData, addItem, navigate)}>
                <div className={classes.formContainer}>
                    <img src={typeSpecification.image} alt={typeSpecification.name} className={classes.image} />

                    {/* Renderizar el componente correspondiente según la cantidad de hojas */}
                    <CasementComponent
                        casementQuantity={typeSpecification.casementQuantity}
                        formData={formData}
                        handleInputChange={(e) => handleInputChange(e, formData, setFormData)}
                    />
                </div>

                {/* Renderizar las opciones de vidrio si es una ventana */}
                <GlassOptions
                    formData={formData}
                    handleInputChange={(e) => handleInputChange(e, formData, setFormData)}
                />

                <ColorSelector colors={colors} formData={formData} handleInputChange={(e) => handleInputChange(e, formData, setFormData)} />

                <input type="submit" value='Agregar al carrito' className={classes.submit} />
            </form>
        </Selector>
    );
};

export default ProductForm;
