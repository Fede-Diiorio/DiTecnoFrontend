import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useReportError = () => {
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_HOST;
    const successNotify = () => toast.success('Se ha reportado el error');

    const reportError = async (errorMessage) => {
        try {
            const response = await fetch(`${apiUrl}/api/support/report`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ error: errorMessage }),
            });

            if (response.ok) {
                successNotify();
                navigate('/');
            } else {
                console.error('Error al enviar el reporte');
            }
        } catch (error) {
            console.error('Hubo un error al enviar los datos:', error);
        };
    };

    return reportError;
};