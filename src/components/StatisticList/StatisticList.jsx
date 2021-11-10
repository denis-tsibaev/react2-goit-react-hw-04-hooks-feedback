import PropTypes from 'prop-types';
import StatisticItem from '../StatisticItem';
import style from './StatisticList.module.css';

const StatisticList = ({ state, total, positive }) => {
    const namesKeys = Object.keys(state);
    return (
        <ul className={style.statisticList}>
            {namesKeys.map(name => (
                <li key={name.toString()}>
                    <StatisticItem name={name} value={state[name]} />
                </li>
            ))}
            <li>
                <span>Total: {total}</span>
            </li>
            <li>
                <span>Positive feedbacks: {positive}%</span>
            </li>
        </ul>
    );
};

StatisticList.propTypes = {
    state: PropTypes.objectOf(PropTypes.number.isRequired),
    total: PropTypes.number.isRequired,
    positive: PropTypes.string.isRequired,
};

export default StatisticList;
