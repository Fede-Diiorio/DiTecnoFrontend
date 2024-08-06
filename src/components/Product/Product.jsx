import classes from './Product.module.scss';
import Button from '../Button/Button';

const Product = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <div className={classes.product}>
                    <h2>Elija una opción</h2>
                    <p>Para precisar su presupuesto de manera óptima, complete con la opción deseada.</p>
                    <div className={classes.options}>
                        <Button to={'/door'}>Puerta</Button>
                        <Button to={'/window'}>Ventana</Button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Product