import { Route, Routes } from 'react-router-dom';
import DoorOpening from './DoorOpening/DoorOpening';
import DoorType from './DoorType/DoorType';
import DoorColor from './DoorColor/DoorColor';
import DoorDesign from './DoorDesign/DoorDesign';

const Door = () => {
    return (
        <section >
            <div >
                <Routes>
                    <Route path='/' element={<DoorOpening />} />
                    <Route path='/:opening' element={<DoorType />} />
                    <Route path='/:opening/:type' element={<DoorColor />} />
                    <Route path='/:opening/:type/:color' element={<DoorDesign />} />
                </Routes>
            </div>
        </section>
    );
};

export default Door;