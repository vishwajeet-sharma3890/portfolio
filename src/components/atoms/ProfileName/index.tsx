import * as React from "react"
import * as S from "./styles"
import {ProfileNameProps} from "./types"
import { getScreenSize, ScreenSize } from '../../../globalStyles/media';

export const ProfileName: React.FC<ProfileNameProps> = ({name, position}) => {

  // Media query
  const screenSize: ScreenSize = getScreenSize()

  return (
    <S.ProfileNameWrapper screenSize={screenSize}>
      I'm <b>{name}</b> <br /> <span>{position}</span>
    </S.ProfileNameWrapper>
  )
}