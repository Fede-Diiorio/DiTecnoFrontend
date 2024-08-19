import Selector from '../Selector/Selector';
import classes from './Checkout.module.scss';
import { useCart } from '../../context/CartContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const { cart } = useCart();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orderData = {
            name,
            email,
            phone,
            cart
        };

        try {
            const response = await fetch('http://localhost:8080/api/orden', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                console.log('Orden enviada con éxito');
                // navigate('/');
            } else {
                console.error('Error al enviar la orden');
            }
        } catch (error) {
            console.error('Hubo un problema al enviar la orden:', error);
        }
    };

    return (
        <Selector>
            <form onSubmit={handleSubmit} className={classes.form}>
                <legend>Complete todos los campos para solicitar su presupuesto</legend>

                <div className={classes.container}>
                    <div className={classes.field}>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            required={true}
                            placeholder='Gustavo Fring'
                            value={name}
                            name='name'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className={classes.field}>
                        <label>Email:</label>
                        <input
                            type="email"
                            required={true}
                            placeholder='gustavofring@gmail.com'
                            value={email}
                            name='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className={classes.field}>
                        <label>Teléfono:</label>
                        <input
                            type="number"
                            required={true}
                            placeholder='02964123456789'
                            value={phone}
                            name='phone'
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>

                <input type="submit" value='Solicitar presupuesto' className={classes.submit} />
            </form>
        </Selector>
    );
};

export default Checkout;
