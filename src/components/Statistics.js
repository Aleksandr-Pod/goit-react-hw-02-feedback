import PropTypes from 'prop-types';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) { 
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total()}</p>
            <p>Positive feedbacks: {positivePercentage()}%</p>
        </>
    )
}

Statistics.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.func,
  positivePercentage: PropTypes.func
}