import { useCart } from "../../context/CartContext";
import { useLocalStorage } from "../../context/LocalStorageContext";
import classes from './CartView.module.scss';
import Button from '../Button/Button'
import Selector from '../Selector/Selector';
import CartIdem from "../CartItem/CartItem";

const CartView = () => {
    const { cart, clearCart, totalQuantity } = useCart();
    const { clearCartFormLocalStorage } = useLocalStorage();

    const handlerClearCart = () => {
        clearCart();
        clearCartFormLocalStorage();
    };

    if (totalQuantity === 0) {
        return (
            <Selector title={'No tiene productos agregados'}>
                <Button to={'/producto'}>Agregar un producto</Button>
            </Selector>
        );
    };

    return (
        <Selector title={'Productos agregados'}>
            {cart.map(prod => <CartIdem key={prod.id} {...prod} />)}
            <div className={classes.nav}>
                <Button onClick={handlerClearCart}>Vaciar carrito</Button>
                <Button to={'/checkout'}>Checkout</Button>
            </div>
        </Selector>
    );
};

export default CartView;