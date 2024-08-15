import { Route, Routes } from 'react-router-dom';
import DoorOpening from './DoorOpening/DoorOpening';
import DoorType from './DoorType/DoorType';
import DoorColor from './DoorColor/DoorColor';

const Door = () => {
    return (
        <section >
            <div >
                <Routes>
                    <Route path='/' element={<DoorOpening />} />
                    <Route path='/:opening' element={<DoorType />} />
                    <Route path='/:opening/:type' element={<DoorColor />} />

                </Routes>
            </div>
        </section>
    );
};

export default Door;