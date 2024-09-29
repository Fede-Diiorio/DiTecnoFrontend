import Button from '../Button/Button';
import Selector from '../Selector/Selector';
import { useTitle } from '../../utils/useTitle'
import { useLocation } from 'react-router-dom';

const Product = () => {

    const location = useLocation();
    const condition = location.pathname.includes('/producto');

    useTitle(condition, 'DiTecno | Selección de producto')

    return (
        <Selector title={'Elija una opción'} description={'Para precisar su presupuesto de manera óptima, complete con la opción deseada.'}>
            <div className='optionButtonflex'>
                <Button to={'/puerta'}>Puerta</Button>
                <Button to={'/ventana'}>Ventana</Button>
            </div>
        </Selector>
    );
};

export default Product