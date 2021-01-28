import {styled} from "../../../globalStyles";
import { InputType } from './types';

export const InputWrapper = styled.div<{ inputType: InputType }>`
  ${props => `
  
    background: ${props.theme.input.background};
    width: ${props.theme.input.width};
    padding: 2px;
    margin: auto;
  
    input {
      font-family: ${props.theme.typography.baseFontFamily};
      height: ${props.theme.input.height};
      width: ${props.theme.input.innerWidth};
      color: ${props.theme.input.color};
      font-size: ${props.theme.input.fontSize};
      font-weight: ${props.theme.input.fontWeight};
      padding: 0 16px;
      outline: none;
      border: none;
      
      ::placeholder {
        font-family: Montserrat;
        color: ${props.theme.input.placeholder.color};
        font-size: ${props.theme.input.placeholder.fontSize};
        font-weight: ${props.theme.input.placeholder.fontWeight};
      }
    }
    
    textarea {
      font-family: ${props.theme.typography.baseFontFamily};
      height: ${props.theme.textarea.height};
      width: ${props.theme.textarea.innerWidth};
      color: ${props.theme.textarea.color};
      font-size: ${props.theme.textarea.fontSize};
      font-weight: ${props.theme.textarea.fontWeight};
      padding: 8px 16px;
      outline: none;
      border: none;
      
      ::placeholder {
        font-family: Montserrat;
        color: ${props.theme.textarea.placeholder.color};
        font-size: ${props.theme.textarea.placeholder.fontSize};
        font-weight: ${props.theme.textarea.placeholder.fontWeight};
      }
    }
    
  `}
`