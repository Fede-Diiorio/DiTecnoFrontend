import classes from './WindowForm.module.scss';
import image from '../../assets/home.jpg';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { getColors } from '../../utils/getColors';

const WindowForm = () => {

    const [colors, setColors] = useState([]);

    useEffect(() => {
        getColors().then(data => {
            setColors(data);
        });
    }, []);

    return (
        <section className='container'>
            <div className={classes.form}>
                <div className={classes.formContainer}>

                    <img src={image} alt="Test" className={classes.image} />

                    <div className={classes.fields}>

                        <div className={classes.field}>
                            <label>L: </label>
                            <input type="number" min={20} required={true} name='width' />
                        </div>

                        <div className={classes.field}>
                            <label>A: </label>
                            <input type="number" min={20} required={true} name='height' />
                        </div>

                        <div className={classes.field}>
                            <label>A1: </label>
                            <input type="number" min={20} required={true} name='height1' />
                        </div>

                        <div className={classes.field}>
                            <label>A2: </label>
                            <input type="number" min={20} required={true} name='height2' />
                        </div>

                        <div className={classes.field}>
                            <label>Cantidad: </label>
                            <input type="number" min={1} required={true} name='height2' />
                        </div>

                    </div>
                </div>

                {/* Lista de colores como checkboxes */}
                <ul className={classes.colors}>
                    {
                        colors.map(color => (
                            <li key={color.id}>
                                <input
                                    type="checkbox"
                                    id={`color-${color.slug}`}
                                    name="color"
                                    value={color.slug}
                                    className={classes.hiddenCheckbox}
                                />
                                <label htmlFor={`color-${color.slug}`} className={classes.colorLabel}>
                                    <p>{color.name}</p>
                                    <img className={`doorColor ${classes.colorImage}`} src={color.image} alt={`Imagen del color ${color.slug}`} />
                                </label>
                            </li>
                        ))
                    }
                </ul>

                <Button>Cargar producto</Button>
            </div>
        </section>
    );
};

export default WindowForm;
