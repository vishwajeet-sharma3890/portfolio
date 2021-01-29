import {styled} from "../../../globalStyles";
import { ScreenSize } from '../../../globalStyles/media';

export const ProfileNameWrapper = styled.div<{ screenSize: ScreenSize }>`
  ${props => `
    color: ${props.theme.banner.profile.name.label.color};
    font-size: ${props.theme.banner.profile.name.label.fontSize};
    font-weight: ${props.theme.banner.profile.name.label.fontWeight};
    text-align: ${props.theme.banner.profile.name.textAlign[props.screenSize]};
    
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