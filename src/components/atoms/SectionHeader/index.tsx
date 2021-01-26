import * as React from "react"
import * as S from "./styles"

export const SectionHeader: React.FC = ({children}) => {
  return (
    <S.SectionWrapper>
      {children}
    </S.SectionWrapper>
  )
}