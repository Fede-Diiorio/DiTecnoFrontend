import classes from './CartItem.module.scss';
import { useCart } from '../../context/CartContext';
import { useLocalStorage } from '../../context/LocalStorageContext';
import { toast } from 'react-toastify';
import { FaTrashCan } from 'react-icons/fa6';

const DoorItem = ({ product, opening, image, height, width, casementPayload, casement2Payload, casement3Payload, colorsPayload, quantity, id }) => {

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
            <h5 className={classes.title}>{product} apertura {opening}</h5>
            <div className={classes.product}>
                <img className={classes.image} src={image} alt={`Imagen de ${product}`} />
                <div className={classes.information}>

                    <div className={classes.dimensions}>
                        <p className={classes.data}><strong>Alto [metros]: </strong>{height}</p>
                        <p className={classes.data}><strong>Ancho [metros]: </strong>{width}</p>
                        <p className={classes.data}><strong>Ancho de hoja [metros]: </strong>{casementPayload}</p>
                        <p className={classes.data}><strong>Alto de hoja [metros]: </strong>{casement2Payload}</p>
                        <p className={classes.data}><strong>Alto de hoja 2 [metros]: </strong>{casement3Payload}</p>
                    </div>

                    <div className={classes.info}>
                        <p className={classes.data}><strong>Colores: </strong>{colorsPayload}</p>
                        <p className={classes.data}><strong>Cantidad: </strong>{quantity}</p>
                    </div>

                </div>
                <button onClick={deleteItem}><FaTrashCan className={classes.icon} /></button>
            </div>
        </div>
    );
};

export default DoorItem;