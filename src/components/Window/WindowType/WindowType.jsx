import Selector from "../../Selector/Selector";
import { getWindowsTypes } from "../../../utils/getWindows";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";

const WindowType = () => {
    const { opening, style } = useParams();
    const [colors, setColors] = useState([]);

    useEffect(() => {
        getWindowsTypes(opening, style).then(data => {
            setColors(data);
        });
    }, []);

    return (
        <>
            <Selector title={'Tipo de abertuna'} description={'Seleccione el tipo de abertura que sea de su preferencia.'}>
                <ul className='optionButtonflex'>
                    {colors.map(product => (
                        <li key={product.id}>
                            <Button to={product.slug}>{product.name}</Button>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default WindowType;