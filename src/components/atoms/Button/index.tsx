import * as React from "react"
import * as S from "./styles"
import { ButtonProps, ButtonRipplePosition } from './types';
import { useState } from 'react';

export const Button: React.FC<ButtonProps> = ({buttonStyle = "default", onClick, children}) => {

  // States
  const [ripplePosition, setRipplePosition] = useState<ButtonRipplePosition | null>(null)

  const handleClick = (e) => {
    const button = e.currentTarget;
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const left = `${e.clientX - (button.offsetLeft + radius)}px`
    const top = `${button.clientHeight/2}px`
    setRipplePosition({ top, left })
    setTimeout(() => {
      setRipplePosition(null)
    }, 1000)
    onClick()
  }

  return (
    <S.ButtonWrapper disabled={Boolean(ripplePosition)} onClick={handleClick} buttonStyle={buttonStyle}>
      {children}
      {ripplePosition && <S.RippleSpan position={ripplePosition}/>}
    </S.ButtonWrapper>
  )
}