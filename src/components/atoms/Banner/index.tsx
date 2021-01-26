import * as React from "react"
import * as S from "./styles"
import bannerImageJPEG from "../../../images/banner.jpg"
import {Overlay} from "../Overlay";
import {gradient1} from "../../../globalStyles/constants";

export const Banner: React.FC = () => {
  return (
    <S.BannerWrapper>
      <S.BannerJPGImage alt="banner" src={bannerImageJPEG}/>
      <Overlay backgroundColor={gradient1}/>
    </S.BannerWrapper>
  )
}