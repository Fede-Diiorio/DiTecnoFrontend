import { useCart } from "../../context/CartContext";
import { useLocalStorage } from "../../context/LocalStorageContext";
import classes from './CartView.module.scss';
import Button from '../Button/Button'
import Selector from '../Selector/Selector';

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
        )
    };
};

export default CartView;