import classes from './Selector.module.scss';
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

const Selector = ({ title, description, children }) => {
    const navigate = useNavigate();

    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className='container'>
                    <div className={classes.paramsOptions}>
                        <h2 className={classes.h2}>{title}</h2>
                        <p className={classes.p}>{description}</p>
                        <div className={classes.children}>
                            {children}
                        </div>
                    </div>
                    <BackButton onClick={() => navigate(-1)} />
                </div>
            </div>
        </section>
    );
};

export default Selector;
