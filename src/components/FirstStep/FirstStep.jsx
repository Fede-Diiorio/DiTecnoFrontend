import classes from './FirstStep.module.scss';
import Step from './Step/Step';
import Button from '../Button/Button'

const FirstStep = () => {
    return (
        <section className={classes.section} id='firstStep'>
            <div className={classes.frame}>
                <div className={classes.container}>
                    <h2>Elige tu puerta y ventana ideal</h2>
                    <p>Cinco simples pasos para encontrar la solución adecuada a tus necesidades.</p>
                    <div className={classes.cards}>
                        <Step number={'1'} paragraph={'Selecciona el tipo de producto que necesitas.'} />
                        <Step number={'2'} paragraph={'Elige la dirección de apertura de tu puerta o ventana.'} />
                        <Step number={'3'} paragraph={'Determina el estilo de apertura que prefieres.'} />
                        <Step number={'4'} paragraph={'Selecciona el color que mejor se adapte a tu espacio.'} />
                        <Step number={'5'} paragraph={'Indica la cantidad y las dimensiones de los productos.'} />
                    </div>

                    <Button to={'/product'}>Comenzar</Button>
                </div>
            </div>
        </section>
    );
};

export default FirstStep;
