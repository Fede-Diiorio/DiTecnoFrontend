import Selector from '../Selector/Selector';
import classes from './Checkout.module.scss';

const Checkout = () => {
    return (
        <Selector>
            <form action="" className={classes.form}>

                <legend>Complete todos los campos para solicitar su presupuesto</legend>

                <div className={classes.container}>
                    <div className={classes.field}>
                        <label>Nombre:</label>
                        <input type="text" required={true} placeholder='Gustavo Fring' name='name' />
                    </div>

                    <div className={classes.field}>
                        <label>Email:</label>
                        <input type="email" required={true} placeholder='gustavofring@gmail.com' name='email' />
                    </div>

                    <div className={classes.field}>
                        <label>Teléfono:</label>
                        <input type="number" required={true} placeholder='02964123456789' name='phone' />
                    </div>
                </div>

                <input type="submit" value='Solicitar presupuesto' className={classes.submit} />

            </form>
        </Selector>
    );
};

export default Checkout;