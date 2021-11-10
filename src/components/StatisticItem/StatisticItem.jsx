import PropTypes from 'prop-types';

const StatisticItem = ({ name, value }) => {
    return (
        <span>
            {name}: {value}
        </span>
    );
};

StatisticItem.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
};

export default StatisticItem;
