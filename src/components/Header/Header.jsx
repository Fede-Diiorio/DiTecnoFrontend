import classes from './Header.module.scss';
import { FaBars } from "react-icons/fa6";
import ditecnoImage from '../../assets/ditecnoNombre.png'

const Header = () => {
    return (
        <header className={classes.background}>
            <div className={classes.container}>
                <img src={ditecnoImage} alt="Imagen de DiTecno" className={classes.headerTitle} />
                <FaBars className={classes.headerIcon} />
            </div>

        </header>
    );
};

export default Header;