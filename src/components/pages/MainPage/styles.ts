import {styled} from "../../../globalStyles";
import { ScreenSize } from '../../../globalStyles/media';

export const MainPageWrapper = styled.div`
  ${props => `
    font-family: ${props.theme.typography.baseFontFamily};
    
    footer {
      background: ${props.theme.footer.background};
      color: ${props.theme.footer.color};
      font-size: ${props.theme.footer.fontSize};
      font-weight: ${props.theme.footer.fontWeight};
      text-align: center;
      padding: 32px;
    }
  `}
`

export const BannerContainer = styled.div`
  ${props => `
    position: relative;
  `}
`

export const DownloadButtonContainer = styled.div`
  ${props => `
    position: relative;
    display: flex;
    justify-content: center;
  `}
`

export const ProfileContainer = styled.div<{ screenSize: ScreenSize }>`
  ${props => `
    position: absolute;
    width: 100%;
    top: ${props.theme.banner.top[props.screenSize]};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`