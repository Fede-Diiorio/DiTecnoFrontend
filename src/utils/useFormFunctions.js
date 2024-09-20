import { toast } from 'react-toastify';

const successNotification = () => toast.success('¡Producto cargado!');
const alertNotification = () => toast.warn('Por favor, selecciona al menos un color.', { autoClose: 5000 });

export const initializeFormData = (opening, style, type) => ({
    product: 'ventana',
    opening,
    style,
    type,
    width: '',
    height: '',
    casement: '',
    casement2: '',
    quantity: '',
    glassType: '',
    colors: [],
});

// Función para manejar cambios de input (checkbox y otros)
export const handleInputChange = (e, formData, setFormData) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
        setFormData(prevData => {
            const updatedColors = checked
                ? [...prevData.colors, value]
                : prevData.colors.filter(color => color !== value);
            return { ...prevData, colors: updatedColors };
        });
    } else {
        setFormData(prevData => {
            let newValue;
            if (name === 'quantity') {
                newValue = parseInt(value, 10) || '';
            } else if (['width', 'height', 'casement', 'casement2'].includes(name)) {
                newValue = parseFloat(value) || '';
            } else {
                newValue = value;
            }
            return { ...prevData, [name]: newValue };
        });
    }
};

// Función para enviar el formulario
export const handleSubmit = (e, formData, addItem, navigate) => {
    e.preventDefault();
    if (formData.colors.length === 0) {
        alertNotification();
        return;
    };
    addItem(formData);
    successNotification();
    navigate('/');
};
