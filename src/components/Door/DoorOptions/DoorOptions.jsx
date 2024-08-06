import classes from './DoorOptions.module.scss';
import Button from '../../Button/Button';

const DoorOptions = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <div className={classes.doorOptions}>
                    <h2>Tipo de apertura</h2>
                    <p>Seleccione la dirección de apertura que desea para su puerta.</p>
                    <div className={classes.options}>
                        <Button to={'/door/inward'}>Exterior</Button>
                        <Button to={'/door/outward'}>Interior</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoorOptions;