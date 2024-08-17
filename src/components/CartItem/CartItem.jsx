import classes from './CartItem.module.scss';
import { useCart } from '../../context/CartContext';
import { useLocalStorage } from '../../context/LocalStorageContext';
import { FaTrashCan } from 'react-icons/fa6';

const CartItem = ({ product, type, quantity, id }) => {

    const { removeItem } = useCart();
    const { removeProductFromLocalStorage } = useLocalStorage();

    const deleteItem = () => {
        removeItem(id);
        removeProductFromLocalStorage(id);
    }

    return (
        <div className={classes.container}>
            <p className={classes.paragraph}><strong>Producto: </strong>{product}</p>
            <p className={classes.paragraph}><strong>Descripción: </strong>{type}</p>
            <p className={classes.paragraph}><strong>Cantidad: </strong>{quantity}</p>
            <button onClick={deleteItem}><FaTrashCan className={classes.icon} /></button>
        </div>
    );
};

export default CartItem;