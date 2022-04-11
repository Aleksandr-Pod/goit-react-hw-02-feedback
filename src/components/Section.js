import { SectionBox } from './Section.styled';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
    return (
    <SectionBox>
        { title && <h2>{title}</h2> }
        {children} 
    </SectionBox>
    )
}
Section.propType = {
  title: PropTypes.string,
  children: PropTypes.node
}