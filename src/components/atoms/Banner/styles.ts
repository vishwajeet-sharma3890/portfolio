import { styled } from '../../../globalStyles';

export const BannerWrapper = styled.div`
  ${props => `
    position: relative;    
    -moz-box-shadow: inset ${props.theme.banner.shadow};
    -webkit-box-shadow: inset ${props.theme.banner.shadow};
    box-shadow: inset ${props.theme.banner.shadow};
  `}
`;

export const BannerJPGImage = styled.div<{ backgroundImage: string }>`
  object-fit: cover;
  width: 100%;
  height: 37vh;
  background-color:#C0DEED;
  background: url(${props => props.backgroundImage}) center top repeat-x;
  animation: ${props => props.theme.animation.cloudAnimation} 20s alternate infinite;
  -ms-animation: ${props => props.theme.animation.cloudAnimation} 20s alternate infinite;
  -moz-animation: ${props => props.theme.animation.cloudAnimation} 20s alternate infinite;
  -webkit-animation: ${props => props.theme.animation.cloudAnimation} 20s alternate infinite;
`;