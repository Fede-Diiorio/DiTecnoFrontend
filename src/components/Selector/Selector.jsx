import classes from './Selector.module.scss';
import { useEffect, useState } from 'react';


const Hero = ({ title, description }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error en el fetch: ', error));
    }, []);

    console.log(products);

    return (
        <section className={classes.heroImage}>
            <div className={classes.container}>
                <div className={classes.hero}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <ul>
                        {products.map(product => (
                            <li key={product.id}>
                                {product.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Hero;