import {styled} from "../../../globalStyles";
import { ButtonStyle } from './types';

export const ButtonWrapper = styled.button<{ buttonStyle: ButtonStyle }>`
  ${props => `
    background: ${props.theme.button[props.buttonStyle].background};
    height: ${props.theme.button[props.buttonStyle].height};
    padding: ${props.theme.button[props.buttonStyle].padding};
    box-shadow: ${props.theme.button[props.buttonStyle].shadow};
    font-family: ${props.theme.typography.baseFontFamily};
    color: ${props.theme.button[props.buttonStyle].color};
    font-size: ${props.theme.button[props.buttonStyle].fontSize};
    font-weight: ${props.theme.button[props.buttonStyle].fontWeight};
    text-transform: uppercase;
    border: none;
    cursor: pointer;
  `}
`