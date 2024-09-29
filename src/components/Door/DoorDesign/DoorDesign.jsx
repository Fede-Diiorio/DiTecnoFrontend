import Selector from "../../Selector/Selector";
import { getDoorsDesigns } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from './DoorDesign.module.scss';
import { useTitle } from "../../../utils/useTitle";

const DoorDesign = () => {
    const { opening, style, type } = useParams();
    const [designs, setDesigns] = useState([]);
    const [loading, setLoading] = useState(true);

    useTitle(designs, `DiTecno | Diseños de puerta ${style}`)

    useEffect(() => {
        setLoading(true);

        getDoorsDesigns(opening, style, type)
            .then(data => { setDesigns(data); })
            .finally(() => setLoading(false));
    }, [opening, style, type]);

    if (loading) {
        return (
            <Selector title={'Cargando...'}></Selector>
        );
    };

    return (
        <>
            <Selector title={'Diseño para su puerta'} description={'Seleccione el diseño que desea aplicar a su puerta.'}>
                <ul className={classes.ul}>
                    {designs.map(product => (
                        <li key={product.id}>
                            <Link className={classes.link} to={product.slug}>
                                <img src={product.image} alt={product.name} />
                                <p className={classes.paragraph}><strong>Descripción: </strong>{product.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default DoorDesign;