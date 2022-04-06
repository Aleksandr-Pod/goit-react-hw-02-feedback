import { Options } from "./Feedback.styled"

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
    <>
      {options.map((opt, idx) => (
        <Options type="button" key={idx} name={opt} onClick={onLeaveFeedback}>{opt}</Options>
      ))}
    </>
    )
}