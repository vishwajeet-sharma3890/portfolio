import {styled} from "../../../globalStyles";

export const TechSectionWrapper = styled.div`
  ${props => `
    
  `}
`

export const TechSectionImageWrapper = styled.div`
  ${props => `
    height: ${props.theme.body.sections.tech.height.desktop};
    width: ${props.theme.body.sections.tech.width.desktop};
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