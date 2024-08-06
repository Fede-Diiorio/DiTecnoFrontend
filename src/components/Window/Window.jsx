import { Route, Routes } from 'react-router-dom';
import WindowOptions from './WindowOptions/WindowOptions';

const Window = () => {
    return (
        <section>
            <Routes>
                <Route path='/' element={<WindowOptions />} />
            </Routes>
        </section>
    );
};

export default Window;