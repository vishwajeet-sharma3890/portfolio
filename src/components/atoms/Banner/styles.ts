import { styled } from '../../../globalStyles';

export const BannerWrapper = styled.div`
  ${props => `
    position: relative;    
    -moz-box-shadow: inset ${props.theme.banner.shadow};
    -webkit-box-shadow: inset ${props.theme.banner.shadow};
    box-shadow: inset ${props.theme.banner.shadow};
  `}
`;

export const BannerJPGImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 50vh;
`;