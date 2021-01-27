import * as React from "react"
import * as S from "./styles"
import {ProfilePictureProps} from "./types"

export const ProfilePicture: React.FC<ProfilePictureProps> = ({pictureUrl}) => {
  return (
    <S.ProfilePictureWrapper>
      <img src={pictureUrl} alt="profile-picture"/>
    </S.ProfilePictureWrapper>
  )
}