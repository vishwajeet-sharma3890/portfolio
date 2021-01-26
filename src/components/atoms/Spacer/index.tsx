import * as React from "react"
import * as S from "./styles"
import {SpacerProps} from "./types"

export const Spacer: React.FC<SpacerProps> = ({size, type}) => {
  return (
    <S.SpacerWrapper size={size} type={type} />
  )
}