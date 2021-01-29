import * as React from "react"
import * as S from "./styles"
import { CardProps } from './types';
import { getScreenSize, ScreenSize } from '../../../globalStyles/media';

export const Card: React.FC<CardProps> = ({cardStyle, children}) => {

  // Media query
  const screenSize: ScreenSize = getScreenSize()

  return (
    <S.CardWrapper cardStyle={cardStyle} screenSize={screenSize}>
      {children}
    </S.CardWrapper>
  )
}