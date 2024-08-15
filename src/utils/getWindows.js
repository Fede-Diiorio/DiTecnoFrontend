export const getWindows = () => {
    return fetch('http://localhost:8080/api/ventana')
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getWindowsStyle = (opening) => {
    return fetch(`http://localhost:8080/api/ventana/${opening}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getWindowsTypes = (opening, style) => {
    return fetch(`http://localhost:8080/api/ventana/${opening}/${style}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getWindowsColors = (opening, style, type) => {
    return fetch(`http://localhost:8080/api/ventana/${opening}/${style}/${type}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};
