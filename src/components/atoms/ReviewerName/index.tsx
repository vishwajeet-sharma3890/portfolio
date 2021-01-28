import * as React from "react"
import * as S from "./styles"
import {ReviewerNameProps} from "./types"

export const ReviewerName: React.FC<ReviewerNameProps> = ({name, position, company }) => {
  return (
    <S.ReviewerNameWrapper>
      <b>{name}</b> <br /> {position} <br /> <span>@{company}</span>
    </S.ReviewerNameWrapper>
  )
}