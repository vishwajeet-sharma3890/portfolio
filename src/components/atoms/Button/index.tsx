import * as React from "react"
import * as S from "./styles"
import {ButtonProps} from "./types";

export const Button: React.FC<ButtonProps> = ({buttonStyle = "default", onClick, children}) => {
  return (
    <S.ButtonWrapper onClick={onClick} buttonStyle={buttonStyle}>
      {children}
    </S.ButtonWrapper>
  )
}