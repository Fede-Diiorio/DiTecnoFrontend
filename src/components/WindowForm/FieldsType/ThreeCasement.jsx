import classes from '../WindowForm.module.scss';

const ThreeCasement = ({ formData, handleInputChange }) => {
    return (
        <div className={classes.fields}>
            <div className={classes.field}>
                <label>Ancho: </label>
                <input
                    type="number"
                    min={20}
                    max={70}
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
                    min={20}
                    max={210}
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
                    min={20}
                    max={210}
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
                    min={20}
                    max={210}
                    name="casement2"
                    value={formData.casement2}
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

export default ThreeCasement;
