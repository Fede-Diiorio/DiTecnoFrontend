import classes from './Hero.module.scss';
import { FaAnglesDown } from "react-icons/fa6";
import HeroBackground from '../HeroBackground/HeroBackground';

const Hero = () => {
    return (
        <>
            <HeroBackground>
                <div className={classes.hero}>
                    <h1>DiTecno, aberturas de PVC</h1>
                    <h4>Asistente de presupuesto</h4>
                    <a href="#firstStep"><FaAnglesDown className={classes.heroIcon} /></a>
                </div>
            </HeroBackground>
        </>
    );
};

export default Hero;