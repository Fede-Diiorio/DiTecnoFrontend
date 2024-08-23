const apiUrl = import.meta.env.VITE_HOST;

export const getColors = () => {
    return fetch(`${apiUrl}/api/colores`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};