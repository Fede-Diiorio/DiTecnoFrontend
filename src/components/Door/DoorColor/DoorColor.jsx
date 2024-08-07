import { Link } from 'react-router-dom';
import classes from './DoorColor.module.scss';
import oakTexcture from '../../../assets/roble.jpg';
import walnutTexcture from '../../../assets/nogal.jpg';
import { TiArrowBack } from "react-icons/ti";
import { useParams } from 'react-router-dom';

const DoorColor = () => {

    const { option } = useParams();

    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className={classes.container}>
                    <div className={classes.doorOptions}>
                        <h2>Seleccione el color de su abertura</h2>
                        <div className={classes.options}>
                            <Link className={classes.option} to={'roble'}>
                                <h4>Roble</h4>
                                <img src={oakTexcture} alt="Imagen de textura Roble" />
                            </Link>
                            <Link className={classes.option} to={'nogal'}>
                                <h4>Nogal</h4>
                                <img src={walnutTexcture} alt="Imagen de textura Roble" />
                            </Link>
                            <Link className={classes.option} to={'liso'}>
                                <h4>Panel Liso</h4>
                                <div className={classes.color}></div>
                            </Link>
                        </div>
                    </div>
                    <Link to={`/puerta`}><TiArrowBack className={classes.backArrow} /></Link>
                </div>
            </div>
        </section>
    );
};

export default DoorColor;