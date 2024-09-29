import classes from '../ProductForm.module.scss';
import { useLocation } from 'react-router-dom';

const FourCasement = ({ formData, handleInputChange }) => {

    const location = useLocation();
    const isWindow = location.pathname.includes('/ventana');

    const heightMin = isWindow ? .20 : 2;
    const heightMax = isWindow ? 2.10 : 2.40;
    const widthMin = isWindow ? .20 : 1;
    const widthMax = isWindow ? .70 : 1.50;
    const casementMin = isWindow ? .20 : .70;
    const casementMax = isWindow ? .70 : 2.10;

    return (
        <div className={classes.fields}>
            <div className={classes.field}>
                <label>Ancho [metros]: </label>
                <input
                    type="number"
                    min={widthMin}
                    max={widthMax}
                    name="width"
                    step={0.1}
                    value={formData.width}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className={classes.field}>
                <label>Alto [metros]: </label>
                <input
                    type="number"
                    min={heightMin}
                    max={heightMax}
                    name="height"
                    step={0.1}
                    value={formData.height}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className={classes.field}>
                <label>Medida de hoja [metros]: </label>
                <input
                    type="number"
                    min={casementMin}
                    max={casementMax}
                    name="casement"
                    step={0.1}
                    value={formData.casement}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className={classes.field}>
                <label>Medida de hoja 2 [metros]: </label>
                <input
                    type="number"
                    min={casementMin}
                    max={casementMax}
                    name="casement2"
                    step={0.1}
                    value={formData.casement2}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className={classes.field}>
                <label>Medida de hoja 3 [metros]: </label>
                <input
                    type="number"
                    min={casementMin}
                    max={casementMax}
                    name="casement3"
                    step={0.1}
                    value={formData.casement3}
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
