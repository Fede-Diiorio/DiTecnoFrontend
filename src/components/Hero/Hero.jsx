import classes from './Hero.module.scss';
import logo from '../../assets/ditecnoLogoCompleto.png'
import Button from '../Button/Button';

const Hero = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className='container'>
                    <div className={classes.paramsOptions}>
                        <div className={classes.title}>
                            <img src={logo} alt="Logo de DiTeno aberturas" />
                            <h1>DiTecno, aberturas de PVC</h1>
                            <h3>Aberturas de PVC</h3>

                        </div>
                        <div className={`container ${classes.steps}`}>
                            <h4>Eligí tu puerta y ventana ideal en pocos pasos</h4>
                            <Button to={'/producto'}>Comenzar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;