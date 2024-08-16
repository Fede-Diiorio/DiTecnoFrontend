import Selector from "../../Selector/Selector";
import { getDoorsType } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";

const DoorType = () => {

    const { opening } = useParams();
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getDoorsType(opening).then(data => {
            setTypes(data);
        });
    }, []);

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

export default DoorType;