import {styled} from "../../../globalStyles";

export const ProfileNameWrapper = styled.div`
  ${props => `
    color: ${props.theme.banner.profile.name.label.color};
    font-size: ${props.theme.banner.profile.name.label.fontSize};
    font-weight: ${props.theme.banner.profile.name.label.fontWeight};
    
    b {
      color: ${props.theme.banner.profile.name.value.color};
      font-size: ${props.theme.banner.profile.name.value.fontSize};
      font-weight: ${props.theme.banner.profile.name.value.fontWeight};
    }
    
    span {
      color: ${props.theme.banner.profile.position.color};
      font-size: ${props.theme.banner.profile.position.fontSize};
      font-weight: ${props.theme.banner.profile.position.fontWeight};
    }
    
  `}
`