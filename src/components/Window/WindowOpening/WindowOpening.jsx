import Selector from "../../Selector/Selector";
import { getWindows } from "../../../utils/getWindows";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";

const WindowOpening = () => {

    const [openings, setOpenings] = useState([]);

    useEffect(() => {
        getWindows().then(data => {
            setOpenings(data);
        });
    }, []);

    return (
        <>
            <Selector title={'Dirección de apertura'} description={'Seleccione la dirección de apertura para su ventana.'}>
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

export default WindowOpening;