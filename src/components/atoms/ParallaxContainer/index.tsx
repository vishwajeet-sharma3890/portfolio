import * as React from "react"
import * as S from "./styles"
import {ParallaxContainerProps} from "./types"
import {Parallax} from 'react-parallax'

export const ParallaxContainer: React.FC<ParallaxContainerProps> = ({backgroundImageUrl, children}) => {
  return (
    <S.ParallaxContainerWrapper>
      <Parallax blur={0} bgImage={backgroundImageUrl} bgImageAlt="parallax-image" strength={300}>
        {children}
      </Parallax>
    </S.ParallaxContainerWrapper>
  )
}