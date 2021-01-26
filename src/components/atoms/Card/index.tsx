import * as React from "react"
import * as S from "./styles"

export const Card: React.FC = ({children}) => {
  return (
    <S.CardWrapper>
      {children}
    </S.CardWrapper>
  )
}