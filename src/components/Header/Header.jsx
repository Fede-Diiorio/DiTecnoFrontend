import classes from './Header.module.scss';
import { FaBars } from "react-icons/fa6";
import ditecnoImage from '../../assets/ditecnoNombre.png'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


const Header = () => {
    return (
        <header className={classes.background}>
            <div className={`container ${classes.container}`}>
                <Link to={'/'}><img src={ditecnoImage} alt="Imagen de DiTecno" className={classes.headerTitle} /></Link>
                <div className={classes.icons}>
                    <CartWidget />
                    <FaBars className={classes.icon} />
                </div>
            </div>
        </header>
    );
};

export default Header;