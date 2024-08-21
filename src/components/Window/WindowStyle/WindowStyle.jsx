import Selector from "../../Selector/Selector";
import { getWindowsStyle } from "../../../utils/getWindows";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";
import classes from './WindowStyle.module.scss';

const WindowStyle = () => {

    const { opening } = useParams();
    const [styles, setStyles] = useState([]);

    useEffect(() => {
        getWindowsStyle(opening).then(data => {
            setStyles(data);
        });
    }, []);

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