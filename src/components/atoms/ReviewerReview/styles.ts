import {styled} from "../../../globalStyles";

export const ReviewerReviewWrapper = styled.div`
  ${props => `
    
    color: ${props.theme.body.sections.review.card.review.description.color};
    font-size: ${props.theme.body.sections.review.card.review.description.fontSize};
    font-weight: ${props.theme.body.sections.review.card.review.description.fontWeight};
    text-align: left;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: auto;
    
    b {
      color: ${props.theme.body.sections.review.card.review.title.color};
      font-size: ${props.theme.body.sections.review.card.review.title.fontSize};
      font-weight: ${props.theme.body.sections.review.card.review.title.fontWeight};
    }
    
    p {
      line-height: 28px;
    }
    
  `}
`