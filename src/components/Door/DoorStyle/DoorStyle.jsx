import Selector from "../../Selector/Selector";
import { getDoorsStyle } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";

const DoorStyle = () => {

    const { opening } = useParams();
    const [styles, setStyles] = useState([]);

    useEffect(() => {
        getDoorsStyle(opening).then(data => {
            setStyles(data);
        });
    }, [opening]);

    return (
        <>
            <Selector title={'Cantidad de hojas'} description={'Seleccione la cantidad de hojas requerida en su apertura.'}>
                <ul className='optionButtonflex'>
                    {styles.map(product => (
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