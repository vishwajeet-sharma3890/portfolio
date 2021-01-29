import {styled} from "../../../globalStyles";
import { ScreenSize } from '../../../globalStyles/media';

export const ProfileDescriptionWrapper = styled.div<{ screenSize: ScreenSize }>`
  ${props => `
    
    color: ${props.theme.body.description.color};
    font-size: ${props.theme.body.description.fontSize};
    font-weight: ${props.theme.body.description.fontWeight};
    text-align: center;
    display: flex;
    justify-content: center;
    width: auto;
    margin: auto;
    padding: 16px;
    width: ${props.theme.body.description.width[props.screenSize]};
    
    p {
      line-height: 32px;
    }
    
  `}
`