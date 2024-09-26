import classes from './ColorSelector.module.scss';

const ColorSelector = ({ colors, formData, handleInputChange }) => {
    return (
        <ul className={classes.colors}>
            {colors.map(color => (
                <li key={color.id}>
                    <input
                        type="checkbox"
                        id={`color-${color.slug}`}
                        name="color"
                        value={color.slug}
                        className={classes.hiddenCheckbox}
                        onChange={(e) => handleInputChange(e, formData)}
                    />
                    <label htmlFor={`color-${color.slug}`} className={classes.colorLabel}>
                        <p className={classes.paragraph}>{color.name}</p>
                        <img className={`doorColor ${classes.colorImage}`} src={color.image} alt={`Imagen del color ${color.slug}`} />
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default ColorSelector;
