import classes from './CartItem.module.scss';
import { useCart } from '../../context/CartContext';
import { useLocalStorage } from '../../context/LocalStorageContext';
import { FaTrashCan } from 'react-icons/fa6';
import { getWindowSpecification } from '../../utils/getWindows';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

const CartItem = ({ product, type, quantity, id, style, colors, design, opening, casement, casement2, glassType, height, width }) => {

    const { removeItem } = useCart();
    const { removeProductFromLocalStorage } = useLocalStorage();
    const [typeSpecification, setTypeSpecification] = useState();
    const successNotify = () => toast.success('Producto eliminado.');

    useEffect(() => {
        getWindowSpecification(opening, style, type).then(data => {
            setTypeSpecification(data);
        });
    }, [opening, style, type]);

    const deleteItem = () => {
        successNotify();
        removeProductFromLocalStorage(id);
        removeItem(id);
    }

    const colorsPayload = colors.join(' - ');
    const casementPayload = casement ? casement : 'No requerido';
    const casement2Payload = casement2 ? casement2 : 'No requerido';

    if (product === 'puerta') {
        return (
            <div className={classes.container}>
                <h5>{product}</h5>
                <div className={classes.product}>
                    <p className={classes.data}><strong>Sentido de apertura: </strong>{opening}</p>
                    <p className={classes.data}><strong>Descripción: </strong>{type}</p>
                    <p className={classes.data}><strong>Diseño: </strong>{design}</p>
                    <p className={classes.data}><strong>Color: </strong>{colorsPayload}</p>
                    <p className={classes.data}><strong>Cantidad: </strong>{quantity}</p>
                </div>
                <button onClick={deleteItem}><FaTrashCan className={classes.icon} /></button>
            </div>
        );
    };

    if (product === 'ventana') {
        if (!typeSpecification) {
            return <p>Cargando especificaciones...</p>;
        }

        return (
            <div className={classes.container}>
                <h5 className={classes.title}>{product} apertura {opening} {style}</h5>
                <div className={classes.product}>
                    <img className={classes.image} src={typeSpecification.image} alt={`Imagen de ${product} ${style}`} />
                    <div className={classes.information}>

                        <div className={classes.dimensions}>
                            <p className={classes.data}><strong>Alto (cm): </strong>{height}</p>
                            <p className={classes.data}><strong>Ancho (cm): </strong>{width}</p>
                            <p className={classes.data}><strong>Ancho de hoja (cm): </strong>{casementPayload}</p>
                            <p className={classes.data}><strong>Alto de hoja (cm): </strong>{casement2Payload}</p>
                        </div>

                        <div className={classes.info}>
                            <p className={classes.data}><strong>Colores: </strong>{colorsPayload}</p>
                            <p className={classes.data}><strong>Cantidad: </strong>{quantity}</p>
                            <p className={classes.data}><strong>Vidrio DVH: </strong>{glassType}</p>
                        </div>

                    </div>
                    <button onClick={deleteItem}><FaTrashCan className={classes.icon} /></button>
                </div>
            </div>
        );
    };
};

export default CartItem;