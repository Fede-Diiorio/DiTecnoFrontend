import Selector from "../Selector/Selector";
import image from '../../assets/home.webp';
import classes from './AboutUs.module.scss';

const AboutUs = () => {
    return (
        <Selector title={'Sobre nosotros'}>
            <div className={classes.container}>

                <div className={classes.paragraph}>
                    <p>
                        En Ditecno ofrecemos aberturas de PVC de calidad alemana para su hogar o empresa. Nuestros productos le brindan una excelente aislación térmica y acústica.
                    </p>

                    <p>
                        Trabajamos con perfilería de alta calidad, suministrada por VEKA, una empresa reconocida en más de 80 países por su compromiso con el medio ambiente y la calidad excepcional de sus sistemas de perfiles de PVC para puertas, ventanas y persianas. VEKA concilia tradición y modernidad en investigación y desarrollo, creando líneas de productos diferenciados por su diseño contemporáneo, eficiencia y sostenibilidad.
                    </p>

                    <p>
                        Además de la excelente calidad de los perfiles, contamos con varias opciones de personalización en cuanto a colores y acabados, para que puedas encontrar la opción más apropiada para tus necesidades.
                    </p>
                </div>

                <img src={image} alt="Foto de cocina con nuestra perfilería" />

            </div>
        </Selector>
    );
};

export default AboutUs;