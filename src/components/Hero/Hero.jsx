import classes from './Hero.module.scss';
import logo from '../../assets/ditecnoLogoCompleto.png'

const Hero = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className='container'>
                    <div className={classes.paramsOptions}>
                        <img src={logo} alt="Logo de DiTeno aberturas" />
                        <h1>DiTecno, aberturas de PVC</h1>
                        <h3>aberturas de PVC</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;