export default function Section({ title, children }) {
    return (
    <>
        { title && <h2>{title}</h2> }
        {children} 
    </>
    )
}