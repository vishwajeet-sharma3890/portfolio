import * as React from "react"
import * as S from "./styles"
import { CardProps } from './types';

export const Card: React.FC<CardProps> = ({cardStyle, children}) => {
  return (
    <S.CardWrapper cardStyle={cardStyle}>
      {children}
    </S.CardWrapper>
  )
}