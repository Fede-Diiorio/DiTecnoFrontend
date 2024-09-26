import Selector from "../../Selector/Selector";
import { getWindowsTypes } from "../../../utils/getWindows";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from './WindowType.module.scss';

const WindowType = () => {
    const { opening, style } = useParams();
    const [colors, setColors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        getWindowsTypes(opening, style)
            .then(data => { setColors(data); })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <Selector title={'Cargando...'}></Selector>
        );
    };

    return (
        <>
            <Selector title={'Tipo de abertura'} description={'Seleccione la configuración de abertura que sea de su preferencia.'}>
                <ul className={classes.ul}>
                    {colors.map(product => (
                        <li key={product.id}>
                            <Link to={product.slug} className={classes.link}>
                                <img src={product.image} alt={`Imagen de ventana con ${product.name}`} />
                                <p className={classes.paragraph}><strong>Descripción: </strong>{product.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default WindowType;