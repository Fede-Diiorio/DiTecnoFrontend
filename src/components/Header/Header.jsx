import React, { useState } from 'react';
import classes from './Header.module.scss';
import { FaBars } from "react-icons/fa6";
import ditecnoImage from '../../assets/ditecnoNombre.png';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={classes.background}>
            <div className={`container ${classes.container}`}>
                <Link to={'/'}><img src={ditecnoImage} alt="Imagen de DiTecno" className={classes.headerTitle} /></Link>
                <div className={classes.icons}>
                    <CartWidget />
                    <FaBars className={classes.icon} onClick={toggleMenu} />
                </div>
            </div>

            <div className={`container ${isMenuOpen ? classes.open : ''}`}>
                <nav className={`${classes.dropdownMenu} ${isMenuOpen ? classes.open : ''}`}>
                    <ul>
                        <li><Link onClick={closeMenu} to="/">Inicio</Link></li>
                        <li><Link onClick={closeMenu} to="/nosotros">Nosotros</Link></li>
                        <li><Link onClick={closeMenu} to="/galeria">Galería</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
