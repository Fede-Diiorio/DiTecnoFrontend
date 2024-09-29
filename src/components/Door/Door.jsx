import { Route, Routes } from 'react-router-dom';
import DoorOpening from './DoorOpening/DoorOpening';
import DoorSyle from './DoorStyle/DoorStyle';
import DoorType from './DoorType/DoorType';
import DoorDesign from './DoorDesign/DoorDesign';
import ProductForm from '../ProductForm/ProductForm';
import { useTitle } from '../../utils/useTitle'
import { useLocation } from 'react-router-dom';

const Door = () => {

    const location = useLocation();
    const condition = location.pathname.includes('/puerta');
    useTitle(condition, 'DiTecno | Puertas');

    return (
        <section >
            <div >
                <Routes>
                    <Route path='/' element={<DoorOpening />} />
                    <Route path='/:opening' element={<DoorSyle />} />
                    <Route path='/:opening/:style/' element={<DoorType />} />
                    <Route path='/:opening/:style/:type' element={<DoorDesign />} />
                    <Route path='/:opening/:style/:type/:design' element={<ProductForm />} />
                </Routes>
            </div>
        </section>
    );
};

export default Door;