import Selector from "../../Selector/Selector";
import { getDoorsType } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from './DoorType.module.scss'

const DoorType = () => {
    const { opening, style } = useParams();
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getDoorsType(opening, style).then(data => {
            setTypes(data);
        });
    }, []);

    return (
        <>
            <Selector title={'Estilo de la puerta'} description={'Seleccione una de las variantes disponibles que sea de su agrado.'}>
                <ul className={classes.ul}>
                    {types.map(product => (
                        <li key={product.id}>
                            <Link to={product.slug} className={classes.link}>
                                <img className="doorDesign" src={product.image} alt={product.name} />
                                <p className={classes.paragraph}><strong>Descripción: </strong>{product.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </Selector>
        </>
    );
};

export default DoorType;