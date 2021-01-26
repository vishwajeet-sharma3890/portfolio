import * as React from "react"
import * as S from "./styles"

export const ProfileDescription: React.FC = ({children}) => {
  return (
    <S.ProfileDescriptionWrapper>
      <p>
        {children}
      </p>
    </S.ProfileDescriptionWrapper>
  )
}