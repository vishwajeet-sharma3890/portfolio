import * as React from "react"
import * as S from "./styles"
import {TechImageProps} from "./types"

export const TechImage: React.FC<TechImageProps> = ({link, imageUrl}) => {
  return (
    <S.TechImageWrapper>
      <a href={link} target="_blank">
        <img src={imageUrl} alt="tech-image"/>
      </a>
    </S.TechImageWrapper>
  )
}