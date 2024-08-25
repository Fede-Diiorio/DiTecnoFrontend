const apiUrl = import.meta.env.VITE_HOST;

export const getWindows = () => {
    return fetch(`${apiUrl}/api/ventana`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getWindowsStyle = (opening) => {
    return fetch(`${apiUrl}/api/ventana/${opening}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getWindowsTypes = (opening, style) => {
    return fetch(`${apiUrl}/api/ventana/${opening}/${style}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};

export const getWindowImage = (opening, style, type) => {
    return fetch(`${apiUrl}/api/ventana/${opening}/${style}/${type}`)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .catch(error => {
            console.error('Error en el fetch: ', error);
            return [];
        });
};
