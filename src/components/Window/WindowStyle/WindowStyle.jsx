import Selector from "../../Selector/Selector";
import { getWindowsStyle } from "../../../utils/getWindows";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";
import classes from './WindowStyle.module.scss';

const WindowStyle = () => {

    const { opening } = useParams();
    const [styles, setStyles] = useState([]);
    const [loading, setLoading] = useState(true);

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
            <Selector title={'Estilo de apertura'} description={'Seleccione el estilo que desea para su apertura.'}>
                <ul className='optionButtonflex'>
                    {styles.map(product => (
                        <li key={product.id}>
                            <img src={product.image} alt={product.name} className={classes.image} />
                            <Button to={product.slug}>{product.name}</Button>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default WindowStyle;