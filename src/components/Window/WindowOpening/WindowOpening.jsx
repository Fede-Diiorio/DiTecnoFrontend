import Selector from "../../Selector/Selector";
import { getWindows } from "../../../utils/getWindows";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useTitle } from '../../../utils/useTitle';

const WindowOpening = () => {

    const [openings, setOpenings] = useState([]);
    const [loading, setLoading] = useState(true);

    useTitle(openings, `DiTecno | Ventanas`, openings);

    useEffect(() => {
        setLoading(true);

        getWindows()
            .then(data => { setOpenings(data); })
            .finally(() => setLoading(false))
    }, []);

    if (loading) {
        return (
            <Selector title={'Cargando...'}></Selector>
        );
    };

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