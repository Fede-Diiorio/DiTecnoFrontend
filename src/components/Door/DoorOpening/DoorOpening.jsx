import Selector from "../../Selector/Selector";
import { getDoors } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";

const DoorOpening = () => {

    const [openings, setOpenings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getDoors()
            .then(data => { setOpenings(data); })
            .finally(() => { setLoading(false) });
    }, []);

    if (loading) {
        return (
            <Selector title={'Cargando...'}></Selector>
        );
    };

    return (
        <>
            <Selector title={'Tipo de apertura'} description={'Seleccione la dirección de apertura para su puerta.'}>
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