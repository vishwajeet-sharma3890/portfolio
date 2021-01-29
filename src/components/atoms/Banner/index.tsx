import * as React from "react"
import * as S from "./styles"
import cloudsImage from "../../../images/clouds.png"
import cloudsMobileImage from "../../../images/clouds-mobile.png"
import {Overlay} from "../Overlay";
import {gradient1} from "../../../globalStyles/constants";
import { getScreenSize, isMobileScreen, ScreenSize } from '../../../globalStyles/media';

export const Banner: React.FC = () => {

  // Media query
  const screenSize: ScreenSize = getScreenSize()
  const isMobile = isMobileScreen(screenSize)

  return (
    <S.BannerWrapper>
      <S.BannerJPGImage backgroundImage={isMobile ? cloudsMobileImage : cloudsImage} screenSize={screenSize} />
      <Overlay backgroundColor={gradient1}/>
    </S.BannerWrapper>
  )
}