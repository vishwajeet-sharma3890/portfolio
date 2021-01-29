import {styled} from "../../../globalStyles";
import { ScreenSize } from '../../../globalStyles/media';

export const TechSectionWrapper = styled.div`
  ${props => `
    
  `}
`

export const TechSectionImageWrapper = styled.div<{ screenSize: ScreenSize }>`
  ${props => `
    height: ${props.theme.body.sections.tech.height[props.screenSize]};
    width: ${props.theme.body.sections.tech.width[props.screenSize]};
    padding: 32px 16px;
    display: flex;
    align-items: center;
    
  `}
`

export const TechSectionOverlay = styled.div`
  ${props => `
    background: ${props.theme.body.sections.tech.background};
    display: flex;
    justify-content: center;
    align-items: center;
    -moz-box-shadow: inset ${props.theme.body.sections.tech.shadow};
    -webkit-box-shadow: inset ${props.theme.body.sections.tech.shadow};
    box-shadow: inset ${props.theme.body.sections.tech.shadow};
  `}
`