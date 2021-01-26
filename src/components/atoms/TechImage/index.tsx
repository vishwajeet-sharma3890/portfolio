import * as React from "react"
import * as S from "./styles"
import {TechImageProps} from "./types"

export const TechImage: React.FC<TechImageProps> = ({imageUrl}) => {
  return (
    <S.TechImageWrapper>
      <img src={imageUrl} alt="tech-image"/>
    </S.TechImageWrapper>
  )
}