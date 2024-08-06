import classes from './Footer.module.scss';
import ditecnoLogo from '../../assets/ditecnoLogoCompleto.png'
import { Link } from 'react-router-dom';
import { FaSquareFacebook, FaWhatsapp, FaLocationDot, FaLinkedin } from "react-icons/fa6";

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
                            <h4>Contáctanos</h4>
                            <ul className={classes.icons}>
                                <li><a href="https://www.facebook.com/ditecnoaberturas/" target="_blank" className={classes.infoIcon}><FaSquareFacebook className={classes.icon} /></a></li>
                                <li><a href="https://www.linkedin.com/in/roberto-di-iorio-b976a726/?originalSubdomain=ar" target='_blank' className={classes.infoIcon}><FaLinkedin className={classes.icon} /></a></li>
                                <li><a href="https://www.google.com/maps/search/?api=1&query=Jaime+Fernandez+Speroni+713,+V9420+R%C3%ADo+Grande,+Tierra+del+Fuego" target='_blank' className={classes.infoIcon}><FaLocationDot className={classes.icon} /></a></li>
                                <li><a href="https://wa.me/0296415611286" target='_blank' className={classes.infoIcon}><FaWhatsapp className={classes.icon} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer