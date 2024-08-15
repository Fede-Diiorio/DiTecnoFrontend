import classes from './Door.module.scss';
import { Route, Routes } from 'react-router-dom';
import DoorOpening from './DoorOpening/DoorOpening';
import DoorType from './DoorType/DoorType';

const Door = () => {



    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <Routes>
                    <Route path='/' element={<DoorOpening />} />
                    <Route path='/:opening' element={<DoorType />} />
                </Routes>
            </div>
        </section>
    );
};

export default Door;