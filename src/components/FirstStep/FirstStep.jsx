import classes from './FirstStep.module.scss';
import Step from './Step/Step';
import Button from '../Button/Button'

const FirstStep = () => {
    return (
        <section className={classes.section} id='firstStep'>
            <div className={classes.frame}>
                <div className={`container ${classes.container}`}>
                    <h2>Eligí tu puerta y ventana ideal</h2>
                    <p>Cinco simples pasos para encontrar la solución adecuada a tus necesidades.</p>
                    <div className={classes.cards}>
                        <Step number={'1'} paragraph={'Seleccioná el tipo de producto que necesites.'} />
                        <Step number={'2'} paragraph={'Eligí la dirección de apertura de tu puerta o ventana.'} />
                        <Step number={'3'} paragraph={'Determiná el estilo de abertura que prefieras.'} />
                        <Step number={'4'} paragraph={'Seleccioná el color que mejor se adapte a tu espacio.'} />
                        <Step number={'5'} paragraph={'Indicá la cantidad y las dimensiones de los productos.'} />
                    </div>

                    <Button to={'/producto'}>Comenzar</Button>
                </div>
            </div>
        </section>
    );
};

export default FirstStep;
