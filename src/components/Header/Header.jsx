import React, { useState, useEffect } from 'react';
import classes from './Header.module.scss';
import { FaBars } from "react-icons/fa6";
import ditecnoImage from '../../assets/ditecnoNombre.png';
import { Link, useLocation } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();  // Hook para detectar cambios en la ruta actual

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Cierra el menú cuando cambie la ruta, lo que implica que otro componente se monta
    useEffect(() => {
        closeMenu();
    }, [location]);

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
                        <li><Link className={classes.link} onClick={closeMenu} to="/">Inicio</Link></li>
                        <li><Link className={classes.link} onClick={closeMenu} to="/nosotros">Nosotros</Link></li>
                        <li><Link className={classes.link} onClick={closeMenu} to="/galeria">Galería</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
