import classes from './Step.module.scss';

const Step = ({ number, paragraph }) => {
    return (
        <div className={classes.card}>
            <div className={classes.cardNumber}>
                <h4>{number}</h4>
            </div>
            <div className={classes.cardParagraph}>
                <p>{paragraph}</p>
            </div>
        </div>
    );
};

export default Step;