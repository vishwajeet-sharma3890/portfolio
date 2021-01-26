import {styled} from "../../../globalStyles";

export const ProfileAttributeWrapper = styled.div`
  ${props => `
  
    display: grid;
    grid-template-columns: 50px 24px 1fr;
  
    color: ${props.theme.banner.profile.attributes.value.color};
    font-size: ${props.theme.banner.profile.attributes.value.fontSize};
    font-weight: ${props.theme.banner.profile.attributes.value.fontWeight};
    
    label {
      color: ${props.theme.banner.profile.attributes.label.color};
      font-size: ${props.theme.banner.profile.attributes.label.fontSize};
      font-weight: ${props.theme.banner.profile.attributes.label.fontWeight};
    }
  `}
`