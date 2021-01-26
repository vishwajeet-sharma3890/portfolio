import {styled} from "../../../globalStyles";

export const ButtonWrapper = styled.button`
  ${props => `
    background: ${props.theme.button.background};
    height: ${props.theme.button.height};
    padding: ${props.theme.button.padding};
    box-shadow: ${props.theme.button.shadow};
    font-family: ${props.theme.typography.baseFontFamily};
    color: ${props.theme.button.color};
    font-size: ${props.theme.button.fontSize};
    font-weight: ${props.theme.button.fontWeight};
    text-transform: uppercase;
    border: none;
    cursor: pointer;
  `}
`