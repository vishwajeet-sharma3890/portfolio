import {styled} from "../../../globalStyles";
import { ScreenSize } from '../../../globalStyles/media';

export const ContactSectionWrapper = styled.div`
  ${props => `
    position: relative;
    display: flex;
    justify-content: center;
  `}
`

export const ContactSectionContentWrapper = styled.div<{ screenSize: ScreenSize }>`
  ${props => `
    position: relative;
    width: ${props.theme.body.sections.contact.width[props.screenSize]};
    padding: ${props.theme.body.sections.contact.padding[props.screenSize]};
  `}
`

export const ContactSectionBackgroundWrapper = styled.img`
  ${props => `
    position: absolute;
    height: 50%;
    width: 100%;
    bottom: 0;
    object-fit: cover;
    
  `}
`