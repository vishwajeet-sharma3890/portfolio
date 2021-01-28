import {styled} from "../../../globalStyles";

export const ReviewerNameWrapper = styled.div`
  ${props => `
    color: ${props.theme.body.sections.review.card.profile.position.color};
    font-size: ${props.theme.body.sections.review.card.profile.position.fontSize};
    font-weight: ${props.theme.body.sections.review.card.profile.position.fontWeight};
    
    b {
      color: ${props.theme.body.sections.review.card.profile.name.color};
      font-size: ${props.theme.body.sections.review.card.profile.name.fontSize};
      font-weight: ${props.theme.body.sections.review.card.profile.name.fontWeight};
    }
    
    span {
      color: ${props.theme.body.sections.review.card.profile.company.color};
    font-size: ${props.theme.body.sections.review.card.profile.company.fontSize};
    font-weight: ${props.theme.body.sections.review.card.profile.company.fontWeight};
    }
    
  `}
`