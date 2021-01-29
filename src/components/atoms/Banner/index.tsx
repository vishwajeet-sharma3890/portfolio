import * as React from "react"
import * as S from "./styles"
import cloudsImage from "../../../images/clouds.png"
import {Overlay} from "../Overlay";
import {gradient1} from "../../../globalStyles/constants";
import { getScreenSize } from '../../../globalStyles/media';

export const Banner: React.FC = () => {

  return (
    <S.BannerWrapper>
      <S.BannerJPGImage backgroundImage={cloudsImage} />
      <Overlay backgroundColor={gradient1}/>
    </S.BannerWrapper>
  )
}