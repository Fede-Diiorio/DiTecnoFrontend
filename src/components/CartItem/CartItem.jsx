import { getWindowSpecification } from '../../utils/getWindows';
import { getDoorModel } from '../../utils/getDoors';
import { useEffect, useState } from 'react';
import WindowItem from './WindowItem';
import DoorItem from './DoorItem';

const CartItem = ({ product, type, quantity, id, style, colors, design, opening, casement, casement2, casement3, glassType, height, width }) => {
    const [typeSpecification, setTypeSpecification] = useState(null);

    useEffect(() => {
        if (product === 'ventana') {
            getWindowSpecification(opening, style, type).then(data => {
                setTypeSpecification(data);
            });
        } else if (product === 'puerta') {
            getDoorModel(opening, style, type, design).then(data => {
                setTypeSpecification(data);
            });
        }
    }, [product, opening, style, type, design]);

    const colorsPayload = colors.join(' - ');
    const casementPayload = casement || 'No requerido';
    const casement2Payload = casement2 || 'No requerido';
    const casement3Payload = casement3 || 'No requerido';

    // Renderiza DoorItem si el producto es "puerta"
    if (product === 'puerta') {
        return (
            <DoorItem
                product={typeSpecification?.name}
                opening={opening}
                image={typeSpecification?.image}
                height={height}
                width={width}
                casementPayload={casementPayload}
                casement2Payload={casement2Payload}
                casement3Payload={casement3Payload}
                colorsPayload={colorsPayload}
                quantity={quantity}
            />
        );
    }

    // Renderiza WindowItem si el producto es "ventana"
    if (product === 'ventana') {
        return (
            <WindowItem
                product={product}
                opening={opening}
                style={style}
                image={typeSpecification?.image}
                height={height}
                width={width}
                casementPayload={casementPayload}
                casement2Payload={casement2Payload}
                colorsPayload={colorsPayload}
                quantity={quantity}
                glassType={glassType}
            />
        );
    }

    return null; // Si no es ni "puerta" ni "ventana", no renderiza nada
};

export default CartItem;
