import Selector from "../../Selector/Selector";
import { getDoorsDesigns } from "../../../utils/getDoors";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import classes from './DoorDesign.module.scss';

const DoorDesign = () => {
    const { opening, style, type } = useParams();
    const [designs, setDesigns] = useState([]);

    useEffect(() => {
        getDoorsDesigns(opening, style, type).then(data => {
            setDesigns(data);
        });
    }, [opening, style, type]);

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