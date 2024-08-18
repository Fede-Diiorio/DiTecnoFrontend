import classes from './CartItem.module.scss';
import { useCart } from '../../context/CartContext';
import { useLocalStorage } from '../../context/LocalStorageContext';
import { FaTrashCan } from 'react-icons/fa6';

const CartItem = ({ product, type, quantity, id, style, color, design, opening }) => {

    const { removeItem } = useCart();
    const { removeProductFromLocalStorage } = useLocalStorage();

    const deleteItem = () => {
        removeProductFromLocalStorage(id);
        removeItem(id);
    }

    if (product === 'puerta') {
        return (
            <div className={classes.container}>
                <p className={classes.paragraph}><strong>Producto: </strong>{product}</p>
                <p className={classes.paragraph}><strong>Sentido de apertura: </strong>{opening}</p>
                <p className={classes.paragraph}><strong>Descripción: </strong>{type}</p>
                <p className={classes.paragraph}><strong>Diseño: </strong>{design}</p>
                <p className={classes.paragraph}><strong>Color: </strong>{color}</p>
                <p className={classes.paragraph}><strong>Cantidad: </strong>{quantity}</p>
                <button onClick={deleteItem}><FaTrashCan className={classes.icon} /></button>
            </div>
        );
    };

    if (product === 'ventana') {
        return (
            <div className={classes.container}>
                <p className={classes.paragraph}><strong>Producto: </strong>{product}</p>
                <p className={classes.paragraph}><strong>Sentido de apertura: </strong>{opening}</p>
                <p className={classes.paragraph}><strong>Estilo de apertura: </strong>{style}</p>
                <p className={classes.paragraph}><strong>Descripción: </strong>{type}</p>
                <p className={classes.paragraph}><strong>Cantidad: </strong>{color}</p>
                <p className={classes.paragraph}><strong>Cantidad: </strong>{quantity}</p>
                <button onClick={deleteItem}><FaTrashCan className={classes.icon} /></button>
            </div>
        );
    };
};

export default CartItem;