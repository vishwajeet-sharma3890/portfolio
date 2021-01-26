import * as React from "react"
import * as S from "./styles"
import {ButtonProps} from "./types";

export const Button: React.FC<ButtonProps> = ({onClick, children}) => {
  return (
    <S.ButtonWrapper onClick={onClick}>
      {children}
    </S.ButtonWrapper>
  )
}