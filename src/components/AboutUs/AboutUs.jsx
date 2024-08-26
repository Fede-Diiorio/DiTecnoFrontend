import Selector from "../Selector/Selector";
import image from '../../assets/home.webp';
import classes from './AboutUs.module.scss';

const AboutUs = () => {
    return (
        <Selector title={'Sobre nosotros'}>
            <div className={classes.container}>

                <div className={classes.paragraph}>
                    <p>En Ditecno ofrecemos aberturas de PVC de calidad Alemana para su hogar o empresa, nuestros productos le ofrecen excelente aislación térmica y acústica.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis aperiam obcaecati dolores excepturi atque architecto facere dolore aliquid? Corrupti eos magnam quis excepturi velit ipsam officiis possimus expedita quibusdam explicabo!</p>
                </div>

                <img src={image} alt="Foto Genérica" />

            </div>
        </Selector>
    );
};

export default AboutUs;