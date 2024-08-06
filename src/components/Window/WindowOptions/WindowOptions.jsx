import classes from './WindowOptions.module.scss';
import Button from '../../Button/Button';

const WindowOptions = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <div className={classes.windowOptions}>
                    <h2>Tipo de apertura</h2>
                    <p>Seleccione la dirección de apertura que desea para su puerta.</p>
                    <div className={classes.options}>
                        <Button to={'/window/inward'}>Exterior</Button>
                        <Button to={'/window/outward'}>Interior</Button>
                        <Button to={'/window/sliding'}>Corrediza</Button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WindowOptions;