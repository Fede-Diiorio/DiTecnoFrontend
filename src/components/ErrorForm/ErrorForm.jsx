import { useState } from 'react';
import classes from './ErrorForm.module.scss';
import Selector from '../Selector/Selector';
import { useReportError } from '../../utils/reportError';

const ErrorForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const reportError = useReportError();

    const handleSubmit = (e) => {
        e.preventDefault();
        reportError(errorMessage);
    };

    return (
        <Selector>
            <form onSubmit={handleSubmit} className={classes.form}>
                <legend>Describa la naturaleza de su error</legend>
                <textarea
                    className={classes.textarea}
                    name="error"
                    id="error"
                    cols="30"
                    rows="10"
                    value={errorMessage} // El valor está controlado por el estado
                    onChange={(e) => setErrorMessage(e.target.value)} // Actualiza el estado cuando el usuario escribe
                ></textarea>
                <input className={classes.button} type="submit" value={'Enviar reporte'} />
            </form>
        </Selector>
    );
};

export default ErrorForm;