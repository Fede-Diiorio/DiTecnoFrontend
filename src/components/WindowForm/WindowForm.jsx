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
import { useCart } from '../../context/CartContext';

const WindowForm = () => {

    const { addItem } = useCart();

    const { opening, style, type } = useParams();
    const [colors, setColors] = useState([]);
    const [typeSpecification, setTypeSpecification] = useState({});
    const [formData, setFormData] = useState({
        product: 'ventana',
        opening,
        style,
        type,
        width: '',
        height: '',
        casement: '',
        casement2: '',
        quantity: '',
        glassType: '',
        colors: [],
    });

    useEffect(() => {
        getWindowSpecification(opening, style, type).then(data => {
            setTypeSpecification(data);
        });
    }, [opening, style, type]);

    useEffect(() => {
        getColors().then(data => {
            setColors(data);
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData(prevData => {
                const updatedColors = checked
                    ? [...prevData.colors, value]
                    : prevData.colors.filter(color => color !== value);
                return {
                    ...prevData,
                    colors: updatedColors
                };
            });
        } else {
            setFormData(prevData => {
                let newValue;

                if (name === 'quantity') {
                    // Convertir a entero
                    newValue = parseInt(value, 10) || '';
                } else if (['width', 'height', 'casement', 'casement2'].includes(name)) {
                    // Convertir a float
                    newValue = parseFloat(value) || '';
                } else {
                    newValue = value;
                }

                return {
                    ...prevData,
                    [name]: newValue
                };
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.colors.length === 0) {
            alert("Por favor, selecciona al menos un color.");
            return;
        }

        addItem(formData);
    };

    const renderCasementComponent = () => {
        if (typeSpecification) {
            if (typeSpecification.casementQuantity === 1) {
                return <OneCasement formData={formData} handleInputChange={handleInputChange} />;
            } else if (typeSpecification.casementQuantity === 2) {
                return <TwoCasement formData={formData} handleInputChange={handleInputChange} />;
            } else if (typeSpecification.casementQuantity === 3) {
                return <ThreeCasement formData={formData} handleInputChange={handleInputChange} />;
            }
        }
        return null;
    };

    return (
        <Selector title={'Cargar producto'} description={'Complete el formulario para cargar el producto al pedido'}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.formContainer}>
                    <img src={typeSpecification.image} alt={typeSpecification.name} className={classes.image} />
                    {renderCasementComponent()}
                </div>

                <div className={classes.radios}>
                    <div className={classes.radio}>
                        <label htmlFor="dvhEstandar">Vidrio DVH estándar</label>
                        <input type="radio" id="dvhEstandar" name="glassType" value="dvhEstandar" onChange={handleInputChange} required />
                    </div>

                    <div className={classes.radio}>
                        <label htmlFor="dvhLaminado">Vidrio DVH laminado</label>
                        <input type="radio" id="dvhLaminado" name="glassType" value="dvhLaminado" onChange={handleInputChange} />
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
                                onChange={handleInputChange}
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
