import * as React from "react"
import * as S from "./styles"
import {ProjectPictureProps} from "./types"

export const ProjectPicture: React.FC<ProjectPictureProps> = ({pictureUrl}) => {
  return (
    <S.ProjectPictureWrapper>
      <img src={pictureUrl} alt="profile-picture"/>
    </S.ProjectPictureWrapper>
  )
}