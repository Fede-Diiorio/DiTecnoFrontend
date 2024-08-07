import classes from './DoorOptions.module.scss';
import Button from '../../Button/Button';
import { TiArrowBack } from "react-icons/ti";
import { Link } from 'react-router-dom';

const DoorOptions = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className={classes.container}>
                    <div className={classes.doorOptions}>
                        <h2>Tipo de apertura</h2>
                        <p>Seleccione la dirección de apertura que desea para su puerta.</p>
                        <div className={classes.options}>
                            <Button to={'exterior'}>Apertura hacia afuera</Button>
                            <Button to={'interior'}>Apertura hacia adentro</Button>
                        </div>
                    </div>
                    <Link to={'/producto'}><TiArrowBack className={classes.backArrow} /></Link>
                </div>
            </div>
        </section>
    );
};

export default DoorOptions;