import { styled } from '../../../globalStyles';

export const InputWrapper = styled.div<{ isActive?: boolean }>`
  ${props => `
  
    background-image: ${props.isActive ? props.theme.input.hoverBackground : props.theme.input.background};
    width: ${props.theme.input.width};
    padding: 2px;
    margin: auto;
    -webkit-transition: background-image 0.2s ease-in-out;
    transition: background-image 0.2s ease-in-out;
    
    :hover {
      background-image: ${props.theme.input.hoverBackground};
    }
  
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
    
  `}
`;