import classes from './DoorForm.module.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TiArrowBack } from "react-icons/ti";

const DoorForm = () => {
    const { option } = useParams();
    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className={classes.container}>
                    <h2>Finalizar producto</h2>
                    <form action="">
                        <legend>Complete el formulario para poder cargar el producto al pedido</legend>
                    </form>
                    <Link to={`/puerta/${option}`}><TiArrowBack className={classes.backArrow} /></Link>
                </div>
            </div>
        </section>
    );
};

export default DoorForm;