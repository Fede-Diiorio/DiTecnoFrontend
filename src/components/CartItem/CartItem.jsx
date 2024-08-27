import classes from './CartItem.module.scss';
import { useCart } from '../../context/CartContext';
import { useLocalStorage } from '../../context/LocalStorageContext';
import { FaTrashCan } from 'react-icons/fa6';
import { getWindowSpecification } from '../../utils/getWindows';
import { useEffect, useState } from 'react';

const CartItem = ({ product, type, quantity, id, style, colors, design, opening }) => {

    const { removeItem } = useCart();
    const { removeProductFromLocalStorage } = useLocalStorage();

    const [typeSpecification, setTypeSpecification] = useState();

    useEffect(() => {
        getWindowSpecification(opening, style, type).then(data => {
            setTypeSpecification(data);
        });
    }, [opening, style, type]);

    const deleteItem = () => {
        removeProductFromLocalStorage(id);
        removeItem(id);
    }

    if (product === 'puerta') {
        return (
            <div className={classes.container}>
                <h5>{product}</h5>
                <div className={classes.paragraphs}>
                    <p className={classes.paragraph}><strong>Sentido de apertura: </strong>{opening}</p>
                    <p className={classes.paragraph}><strong>Descripción: </strong>{type}</p>
                    <p className={classes.paragraph}><strong>Diseño: </strong>{design}</p>
                    <p className={classes.paragraph}><strong>Color: </strong>{colors}</p>
                    <p className={classes.paragraph}><strong>Cantidad: </strong>{quantity}</p>
                </div>
                <button onClick={deleteItem}><FaTrashCan className={classes.icon} /></button>
            </div>
        );
    };

    if (product === 'ventana') {
        if (!typeSpecification) {
            return <p>Cargando especificaciones...</p>;
        }

        return (
            <div className={classes.container}>
                <h5>{product}</h5>
                <div className={classes.paragraphs}>
                    <p className={classes.paragraph}><strong>Sentido de apertura: </strong>{opening}</p>
                    <p className={classes.paragraph}><strong>Estilo de apertura: </strong>{style}</p>
                    <p className={classes.paragraph}><strong>Descripción: </strong>{typeSpecification.name}</p>
                    <p className={classes.paragraph}><strong>Color: </strong>{colors}</p>
                    <p className={classes.paragraph}><strong>Cantidad: </strong>{quantity}</p>
                </div>
                <button onClick={deleteItem}><FaTrashCan className={classes.icon} /></button>
            </div>
        );
    };
};

export default CartItem;