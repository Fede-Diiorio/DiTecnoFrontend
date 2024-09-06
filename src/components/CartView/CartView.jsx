import { useCart } from "../../context/CartContext";
import { useLocalStorage } from "../../context/LocalStorageContext";
import classes from './CartView.module.scss';
import Button from '../Button/Button'
import Selector from '../Selector/Selector';
import CartItem from "../CartItem/CartItem";
import { toast } from "react-toastify";

const CartView = () => {
    const { cart, clearCart, totalQuantity } = useCart();
    const { clearCartFromLocalStorage } = useLocalStorage();
    const successNotify = () => toast.success('Su carrito se ha vaciado.');


    const handlerClearCart = () => {
        successNotify();
        clearCart();
        clearCartFromLocalStorage();
    };

    if (totalQuantity === 0) {
        return (
            <Selector title={'No tiene productos agregados'}>
                <div className={classes.nav}>
                    <Button to={'/producto'}>Agregar un producto</Button>
                </div>
            </Selector>
        );
    };

    return (
        <Selector title={'Productos agregados'}>
            <div className={classes.items}>
                {cart.map(prod => <CartItem key={prod.id} {...prod} />)}
            </div>
            <div className={classes.nav}>
                <Button onClick={handlerClearCart}>Vaciar carrito</Button>
                <Button to={'/checkout'}>Finalizar pedido</Button>
            </div>
        </Selector>
    );
};

export default CartView;