import Selector from "../../Selector/Selector";
import { getDoorDesigns } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";

const DoorDesign = () => {
    const { opening, type, color } = useParams();
    const [colors, setColors] = useState([]);

    useEffect(() => {
        getDoorDesigns(opening, type, color).then(data => {
            setColors(data);
        });
    }, []);

    return (
        <>
            <Selector title={'Diseño de puerta'} description={'Seleccione un diseño de puerta que sea de su gusto.'} returnUrl={`/puerta/${opening}/${type}`}>
                <ul className='optionButtonflex'>
                    {colors.map(product => (
                        <li key={product.id}>
                            <img className="doorDesign" src={product.image} alt={product.name} />
                            <Button to={product.slug}>{product.name}</Button>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default DoorDesign;