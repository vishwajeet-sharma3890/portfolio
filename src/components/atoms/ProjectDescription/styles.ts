import {styled} from "../../../globalStyles";
import { ScreenSize, TextAlign } from '../../../globalStyles/media';

export const ProjectDescriptionWrapper = styled.div<{ screenSize: ScreenSize, textAlign: TextAlign }>`
  ${props => `
  
    text-align: ${props.textAlign};
  
    h6 {
      opacity: 0.38;
      color: ${props.theme.body.sections.projects.year.color};
      font-size: ${props.theme.body.sections.projects.year.fontSize};
      font-weight: ${props.theme.body.sections.projects.year.fontWeight};
      margin: 0;
    }
    
    h5 {
      opacity: 0.38;
      color: ${props.theme.body.sections.projects.company.color};
      font-size: ${props.theme.body.sections.projects.company.fontSize};
      font-weight: ${props.theme.body.sections.projects.company.fontWeight};
      margin: 0;
    }
    
    h3 {
      color: ${props.theme.body.sections.projects.project.color};
      font-size: ${props.theme.body.sections.projects.project.fontSize[props.screenSize]};
      font-weight: ${props.theme.body.sections.projects.project.fontWeight};
      text-shadow: ${props.theme.body.sections.heading.textShadow};
      margin: 0;
    }
    
    ul {
      display: inline;
      list-style-type: none;
      padding: 0;
      color: ${props.theme.body.sections.projects.tech.color};
      font-size: ${props.theme.body.sections.projects.tech.fontSize};
      font-weight: ${props.theme.body.sections.projects.tech.fontWeight};
      
      li {
        margin: 4px 0;
      }
      
    }
    
    a {
      color: ${props.theme.body.sections.projects.link.color};
      font-size: ${props.theme.body.sections.projects.link.fontSize};
      font-weight: ${props.theme.body.sections.projects.link.fontWeight};
    }
    
  `}
`