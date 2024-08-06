import classes from './Product.module.scss';
import Button from '../Button/Button';

const Product = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <h2>Elija una opción</h2>
                <p>Para precisar su presupuesto de manera óptima, complete con la opción deseada.</p>
                <div className={classes.options}>
                    <Button to={'/product/door'}>Puerta</Button>
                    <Button to={'/product/window'}>Ventana</Button>
                </div>
            </div>
        </section>
    );
};

export default Product