import classes from './GlassOptions.module.scss';
import { useLocation } from 'react-router-dom';

const GlassOptions = ({ formData, handleInputChange }) => {

    const location = useLocation();
    const isWindow = location.pathname.includes('/ventana');

    if (!isWindow) return null;

    return (
        <div className={classes.radios}>
            <div className={classes.radio}>
                <label htmlFor="dvhEstandar">Vidrio DVH estándar</label>
                <input
                    type="radio"
                    id="dvhEstandar"
                    name="glassType"
                    value="Estandar"
                    onChange={(e) => handleInputChange(e, formData)}
                    required
                />
            </div>

            <div className={classes.radio}>
                <label htmlFor="dvhLaminado">Vidrio DVH laminado</label>
                <input
                    type="radio"
                    id="dvhLaminado"
                    name="glassType"
                    value="Laminado"
                    onChange={(e) => handleInputChange(e, formData)}
                />
            </div>
        </div>
    );
};

export default GlassOptions;
