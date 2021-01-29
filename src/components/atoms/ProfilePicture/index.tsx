import * as React from "react"
import * as S from "./styles"
import {ProfilePictureProps} from "./types"

export const ProfilePicture: React.FC<ProfilePictureProps> = ({margin = "auto", justifySelf = "center", size= "255px", pictureUrl}) => {
  return (
    <S.ProfilePictureWrapper size={size} justifyself={justifySelf} margin={margin}>
      <img src={pictureUrl} alt="profile-picture"/>
    </S.ProfilePictureWrapper>
  )
}