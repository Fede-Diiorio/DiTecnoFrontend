import classes from './ErrorView.module.scss';
import { FaFaceDizzy } from "react-icons/fa6";
import Selector from '../Selector/Selector';

const ErrorView = () => {
    return (
        <Selector>
            <div className={`container ${classes.container}`}>
                <FaFaceDizzy className={classes.icon} />
                <h2 className={classes.title}>404</h2>
                <p className={classes.paragraph}>Ha ocurido un error y no se puede acceder al producto detallado.</p>
            </div>
        </Selector>
    );
};

export default ErrorView;