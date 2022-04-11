import { Options } from "./Feedback.styled";
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
    <>
      {options.map((opt, idx) => (
        <Options type="button" key={idx} name={opt} onClick={onLeaveFeedback}>{opt}</Options>
      ))}
    </>
    )
}
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func
}