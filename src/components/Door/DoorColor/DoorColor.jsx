import classes from './DoorColor.module.scss';

const DoorColor = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className={classes.container}>
                    <div className={classes.doorOptions}>
                        <h2>Seleccione el color de su abertura</h2>
                        <div className={classes.options}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoorColor;