import Selector from "../../Selector/Selector";
import { getDoorColors } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";

const DoorColor = () => {
    const { opening, type } = useParams();
    const [colors, setColors] = useState([]);

    useEffect(() => {
        getDoorColors(opening, type).then(data => {
            setColors(data);
        });
    }, []);

    return (
        <>
            <Selector title={'Color para su puerta'} description={'Seleccione el color que mejor se adapte a sus necesidades.'} returnUrl={`/puerta/${opening}`}>
                <ul className='optionButtonflex'>
                    {colors.map(product => (
                        <li key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <Button to={product.slug}>{product.name}</Button>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default DoorColor;