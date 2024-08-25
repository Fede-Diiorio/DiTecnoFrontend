import Selector from "../../Selector/Selector";
import { getWindowsTypes } from "../../../utils/getWindows";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";
import classes from './WindowType.module.scss';

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
            <Selector title={'Tipo de abertuna'} description={'Seleccione la configuración de abertura que sea de su preferencia.'}>
                <ul className={`optionButtonflex ${classes.ul}`}>
                    {colors.map(product => (
                        <li key={product.id} className={classes.li}>
                            <img src={product.image} alt={`Imagen de ventana con ${product.name}`} />
                            <Button to={product.slug}>{product.name}</Button>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default WindowType;