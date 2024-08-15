import classes from './Header.module.scss';
import { FaBars } from "react-icons/fa6";
import ditecnoImage from '../../assets/ditecnoNombre.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={classes.background}>
            <div className={classes.container}>
                <Link to={'/'}><img src={ditecnoImage} alt="Imagen de DiTecno" className={classes.headerTitle} /></Link>
                <FaBars className={classes.headerIcon} />
            </div>
        </header>
    );
};

export default Header;