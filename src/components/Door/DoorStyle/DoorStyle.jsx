import Selector from "../../Selector/Selector";
import { getDoorsStyle } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";

const DoorStyle = () => {

    const { opening } = useParams();
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getDoorsStyle(opening).then(data => {
            setTypes(data);
        });
    }, [opening]);

    return (
        <>
            <Selector title={'Dirección de apertura'} description={'Seleccione la dirección de apertura para su puerta.'}>
                <ul className='optionButtonflex'>
                    {types.map(product => (
                        <li key={product.id}>
                            <Button to={product.slug}>{product.name}</Button>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default DoorStyle;