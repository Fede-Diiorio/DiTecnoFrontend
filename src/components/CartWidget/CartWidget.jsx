import classes from './CartWidget.module.scss';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    const { totalQuantity } = useCart();
    return (
        <Link to={'/cart'}>
            <div className={classes.cart}>
                <FaCartShopping className={classes.icon} />
                <p>{totalQuantity}</p>
            </div>
        </Link>
    );
};

export default CartWidget;