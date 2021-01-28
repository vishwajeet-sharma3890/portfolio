import {styled} from "../../../globalStyles";

export const ReviewSectionWrapper = styled.div`
  ${props => `
    position: relative;
  `}
`

export const ReviewSectionContentWrapper = styled.div`
  ${props => `
    position: relative;
  `}
`

export const ReviewSectionBackgroundWrapper = styled.div`
  ${props => `
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  `}
`

export const ReviewSectionBackground = styled.div`
  ${props => `
    position: relative;
    background: ${props.theme.body.sections.review.background};
    height: 200px;
    width: 100%;
    
  `}
`