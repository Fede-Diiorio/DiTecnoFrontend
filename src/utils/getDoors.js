export const getDoors = () => {
    return fetch('http://localhost:8080/api/puerta')
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return []; // Devuelve un array vacío en caso de error para evitar fallos en el componente.
        });
};

export const getDoorsType = (type) => {
    return fetch(`http://localhost:8080/api/puerta/${type}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return []; // Devuelve un array vacío en caso de error para evitar fallos en el componente.
        });
};
