import { Route, Routes, useParams } from 'react-router-dom';
import DoorOpening from './DoorOpening/DoorOpening';
import DoorSyle from './DoorStyle/DoorStyle';
import DoorType from './DoorType/DoorType';
import DoorDesign from './DoorDesign/DoorDesign';

const Door = () => {

    return (
        <section >
            <div >
                <Routes>
                    <Route path='/' element={<DoorOpening />} />
                    <Route path='/:opening' element={<DoorSyle />} />
                    <Route path='/:opening/:style/' element={<DoorType />} />
                    <Route path='/:opening/:style/:type' element={<DoorDesign />} />
                </Routes>
            </div>
        </section>
    );
};

export default Door;