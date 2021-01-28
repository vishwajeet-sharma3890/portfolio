import * as React from "react"
import * as S from "./styles"

export const ReviewerDescription: React.FC = ({children}) => {
  return (
    <S.ReviewerDescriptionWrapper>
      <p>
        {children}
      </p>
    </S.ReviewerDescriptionWrapper>
  )
}