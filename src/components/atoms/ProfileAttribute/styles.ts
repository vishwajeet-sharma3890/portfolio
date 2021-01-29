import {styled} from "../../../globalStyles";
import { ScreenSize } from '../../../globalStyles/media';

export const ProfileAttributeWrapper = styled.div<{ screenSize: ScreenSize }>`
  ${props => `
  
    display: grid;
    grid-template-columns: 50px 24px 1fr;
  
    color: ${props.theme.banner.profile.attributes.value.color};
    font-size: ${props.theme.banner.profile.attributes.value.fontSize[props.screenSize]};
    font-weight: ${props.theme.banner.profile.attributes.value.fontWeight};
    
    label {
      color: ${props.theme.banner.profile.attributes.label.color};
      font-size: ${props.theme.banner.profile.attributes.label.fontSize[props.screenSize]};
      font-weight: ${props.theme.banner.profile.attributes.label.fontWeight};
    }
  `}
`