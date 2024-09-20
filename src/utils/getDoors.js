const apiUrl = import.meta.env.VITE_HOST;

export const getDoors = () => {
    return fetch(`${apiUrl}/api/puerta`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getDoorsStyle = (opening) => {
    return fetch(`${apiUrl}/api/puerta/${opening}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getDoorsType = (opening, style) => {
    return fetch(`${apiUrl}/api/puerta/${opening}/${style}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getDoorsDesigns = (opening, style, type) => {
    return fetch(`${apiUrl}/api/puerta/${opening}/${style}/${type}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};