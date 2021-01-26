import * as React from "react"
import * as S from "./styles"
import {ProfileAttributesProps} from "./types"
import {ProfileAttribute} from "../../atoms/ProfileAttribute";
import {Spacer} from "../../atoms/Spacer";

export const ProfileAttributes: React.FC<ProfileAttributesProps> = ({attributes}) => {
  return (
    <S.ProfileAttributesWrapper>
      {
        attributes.map((attribute, index) => {
          return (
            <>
              <ProfileAttribute key={`ProfileAttributesWrapper${index}`} {...attribute} />
              {index < attributes.length -1 && <Spacer size="16px" type="horizontal" />}
            </>
          )
        })
      }
    </S.ProfileAttributesWrapper>
  )
}