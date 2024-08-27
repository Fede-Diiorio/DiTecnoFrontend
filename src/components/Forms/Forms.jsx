import Selector from "../Selector/Selector";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from './Forms.module.scss';
import { useCart } from "../../context/CartContext";

const Forms = ({ product }) => {

    const { addItem } = useCart();
    const { opening, type, design, color, style } = useParams();
    const [formData, setFormData] = useState();
    const navigate = useNavigate();

    // Manejar el cambio en los inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const parsedValue = parseFloat(value);

        setFormData(prevState => ({
            ...prevState,
            [name]: parsedValue
        }));
    };

    // Manejar el submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear el objeto producto con los datos del formulario y la URL
        const productData = {
            product,
            opening,
            type,
            design,
            style,
            color,
            ...formData
        };

        addItem(productData);
        navigate('/');
    };

    if (type !== 'simple') {
        return (
            <Selector title={'Finalizar producto'} description={'Complete con los datos solicitados para terminar de procesar su solicitud.'}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <legend>Complete todos los campos para terminar de cargar su producto</legend>

                    <div className={classes.container}>

                        <div className={classes.field}>
                            <label>Ancho de la hoja fija(cm): </label>
                            <input type="number" placeholder="Ancho" min={20} name='fixedWidth' required={true} onChange={handleInputChange} />
                        </div>

                        <div className={classes.field}>
                            <label>Alto de la hoja fija(cm): </label>
                            <input type="number" placeholder="Alto" min={20} name='fixedHeight' required={true} onChange={handleInputChange} />
                        </div>

                        <div className={classes.field}>
                            <label>Ancho de la hoja móvil(cm): </label>
                            <input type="number" placeholder="Ancho" min={20} name='width' required={true} onChange={handleInputChange} />
                        </div>

                        <div className={classes.field}>
                            <label>Alto de la hoja móvil(cm): </label>
                            <input type="number" placeholder="Alto" min={20} name='height' required={true} onChange={handleInputChange} />
                        </div>

                        <div className={classes.field}>
                            <label>Cantidad: </label>
                            <input type="number" placeholder="Cantitdad" min={1} name='quantity' required={true} onChange={handleInputChange} />
                        </div>

                    </div>

                    <input type="submit" value='Agregar al carrito' className={classes.submit} />

                </form>
            </Selector>
        );
    } else {
        return (
            <Selector title={'Finalizar producto'} description={'Complete con los datos solicitados para terminar de procesar su solicitud.'}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <legend>Complete todos los campos para terminar de cargar su producto</legend>

                    <div className={classes.container}>

                        <div className={classes.field}>
                            <label>Ancho (cm): </label>
                            <input type="number" placeholder="Ancho" min={20} name='width' required={true} onChange={handleInputChange} />
                        </div>

                        <div className={classes.field}>
                            <label>Alto (cm): </label>
                            <input type="number" placeholder="Alto" min={20} name='height' required={true} onChange={handleInputChange} />
                        </div>

                        <div className={classes.field}>
                            <label>Cantidad: </label>
                            <input type="number" placeholder="Cantitdad" min={1} name='quantity' required={true} onChange={handleInputChange} />
                        </div>

                    </div>

                    <input type="submit" value='Agregar al carrito' className={classes.submit} />

                </form>
            </Selector>
        );
    };
};

export default Forms