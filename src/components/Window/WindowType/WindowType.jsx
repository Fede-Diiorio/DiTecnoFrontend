import Selector from "../../Selector/Selector";
import { getWindowsTypes } from "../../../utils/getWindows";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from './WindowType.module.scss';
import { useTitle } from "../../../utils/useTitle";

const WindowType = () => {
    const { opening, style } = useParams();
    const [colors, setColors] = useState([]);
    const [loading, setLoading] = useState(true);

    useTitle(opening, `DiTecno | Ventana ${style}`)

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
            <Selector title={'Estilo de ventana'} description={'Seleccioná una de las posibles variantes disponibles en nuestro catálogo.'}>
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