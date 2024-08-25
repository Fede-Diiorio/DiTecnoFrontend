import { Route, Routes } from 'react-router-dom';
import WindowOpening from './WindowOpening/WindowOpening';
import WindowStyle from './WindowStyle/WindowStyle';
import WindowType from './WindowType/WindowType';
import WindowForm from '../WindowForm/WindowForm';

const Window = () => {
    return (
        <section>
            <Routes>
                <Route path='/' element={<WindowOpening />} />
                <Route path='/:opening' element={<WindowStyle />} />
                <Route path='/:opening/:style' element={<WindowType />} />
                <Route path='/:opening/:style/:type/' element={<WindowForm />} />
            </Routes>
        </section>
    );
};

export default Window;