import {styled} from "../../../globalStyles";
import { ButtonRipplePosition, ButtonStyle } from './types';

export const ButtonWrapper = styled.button<{ buttonStyle: ButtonStyle }>`
  ${props => `
    background: ${props.theme.button[props.buttonStyle].background};
    position: relative;
    height: ${props.theme.button[props.buttonStyle].height};
    padding: ${props.theme.button[props.buttonStyle].padding};
    box-shadow: ${props.theme.button[props.buttonStyle].shadow};
    font-family: ${props.theme.typography.baseFontFamily};
    color: ${props.theme.button[props.buttonStyle].color};
    font-size: ${props.theme.button[props.buttonStyle].fontSize};
    font-weight: ${props.theme.button[props.buttonStyle].fontWeight};
    text-transform: uppercase;
    transition: background 400ms;
    border: none;
    cursor: pointer;
    outline: none;
    overflow: hidden;
    
    :disabled,button[disabled]{
      background: ${props.theme.button[props.buttonStyle].disabledBackground};
    }
}
    
    `
  }
`
  
export const RippleSpan = styled.span<{ position: ButtonRipplePosition }>`
  position: absolute;
  ${props => `
    top: ${props.position.top};
    left: ${props.position.left};
  `} 
  height: 310px;
  width: 310px;
  border-radius: 50%;
  transform: scale(0);
  animation: ${props => props.theme.animation.buttonRipple} 600ms linear;
  background-color: rgba(255, 255, 255, 0.7);
`
