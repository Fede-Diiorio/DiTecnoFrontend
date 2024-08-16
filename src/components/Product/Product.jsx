import Button from '../Button/Button';
import Selector from '../Selector/Selector';

const Product = () => {
    return (
        <Selector title={'Elija una opción'} description={'Para precisar su presupuesto de manera óptima, complete con la opción deseada.'} returnUrl={'/'}>
            <div className='optionButtonflex'>
                <Button to={'/puerta'}>Puerta</Button>
                <Button to={'/ventana'}>Ventana</Button>
            </div>
        </Selector>
    );
};

export default Product