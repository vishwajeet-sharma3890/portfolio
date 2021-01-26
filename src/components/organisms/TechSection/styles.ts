import {styled} from "../../../globalStyles";

export const TechSectionWrapper = styled.div`
  ${props => `
    
  `}
`

export const TechSectionImageWrapper = styled.div`
  ${props => `
    height: ${props.theme.body.sections.tech.height.desktop};
    width: ${props.theme.body.sections.tech.width.desktop};
    
    
  `}
`

export const TechSectionOverlay = styled.div`
  ${props => `
    background: ${props.theme.body.sections.tech.background};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`