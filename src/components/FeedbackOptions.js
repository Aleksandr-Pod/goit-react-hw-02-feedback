export default function FeedbackOptions({options, onLeaveFeedback}) {
    return (
    <>
        {options.map((opt, idx) => (
          <button type="button" key={idx} name={opt.toLowerCase()} onClick={onLeaveFeedback}>{opt}</button>
        ))}
    </>
    )
}