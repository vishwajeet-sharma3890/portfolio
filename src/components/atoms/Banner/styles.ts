import { styled } from '../../../globalStyles';
import { ScreenSize } from '../../../globalStyles/media';

export const BannerWrapper = styled.div`
  ${props => `
    position: relative;    
    -moz-box-shadow: inset ${props.theme.banner.shadow};
    -webkit-box-shadow: inset ${props.theme.banner.shadow};
    box-shadow: inset ${props.theme.banner.shadow};
  `}
`;

export const BannerJPGImage = styled.div<{ backgroundImage: string, screenSize: ScreenSize }>`
  ${props => `
    height: ${props.theme.banner.height[props.screenSize]};
    width: 100%;
  `};
  object-fit: cover;
  background-color:#C0DEED;
  background: url(${props => props.backgroundImage}) center top repeat-x;
  animation: ${props => props.theme.animation.cloudAnimation} 20s alternate infinite;
  -ms-animation: ${props => props.theme.animation.cloudAnimation} 20s alternate infinite;
  -moz-animation: ${props => props.theme.animation.cloudAnimation} 20s alternate infinite;
  -webkit-animation: ${props => props.theme.animation.cloudAnimation} 20s alternate infinite;
`;