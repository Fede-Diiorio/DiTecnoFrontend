import Selector from '../Selector/Selector';
import classes from './Checkout.module.scss';
import { useState } from 'react';
import { useGenerateOrder } from '../../utils/generateOrder';
import { toast } from 'react-toastify';

const Checkout = () => {

    const generateOrder = useGenerateOrder();
    const successNotify = () => toast.success('¡Orden enviada exitosamente!');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        successNotify();
        generateOrder(name, email, phone);
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
