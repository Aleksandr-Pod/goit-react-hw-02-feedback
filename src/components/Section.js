import { SectionBox } from './Section.styled';

export default function Section({ title, children }) {
    return (
    <SectionBox>
        { title && <h2>{title}</h2> }
        {children} 
    </SectionBox>
    )
}