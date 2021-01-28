import * as React from "react"
import * as S from "./styles"
import {ProfilePictureProps} from "./types"

export const ProfilePicture: React.FC<ProfilePictureProps> = ({size= "255px", pictureUrl}) => {
  return (
    <S.ProfilePictureWrapper size={size}>
      <img src={pictureUrl} alt="profile-picture"/>
    </S.ProfilePictureWrapper>
  )
}