import {styled} from "../../../globalStyles";

export const SectionWrapper = styled.h3`
  ${props => `
    color: ${props.theme.body.sections.heading.color};
    font-size: ${props.theme.body.sections.heading.fontSize};
    font-weight: ${props.theme.body.sections.heading.fontWeight};
    text-align: center;
    text-shadow: ${props.theme.body.sections.heading.textShadow};
    line-height: 1.75;
    span {
      color: ${props.theme.body.sections.heading.accentColor};
    }
    padding: 0 24px;
  `}
`