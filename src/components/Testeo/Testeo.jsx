const Testeo = () => {

    const email = 'test@test.com';
    const phone = 1233456;
    const name = 'El Barto'

    const product = {
        product: 'Ventana',
        opening: 'interior',
        type: 'https://i.imgur.com/nIrHba5.jpeg',
        style: 'Oscilobatiente',
        colors: ['Roble', 'Nogal'],
        width: 1000,
        height: 1200,
        fixedWidth: 500,
        quantity: 2
    }

    const colors = product.colors.map(color => {
        return color;
    }).join(' - ')

    return (
        <div>
            <h2>Solicitud de presupuesto por {name}</h2>
            <h3>Datos del cliente:</h3>
            <p><strong>Email: </strong>{email}</p>
            <p><strong>Teléfono: </strong>{phone}</p>

            <h3>Solicitud de presupuesto por:</h3>

            <h4>{product.product} {product.style}</h4>
            <img src={product.type} alt={`Imagen de ${product.product} ${product.style} (${product.type})`} />
            <p><strong>Ancho: </strong>{product.width}</p>
            <p><strong>Alto: </strong>{product.height}</p>
            <p><strong>Medida de hoja: </strong>{product.fixedWidth}</p>
            <p><strong>Cantidad: </strong>{product.quantity}</p>
            <p><strong>Colores requeridos: </strong>{colors}</p>
        </div>
    );
};

export default Testeo