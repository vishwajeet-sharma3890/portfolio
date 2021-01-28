import * as React from "react"
import * as S from "./styles"

export const ReviewerReview: React.FC = ({children}) => {
  return (
    <S.ReviewerReviewWrapper>
      {children}
    </S.ReviewerReviewWrapper>
  )
}