import * as React from "react"
import * as S from "./styles"
import {OverlayProps} from "./types"

export const Overlay: React.FC<OverlayProps> = ({backgroundColor}) => {
  return (
    <S.OverlayWrapper backgroundColor={backgroundColor}/>
  )
}