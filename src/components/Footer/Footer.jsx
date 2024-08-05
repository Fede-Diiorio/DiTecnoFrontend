import classes from './Footer.module.scss';
import ditecnoLogo from '../../assets/ditecnoLogoCompleto.png'
import { Link } from 'react-router-dom';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer id='footer'>
            <div className={classes.background}>
                <div className={classes.container}>
                    <div className={classes.info}>
                        <Link to='/'><img className={classes.infoLogo} src={ditecnoLogo} alt="Logo de la Empresa" /></Link>

                        <div className={classes.infoColumn}>
                            <h4>Compañia</h4>
                            <ul>
                                <li><Link className={classes.infoLi}>Sobre Nosotros</Link></li>
                                <li><Link className={classes.infoLi}>Nuestros Productos</Link></li>
                            </ul>
                        </div>

                        <div className={classes.infoColumn}>
                            <h4>Ayuda</h4>
                            <ul>
                                <li><Link className={classes.infoLi}>Preguntas</Link></li>
                                <li><Link className={classes.infoLi}>Compras</Link></li>
                            </ul>
                        </div>

                        <div className={classes.infoColumn}>
                            <h4>Siguenos</h4>
                            <ul className={classes.icons}>
                                <li><a href="#" className={classes.infoIcon}><FaSquareFacebook className={classes.icon} /></a></li>
                                <li><a href="#" className={classes.infoIcon}><FaInstagram className={classes.icon} /></a></li>
                                <li><a href="#" className={classes.infoIcon}><FaLinkedin className={classes.icon} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer