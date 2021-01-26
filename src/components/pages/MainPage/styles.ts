import {styled} from "../../../globalStyles";

export const MainPageWrapper = styled.div`
  ${props => `
    font-family: ${props.theme.typography.baseFontFamily};
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