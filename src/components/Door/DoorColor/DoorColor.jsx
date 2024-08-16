import Selector from "../../Selector/Selector";
import { getDoorsColors } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";

const DoorColor = () => {
    const { opening, type } = useParams();
    const [colors, setColors] = useState([]);

    useEffect(() => {
        getDoorsColors(opening, type).then(data => {
            setColors(data);
        });
    }, []);

    return (
        <>
            <Selector title={'Color para su puerta'} description={'Seleccione el color que mejor se adapte a sus necesidades.'}>
                <ul className='optionButtonflex'>
                    {colors.map(product => (
                        <li key={product.id}>
                            <img className="doorColor" src={product.image} alt={product.name} />
                            <Button to={product.slug}>{product.name}</Button>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default DoorColor;