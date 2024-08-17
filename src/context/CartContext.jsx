import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from './LocalStorageContext';

const CartContext = createContext({
    cart: [],
    addItem: () => { },
    removeItem: () => { },
    totalQuantity: 0,
    clearCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const { getCartFromLocalStorage } = useLocalStorage();

    useEffect(() => {
        const cartFromLocalStorage = getCartFromLocalStorage();
        setCart(cartFromLocalStorage);
    }, []);

    const addItem = (productToAdd) => {

        const productWithId = {
            ...productToAdd,
            id: cart.length
        };

        if (!isInCart(productWithId.id)) {
            setCart(prev => [...prev, productWithId]);
        } else {
            const cartUpdate = cart.map(prod => {
                if (prod.id === productWithId.id) {
                    return {
                        ...prod,
                        quantity: productWithId.quantity,
                    }
                } else {
                    return prod;
                };
            });
            setCart(cartUpdate);
        };
    };

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id);
    };

    const removeItem = (id) => {
        const cartUpdate = cart.filter(prod => prod.id !== id);
        setCart(cartUpdate);
    };

    const getTotalQuantity = () => {
        let accu = 0;

        cart.forEach(prod => {
            accu += prod.quantity;
        });

        return accu;
    };

    const totalQuantity = getTotalQuantity();

    const getTotalPrice = () => {
        let accu = 0;

        cart.forEach(prod => {
            accu += prod.price * prod.quantity;
        });

        return accu;
    };

    const totalPrice = getTotalPrice();

    const clearCart = () => {
        setCart([]);
    };

    const getProductQuantity = (productId) => {
        const product = cart.find(prod => prod.id === productId);
        return product?.quantity;
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, totalQuantity, totalPrice, clearCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>

    );
};

export const useCart = () => {
    return useContext(CartContext);
};
