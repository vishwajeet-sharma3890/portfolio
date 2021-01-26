import * as React from "react"
import * as S from "./styles"
import {ProfileAttributeProps} from "./types"

export const ProfileAttribute: React.FC<ProfileAttributeProps> = ({label, value}) => {
  return (
    <S.ProfileAttributeWrapper>
      <label>{label}</label> : <span>{value}</span>
    </S.ProfileAttributeWrapper>
  )
}