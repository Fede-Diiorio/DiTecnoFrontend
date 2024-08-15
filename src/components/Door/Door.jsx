import classes from './Door.module.scss';
import { Route, Routes, useParams } from 'react-router-dom';
import Selector from '../Selector/Selector';
import { getDoors } from '../../utils/getDoors';
import { useEffect, useState, } from 'react';

const Door = () => {

    const [opening, setOpening] = useState();
    const [type, setType] = useState();

    useEffect(() => {
        getDoors().then(data => {
            setOpening(data);
        });
    }, []);



    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <Routes>
                    <Route path='/' element={<Selector title={'Dirección de apertura'} description={'Seleccione la dirección de apertura que desea para su puerta.'} returnUrl={'/producto'} data={opening} />} />
                    <Route path='/:type' element={<Selector title={'Tipo de apertura'} description={'Seleccione la opción más adecuada a su necesidad.'} returnUrl={'/puerta'} />} />
                </Routes>
            </div>
        </section>
    );
};

export default Door;