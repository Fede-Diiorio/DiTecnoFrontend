import classes from './Footer.module.scss';
import ditecnoLogo from '../../assets/ditecnoLogoCompleto.png'
import { Link } from 'react-router-dom';

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
                            <ul>
                                <li><Link className={classes.infoLi}>Facebook</Link></li>
                                <li><Link className={classes.infoLi}>Instagram</Link></li>
                                <li><Link className={classes.infoLi}>LinkedIn</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer