import * as React from "react"
import * as S from "./styles"
import { getScreenSize, ScreenSize } from '../../../globalStyles/media';

export const ProfileDescription: React.FC = ({children}) => {

  // Media query
  const screenSize: ScreenSize = getScreenSize();

  return (
    <S.ProfileDescriptionWrapper screenSize={screenSize}>
      <p>
        {children}
      </p>
    </S.ProfileDescriptionWrapper>
  )
}