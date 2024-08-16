import Selector from "../../Selector/Selector";
import classes from './DobleForm.module.scss';
import { useParams } from "react-router-dom";

const DobleForm = ({ product }) => {

    const { opening, style, type, color } = useParams();

    const url = product === 'puerta' ? `/${product}/${opening}/${type}/${color}` : `/${product}/${opening}/${style}/${type}`;

    return (
        <Selector title={'Finalizar producto'} description={'Complete con los datos solicitados para terminar de procesar su solicitud.'} returnUrl={url}>
            <form action="" className={classes.form}>
                <legend>Complete todos los campos para terminar de cargar su producto</legend>

                <div className={classes.container}>

                    <div className={classes.field}>
                        <label>Ancho de la hoja fija(cm): </label>
                        <input type="number" placeholder="Ancho" min={20} name='wight' />
                    </div>

                    <div className={classes.field}>
                        <label>Alto de la hoja fija(cm): </label>
                        <input type="number" placeholder="Alto" min={20} name='height' />
                    </div>

                    <div className={classes.field}>
                        <label>Ancho de la hoja móvil(cm): </label>
                        <input type="number" placeholder="Ancho" min={20} name='wight' />
                    </div>

                    <div className={classes.field}>
                        <label>Alto de la hoja móvil(cm): </label>
                        <input type="number" placeholder="Alto" min={20} name='height' />
                    </div>

                    <div className={classes.field}>
                        <label>Cantidad: </label>
                        <input type="number" placeholder="Cantitdad" min={1} name='quatity' />
                    </div>

                </div>

                <input type="submit" value='Generar Orden' className={classes.submit} />

            </form>
        </Selector>

    );
};

export default DobleForm;