import classes from './OpeningType.module.scss';
import HeroBackground from '../HeroBackground/HeroBackground';
import Button from '../Button/Button';

const OpeningType = () => {
    return (
        <HeroBackground>
            <div className={classes.openingType}>
                <h2>Tipo de apertura</h2>
                <p>Seleccione la dirección de apertura que desea para su abertura.</p>
                <div className={classes.options}>
                    <Button>Exterior</Button>
                    <Button>Interior</Button>
                </div>
            </div>
        </HeroBackground>
    );
};

export default OpeningType;