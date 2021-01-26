import * as React from "react"
import * as S from "./styles"
import {DividerProps} from "./types"

export const Divider: React.FC<DividerProps> = ({size, type, margin}) => {
  return (
    <S.DividerWrapper size={size} type={type} margin={margin}/>
  )
}