import * as React from "react"
import * as S from "./styles"
import {TechImagesProps} from "./types"
import {TechImage} from "../../atoms/TechImage";

export const TechImages: React.FC<TechImagesProps> = ({images}) => {
  return (
    <S.TechImagesWrapper>
      {
        images.map((image, index) => {
          return (
            <TechImage key={`TechImagesWrapper${index}`} imageUrl={image}/>
          )
        })
      }
    </S.TechImagesWrapper>
  )
}