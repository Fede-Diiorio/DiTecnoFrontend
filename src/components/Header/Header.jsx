import classes from './Header.module.scss';
import { FaBars, FaCartShopping } from "react-icons/fa6";
import ditecnoImage from '../../assets/ditecnoNombre.png'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className={classes.background}>
            <div className={classes.container}>
                <Link to={'/'}><img src={ditecnoImage} alt="Imagen de DiTecno" className={classes.headerTitle} /></Link>
                <div className={classes.icons}>
                    <Link><FaCartShopping className={classes.icon} /></Link>
                    <FaBars className={classes.icon} />
                </div>
            </div>
        </header>
    );
};

export default Header;