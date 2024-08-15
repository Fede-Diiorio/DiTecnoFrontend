import classes from './Door.module.scss';
import { Route, Routes } from 'react-router-dom';
import Selector from '../Selector/Selector';

const Door = () => {
    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <Routes>
                    <Route path='/' element={<Selector title={'Dirección de apertura'} description={'Seleccione la dirección de apertura que desea para su puerta.'} returnUrl={'/producto'} />} />
                </Routes>
            </div>
        </section>
    );
};

export default Door;