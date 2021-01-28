import {styled} from "../../../globalStyles";

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

export const ProfileContainer = styled.div`
  ${props => `
    position: absolute;
    width: 100%;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`