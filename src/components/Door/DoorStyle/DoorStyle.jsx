import Selector from "../../Selector/Selector";
import { getDoorsStyle } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useParams } from "react-router-dom";
import { useTitle } from "../../../utils/useTitle";

const DoorStyle = () => {

    const { opening } = useParams();
    const [styles, setStyles] = useState([]);
    const [loading, setLoading] = useState(true);

    useTitle(opening, `DiTecno | Puertas apertura ${opening}`)

    useEffect(() => {
        setLoading(true);

        getDoorsStyle(opening)
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
            <Selector title={'Cantidad de hojas'} description={'Seleccioná la cantidad de hojas requerida en su apertura. Tené en cuenta que el ancho máximo de cada puerta es de 1.5 metros.'}>
                <ul className='optionButtonflex'>
                    {styles.map(product => (
                        <li key={product.id}>
                            <Button to={product.slug}>{product.name}</Button>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default DoorStyle;