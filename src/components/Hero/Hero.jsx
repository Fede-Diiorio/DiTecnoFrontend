import classes from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <h1>DiTecno, aberturas de PVC</h1>
                <h4>Asistente de presupuesto</h4>
            </div>
        </section>
    )
}

export default Hero;