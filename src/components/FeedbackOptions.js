export default function FeedbackOptions({options, onLeaveFeedback}) {
    return (
    <>
        {options.map((opt, idx) => (
          <button type="button" key={idx} name={opt} onClick={onLeaveFeedback}>{opt}</button>
        ))}
    </>
    )
}