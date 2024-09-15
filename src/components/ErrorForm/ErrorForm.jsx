import classes from './ErrorForm.module.scss';
import Selector from '../Selector/Selector';

const ErrorForm = () => {
    return (
        <Selector>
            <form action="" className={classes.form}>
                <legend>Describa la naturaleza de su error</legend>
                <textarea className={classes.textarea} name="error" id="error" cols="30" rows="10"></textarea>
                <input className={classes.button} type="submit" value={'Enviar reporte'} />
            </form>
        </Selector>
    );
};

export default ErrorForm;