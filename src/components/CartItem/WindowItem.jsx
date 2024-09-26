import classes from './CartItem.module.scss';
import { useCart } from '../../context/CartContext';
import { useLocalStorage } from '../../context/LocalStorageContext';
import { toast } from 'react-toastify';
import { FaTrashCan } from 'react-icons/fa6';

const WindowItem = ({ product, opening, style, image, height, width, casementPayload, casement2Payload, colorsPayload, quantity, glassType, id }) => {

    const { removeItem } = useCart();
    const { removeProductFromLocalStorage } = useLocalStorage();
    const successNotify = () => toast.success('Producto eliminado.');

    const deleteItem = () => {
        successNotify();
        removeProductFromLocalStorage(id);
        removeItem(id);
    };

    return (
        <div className={classes.container}>
            <h5 className={classes.title}>{product} apertura {opening} {style}</h5>
            <div className={classes.product}>
                <img className={classes.image} src={image} alt={`Imagen de ${product} ${style}`} />
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

export default WindowItem;