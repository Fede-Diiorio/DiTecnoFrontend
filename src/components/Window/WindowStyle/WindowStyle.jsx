import Selector from "../../Selector/Selector";
import { getWindowsStyle } from "../../../utils/getWindows";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import classes from './WindowStyle.module.scss';
import { useTitle } from "../../../utils/useTitle";

const WindowStyle = () => {

    const { opening } = useParams();
    const [styles, setStyles] = useState([]);
    const [loading, setLoading] = useState(true);

    useTitle(opening, `DiTecno | Ventana apertura ${opening}`);

    useEffect(() => {
        setLoading(true);

        getWindowsStyle(opening)
            .then(data => { setStyles(data); })
            .finally(() => setLoading(false));
    }, [opening]);

    if (loading) {
        return (
            <Selector title={'Cargando...'}></Selector>
        );
    };

    return (
        <>
            <Selector title={'Tipo de ventana'} description={'Seleccioná el tipo de ventana que más te guste.'}>
                <ul className='optionButtonflex'>
                    {styles.map(product => (
                        <Link key={product.id} to={product.slug} className={classes.link}>
                            <h4 className={classes.title}>{product.name}</h4>
                            <img src={product.image} alt={product.name} className={classes.image} />
                        </Link>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default WindowStyle;