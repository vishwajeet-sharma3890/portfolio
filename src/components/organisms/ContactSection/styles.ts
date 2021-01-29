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
    width: ${props.theme.body.sections.projects[props.screenSize]};
  `}
`