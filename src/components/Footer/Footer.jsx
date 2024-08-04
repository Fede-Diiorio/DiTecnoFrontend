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

                        <div>
                            <h4>Compañia</h4>
                            <ul>
                                <li><Link>Sobre Nosotros</Link></li>
                                <li><Link>Nuestros Productos</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4>Ayuda</h4>
                            <ul>
                                <li><Link>Preguntas</Link></li>
                                <li><Link>Compras</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4>Siguenos</h4>

                            <ul>
                                <li><Link>Facebook</Link></li>
                                <li><Link>Instagram</Link></li>
                                <li><Link>LinkedIn</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer