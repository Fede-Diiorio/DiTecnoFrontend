import classes from './BackButton.module.scss';
import { TiArrowBack } from "react-icons/ti";


const BackButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className={classes.backButton}>
            <TiArrowBack className={classes.backArrow} />
            <p>Volver</p>
        </button>
    );
};

export default BackButton;