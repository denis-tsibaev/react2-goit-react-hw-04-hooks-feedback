import PropTypes from 'prop-types';
import style from './FeedbackButton.module.css';

const FeedbackButton = ({ options, onIncreaseFeedback }) => (
    <ul className={style.buttonList}>
        {options.map(option => (
            <li key={option.toString()}>
                <button
                    className={style[option]}
                    name={option}
                    type="button"
                    onClick={onIncreaseFeedback}
                >
                    {option}
                </button>
            </li>
        ))}
    </ul>
);

FeedbackButton.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onIncreaseFeedback: PropTypes.func.isRequired,
};

export default FeedbackButton;
