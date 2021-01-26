import {styled} from "../../../globalStyles";

export const SectionWrapper = styled.h3`
  ${props => `
    color: ${props.theme.button.color};
    font-size: ${props.theme.button.fontSize};
    font-weight: ${props.theme.button.fontWeight};
  `}
`