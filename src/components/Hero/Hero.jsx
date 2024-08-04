import classes from './Hero.module.scss';
import { FaAnglesDown } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <h1>DiTecno, aberturas de PVC</h1>
                <h4>Asistente de presupuesto</h4>
                <FaAnglesDown className={classes.heroIcon} />
            </div>
        </section>
    )
}

export default Hero;