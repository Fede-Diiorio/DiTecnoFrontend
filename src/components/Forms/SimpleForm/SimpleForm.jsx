import Selector from "../../Selector/Selector";
import classes from './SimpleForm.module.scss';

const SimpleForm = () => {

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

                <input type="submit" value='Generar Orden' className={classes.submit} />

            </form>
        </Selector>

    );
};

export default SimpleForm;