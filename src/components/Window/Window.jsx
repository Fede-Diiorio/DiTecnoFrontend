import { Route, Routes, useLocation } from 'react-router-dom';
import WindowOpening from './WindowOpening/WindowOpening';
import WindowStyle from './WindowStyle/WindowStyle';
import WindowType from './WindowType/WindowType';
import ProductForm from '../ProductForm/ProductForm';
import { useTitle } from '../../utils/useTitle';

const Window = () => {

    const location = useLocation();
    const condition = location.pathname.includes('/ventana');

    useTitle(condition, 'DiTecno | Ventanas');

    return (
        <section>
            <Routes>
                <Route path='/' element={<WindowOpening />} />
                <Route path='/:opening' element={<WindowStyle />} />
                <Route path='/:opening/:style' element={<WindowType />} />
                <Route path='/:opening/:style/:type/' element={<ProductForm />} />
            </Routes>
        </section>
    );
};

export default Window;