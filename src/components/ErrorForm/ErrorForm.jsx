import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './ErrorForm.module.scss';
import Selector from '../Selector/Selector';
import { toast } from 'react-toastify';

const ErrorForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_HOST;
    const successNotify = () => toast.success('Se ha reportado el error');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envía el mensaje al backend
            const response = await fetch(`${apiUrl}/api/support/report`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ error: errorMessage }), // Envía el contenido del textarea como JSON
            });

            if (response.ok) {
                successNotify();
                navigate('/');
            } else {
                console.error('Error al enviar el reporte');
            }
        } catch (error) {
            console.error('Hubo un error al enviar los datos:', error);
        }
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