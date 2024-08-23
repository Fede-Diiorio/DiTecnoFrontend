import classes from './Hero.module.scss';
import { FaAnglesDown } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className='container'>
                    <div className={classes.paramsOptions}>
                        <h1>DiTecno, aberturas de PVC</h1>
                        <h4>Asistente de presupuesto</h4>
                        <a href="#firstStep"><FaAnglesDown className={classes.heroIcon} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;