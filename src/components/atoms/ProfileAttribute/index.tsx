import * as React from "react"
import * as S from "./styles"
import {ProfileAttributeProps} from "./types"
import { getScreenSize, ScreenSize } from '../../../globalStyles/media';

export const ProfileAttribute: React.FC<ProfileAttributeProps> = ({label, value}) => {

  // Media query
  const screenSize: ScreenSize = getScreenSize()

  return (
    <S.ProfileAttributeWrapper screenSize={screenSize}>
      <label>{label}</label> : <span>{value}</span>
    </S.ProfileAttributeWrapper>
  )
}