export const getDoors = () => {
    return fetch('http://localhost:8080/api/puerta')
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getDoorsType = (opening) => {
    return fetch(`http://localhost:8080/api/puerta/${opening}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getDoorsDesigns = (opening, type) => {
    return fetch(`http://localhost:8080/api/puerta/${opening}/${type}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getDoorsColors = (opening, type, design) => {
    return fetch(`http://localhost:8080/api/puerta/${opening}/${type}/${design}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};