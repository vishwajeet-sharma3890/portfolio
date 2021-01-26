import * as React from "react"
import * as S from "./styles"
import {ProfileNameProps} from "./types"

export const ProfileName: React.FC<ProfileNameProps> = ({name, position}) => {
  return (
    <S.ProfileNameWrapper>
      I'm <b>{name}</b> <br /> <span>{position}</span>
    </S.ProfileNameWrapper>
  )
}