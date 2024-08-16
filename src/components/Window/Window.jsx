import { Route, Routes } from 'react-router-dom';
import WindowOpening from './WindowOpening/WindowOpening';
import WindowStyle from './WindowStyle/WindowStyle';
import WindowType from './WindowType/WindowType';
import WindowColor from './WindowColor/WindowColor';
import Forms from '../Forms/Forms';

const Window = () => {
    return (
        <section>
            <Routes>
                <Route path='/' element={<WindowOpening />} />
                <Route path='/:opening' element={<WindowStyle />} />
                <Route path='/:opening/:style' element={<WindowType />} />
                <Route path='/:opening/:style/:type' element={<WindowColor />} />
                <Route path='/:opening/:style/:type/:color' element={<Forms />} />
            </Routes>
        </section>
    );
};

export default Window;