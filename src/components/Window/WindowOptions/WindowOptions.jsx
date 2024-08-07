import classes from './WindowOptions.module.scss';
import Button from '../../Button/Button';
import { TiArrowBack } from "react-icons/ti";
import { Link } from 'react-router-dom';

const WindowOptions = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className={classes.container}>
                    <div className={classes.windowOptions}>
                        <h2>Tipo de apertura</h2>
                        <p>Seleccione la dirección de apertura que desea para su puerta.</p>
                        <div className={classes.options}>
                            <Button to={'exterior'}>Exterior</Button>
                            <Button to={'interior'}>Interior</Button>
                            <Button to={'corrediza'}>Corrediza</Button>
                        </div>
                    </div>
                    <Link to={'/producto'}><TiArrowBack className={classes.backArrow} /></Link>
                </div>
            </div>
        </section>

    );
};

export default WindowOptions;