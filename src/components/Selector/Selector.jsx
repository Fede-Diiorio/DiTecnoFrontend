import classes from './Selector.module.scss';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { TiArrowBack } from "react-icons/ti";
import { Link } from 'react-router-dom';


const Selector = ({ title, description, returnUrl, data }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (data) {
            setProducts(data);
        };
    }, [data]);

    return (
        <section className={classes.heroImage}>
            <div className={classes.shadow}>
                <div className={classes.container}>
                    <div className={classes.paramsOptions}>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <ul className={classes.options}>
                            {products.map(product => (
                                <li key={product.id}>
                                    <Button to={product.slug}>{product.name}</Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to={returnUrl}><TiArrowBack className={classes.backArrow} /></Link>
                </div>
            </div>
        </section>
    );
};

export default Selector;