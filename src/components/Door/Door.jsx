import classes from './Door.module.scss';
import { Route, Routes } from 'react-router-dom';
import DoorOptions from './DoorOptions/DoorOptions';

const Door = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <Routes>
                    <Route path='/' element={<DoorOptions />} />
                </Routes>
            </div>
        </section>
    );
};

export default Door;