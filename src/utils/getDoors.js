const apiUrl = import.meta.env.VITE_HOST;

export const getDoors = () => {
    return fetch(`${apiUrl}/api/puerta`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getDoorsType = (opening) => {
    return fetch(`${apiUrl}/api/puerta/${opening}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getDoorsDesigns = (opening, type) => {
    return fetch(`${apiUrl}/api/puerta/${opening}/${type}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getDoorsColors = (opening, type, design) => {
    return fetch(`${apiUrl}/api/puerta/${opening}/${type}/${design}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};