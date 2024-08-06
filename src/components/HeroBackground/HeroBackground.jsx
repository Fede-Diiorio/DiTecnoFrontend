import classes from './HeroBackground.module.scss';

const HeroBackground = ({ children }) => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                {children}
            </div>
        </section>
    );
};

export default HeroBackground;