import classes from '../WindowForm.module.scss';

const OneCasement = () => {
    return (
        <div className={classes.fields}>

            <div className={classes.field}>
                <label>Ancho: </label>
                <input type="number" min={20} max={70} required={true} name='width' />
            </div>

            <div className={classes.field}>
                <label>Alto: </label>
                <input type="number" min={20} max={210} required={true} name='height' />
            </div>

            <div className={classes.field}>
                <label>Cantidad: </label>
                <input type="number" min={1} required={true} name='quantity' />
            </div>

        </div>
    );
};

export default OneCasement;