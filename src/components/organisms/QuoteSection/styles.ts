import {styled} from "../../../globalStyles";

export const QuoteSectionWrapper = styled.div`
  ${props => `
    
  `}
`

export const QuoteSectionTextWrapper = styled.div`
  ${props => `
    height: ${props.theme.body.sections.quote.height.desktop};
    width: ${props.theme.body.sections.quote.width.desktop};
    display: flex;
    align-items: center;
    font-family: ${props.theme.body.sections.quote.fontFamily};
    color: ${props.theme.body.sections.quote.color};
    font-size: ${props.theme.body.sections.quote.fontSize};
    font-weight: ${props.theme.body.sections.quote.fontWeight};
    line-height: 1.75;
  `}
`

export const QuoteSectionOverlay = styled.div`
  ${props => `
    background: ${props.theme.body.sections.quote.background};
    display: flex;
    justify-content: center;
    align-items: center;
    -moz-box-shadow: inset ${props.theme.body.sections.quote.shadow};
    -webkit-box-shadow: inset ${props.theme.body.sections.quote.shadow};
    box-shadow: inset ${props.theme.body.sections.quote.shadow};
  `}
`