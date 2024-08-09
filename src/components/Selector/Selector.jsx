import classes from './Selector.module.scss';
import { useEffect } from 'react';


const Hero = ({ title, description, items }) => {


    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <div className={classes.hero}>
                    <h2>{title}</h2>
                    <p>{description}</p>



                </div>
            </div>
        </section>
    );
};

export default Hero;