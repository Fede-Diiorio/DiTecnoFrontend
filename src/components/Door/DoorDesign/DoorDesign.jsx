import Selector from "../../Selector/Selector";
import { getDoorsDesigns } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";

const DoorDesign = () => {
    const { opening, type, color } = useParams();
    const [design, setDesign] = useState([]);

    useEffect(() => {
        getDoorsDesigns(opening, type, color).then(data => {
            setDesign(data);
        });
    }, []);

    return (
        <>
            <Selector title={'Diseño de puerta'} description={'Seleccione un diseño de puerta que sea de su gusto.'} returnUrl={`/puerta/${opening}/${type}`}>
                <ul className='optionButtonflex'>
                    {design.map(product => (
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