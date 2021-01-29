import { styled } from '../../../globalStyles';


export const TextAreaWrapper = styled.div<{ isActive: boolean, error?: boolean }>`
  ${props => `
  
    background-image: ${props.error ? props.theme.textarea.errorBackground : props.isActive ? props.theme.textarea.hoverBackground : props.theme.textarea.background};
    width: ${props.theme.input.width};
    padding: 2px;
    margin: auto;
    
    :hover {
      background-image: ${props.error ? props.theme.textarea.errorHoverBackground : props.theme.textarea.hoverBackground};
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
`;