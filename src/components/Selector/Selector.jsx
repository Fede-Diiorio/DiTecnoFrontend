import classes from './Selector.module.scss';
import { TiArrowBack } from "react-icons/ti";
import { Link } from 'react-router-dom';


const Selector = ({ title, description, children, returnUrl }) => {

    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className={classes.container}>
                    <div className={classes.paramsOptions}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        {children}
                    </div>
                    <Link to={returnUrl}><TiArrowBack className={classes.backArrow} /></Link>
                </div>
            </div>
        </section>
    );
};

export default Selector;