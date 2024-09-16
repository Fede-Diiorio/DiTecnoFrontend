import { useCart } from "../context/CartContext";
import { useLocalStorage } from "../context/LocalStorageContext";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const apiUrl = import.meta.env.VITE_HOST;

export const useGenerateOrder = () => {
    const { cart, clearCart } = useCart();
    const { clearCartFromLocalStorage } = useLocalStorage();
    const navigate = useNavigate();
    const successNotify = () => toast.success('¡Orden enviada exitosamente!');

    const generateOrder = async (name, email, phone) => {
        const orderData = { name, email, phone, cart };
        try {
            const response = await fetch(`${apiUrl}/api/orden`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                clearCart();
                clearCartFromLocalStorage();
                successNotify();
                navigate('/');
            } else {
                navigate('/cart')
                console.error('Error al enviar la orden');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        };
    };

    return generateOrder;
};
