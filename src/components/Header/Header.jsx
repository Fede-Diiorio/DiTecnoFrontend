import classes from './Header.module.scss';
import { FaBars } from "react-icons/fa6";

const Header = () => {
    return (
        <header className={classes.background}>
            <div className={classes.container}>
                <h1 className={classes.headerTitle}>Imagen de DiTecno</h1>
                <FaBars className={classes.headerIcon} />
            </div>

        </header>
    )
}

export default Header;