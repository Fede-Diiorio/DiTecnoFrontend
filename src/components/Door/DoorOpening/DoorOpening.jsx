import Selector from "../../Selector/Selector";
import { getDoors } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";

const DoorOpening = () => {

    const [openings, setOpenings] = useState([]);

    useEffect(() => {
        getDoors().then(data => {
            setOpenings(data);
        });
    }, []);

    return (
        <>
            <Selector title={'Dirección de apertura'} description={'Seleccione la dirección de apertura para su puerta.'} returnUrl={'/producto'}>
                <ul className='optionButtonflex'>
                    {openings.map(product => (
                        <li key={product.id}>
                            <Button to={product.slug}>{product.name}</Button>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default DoorOpening;