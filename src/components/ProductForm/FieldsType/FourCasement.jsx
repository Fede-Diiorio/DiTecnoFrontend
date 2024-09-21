import classes from '../ProductForm.module.scss';
import { useLocation } from 'react-router-dom';

const FourCasement = ({ formData, handleInputChange }) => {

    const location = useLocation();
    const isWindow = location.pathname.includes('/ventana');

    const heightMin = isWindow ? 20 : 2000;
    const heightMax = isWindow ? 210 : 2200;
    const widthMin = isWindow ? 20 : 1000;
    const widthMax = isWindow ? 70 : 1200;

    return (
        <div className={classes.fields}>
            <div className={classes.field}>
                <label>Ancho: </label>
                <input
                    type="number"
                    min={widthMin}
                    max={widthMax}
                    name="width"
                    value={formData.width}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className={classes.field}>
                <label>Alto: </label>
                <input
                    type="number"
                    min={heightMin}
                    max={heightMax}
                    name="height"
                    value={formData.height}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className={classes.field}>
                <label>Medida de hoja: </label>
                <input
                    type="number"
                    min={widthMin}
                    max={widthMax}
                    name="casement"
                    value={formData.casement}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className={classes.field}>
                <label>Medida de hoja 2: </label>
                <input
                    type="number"
                    min={heightMin}
                    max={heightMax}
                    name="casement2"
                    value={formData.casement}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className={classes.field}>
                <label>Medida de hoja 3: </label>
                <input
                    type="number"
                    min={widthMin}
                    max={widthMax}
                    name="casement3"
                    value={formData.casement}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className={classes.field}>
                <label>Cantidad: </label>
                <input
                    type="number"
                    min={1}
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                />
            </div>
        </div>
    );
};

export default FourCasement;
