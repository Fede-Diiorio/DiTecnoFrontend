export const getDoors = () => {
    return fetch('http://localhost:8080/api/puerta')
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return []; // Devuelve un array vacío en caso de error para evitar fallos en el componente.
        });
};

export const getDoorsType = (opening) => {
    return fetch(`http://localhost:8080/api/puerta/${opening}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return []; // Devuelve un array vacío en caso de error para evitar fallos en el componente.
        });
};

export const getDoorColors = (opening, type) => {
    return fetch(`http://localhost:8080/api/puerta/${opening}/${type}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return []; // Devuelve un array vacío en caso de error para evitar fallos en el componente.
        });
};

export const getDoorDesigns = (opening, type, color) => {
    return fetch(`http://localhost:8080/api/puerta/${opening}/${type}/${color}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return []; // Devuelve un array vacío en caso de error para evitar fallos en el componente.
        });
};
