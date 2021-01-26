import * as React from "react"
import * as S from "./styles"
import {ProfileIconProps} from "./types"
import {IconButton} from "../../atoms/IconButton";

export const ProfileIcons: React.FC<ProfileIconProps> = ({icons}) => {
  return (
    <S.ProfileIconsWrapper>
      {
        icons.map((icon, index) => {
          return (
            <IconButton key={`ProfileIconsWrapper${index}`} icon={icon.icon} link={icon.link} />
          )
        })
      }
    </S.ProfileIconsWrapper>
  )
}