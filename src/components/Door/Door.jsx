import classes from './Door.module.scss';
import { Route, Routes } from 'react-router-dom';
import DoorOptions from './DoorOptions/DoorOptions';
import DoorColor from './DoorColor/DoorColor';
import DoorForm from './DoorForm/DoorForm';

const Door = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <Routes>
                    <Route path='/' element={<DoorOptions />} />
                    <Route path=':option' element={<DoorColor />} />
                    <Route path=':option/:color' element={<DoorForm />} />
                </Routes>
            </div>
        </section>
    );
};

export default Door;