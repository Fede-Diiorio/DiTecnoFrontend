import classes from '../WindowForm.module.scss';

const OneCasement = ({ formData, handleInputChange }) => {
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

export default OneCasement;
