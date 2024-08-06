import classes from './DoorOptions.module.scss';
import HeroBackground from '../../HeroBackground/HeroBackground';
import Button from '../../Button/Button';

const DoorOptions = () => {
    return (
        <HeroBackground>
            <div className={classes.doorOptions}>
                <h2>Tipo de apertura</h2>
                <p>Seleccione la dirección de apertura que desea para su puerta.</p>
                <div className={classes.options}>
                    <Button to={'/door/inward'}>Exterior</Button>
                    <Button to={'/door/outward'}>Interior</Button>
                </div>
            </div>
        </HeroBackground>
    );
};

export default DoorOptions;