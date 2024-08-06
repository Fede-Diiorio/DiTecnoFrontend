import classes from './Product.module.scss';
import Button from '../Button/Button';
import HeroBackground from '../HeroBackground/HeroBackground';

const Product = () => {
    return (
        <HeroBackground>
            <div className={classes.product}>
                <h2>Elija una opción</h2>
                <p>Para precisar su presupuesto de manera óptima, complete con la opción deseada.</p>
                <div className={classes.options}>
                    <Button to={'/product/door'}>Puerta</Button>
                    <Button to={'/product/window'}>Ventana</Button>
                </div>
            </div>
        </HeroBackground>
    );
};

export default Product