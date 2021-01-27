import {styled} from "../../../globalStyles";
import { ProjectOrientation } from './types';

export const ProjectWrapper = styled.div`
  ${props => `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 72px;
  `}
`

export const ProjectBackground = styled.div<{ orientation: ProjectOrientation }>`
  ${props => `
    position: absolute;
    top: 56px;
    left: 0;
    z-index: ${props.theme.zIndex.projectBackground};
    height: 90%;
    width: 100%;
    background: ${props.theme.body.sections.projects.background.background};
    -ms-transform: skewY(${props.orientation === "left" ? "-" : ""}10deg); /* IE 9 */
    transform: skewY(${props.orientation === "left" ? "-" : ""}10deg); /* Standard syntax */
    -moz-box-shadow: inset ${props.theme.body.sections.projects.background.shadow};
    -webkit-box-shadow: inset ${props.theme.body.sections.projects.background.shadow};
    box-shadow: inset ${props.theme.body.sections.projects.background.shadow};
  `}
`