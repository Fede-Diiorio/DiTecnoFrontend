import classes from './Door.module.scss';
import { Route, Routes } from 'react-router-dom';
import DoorOptions from './DoorOptions/DoorOptions';

const Door = () => {
    return (
        <section>
            <Routes>
                <Route path='/' element={<DoorOptions />} />
            </Routes>
        </section>
    );
};

export default Door;