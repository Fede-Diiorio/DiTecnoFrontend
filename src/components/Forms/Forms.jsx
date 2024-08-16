import Selector from "../Selector/Selector";
import { useParams } from "react-router-dom";
import classes from './Forms.module.scss';

const Forms = () => {

    const { type } = useParams();

    if (type !== 'simple') {
        return (
            <Selector title={'Finalizar producto'} description={'Complete con los datos solicitados para terminar de procesar su solicitud.'}>
                <form action="" className={classes.form}>
                    <legend>Complete todos los campos para terminar de cargar su producto</legend>

                    <div className={classes.container}>

                        <div className={classes.field}>
                            <label>Ancho de la hoja fija(cm): </label>
                            <input type="number" placeholder="Ancho" min={20} name='fixedWight' />
                        </div>

                        <div className={classes.field}>
                            <label>Alto de la hoja fija(cm): </label>
                            <input type="number" placeholder="Alto" min={20} name='fixedHeight' />
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

                    <input type="submit" value='Agregar al carrito' className={classes.submit} />

                </form>
            </Selector>
        );
    } else {
        return (
            <Selector title={'Finalizar producto'} description={'Complete con los datos solicitados para terminar de procesar su solicitud.'}>
                <form action="" className={classes.form}>
                    <legend>Complete todos los campos para terminar de cargar su producto</legend>

                    <div className={classes.container}>

                        <div className={classes.field}>
                            <label>Ancho (cm): </label>
                            <input type="number" placeholder="Ancho" min={20} name='wight' />
                        </div>

                        <div className={classes.field}>
                            <label>Alto (cm): </label>
                            <input type="number" placeholder="Alto" min={20} name='height' />
                        </div>

                        <div className={classes.field}>
                            <label>Cantidad: </label>
                            <input type="number" placeholder="Cantitdad" min={1} name='quatity' />
                        </div>

                    </div>

                    <input type="submit" value='Agregar al carrito' className={classes.submit} />

                </form>
            </Selector>
        );
    };
};

export default Forms