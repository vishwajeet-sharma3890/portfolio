import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as React from "react"
import * as S from "./styles"
import {IconButtonProps} from "./types"
import {useState} from "react";
import {theme} from "../../../globalStyles/constants";

export const IconButton: React.FC<IconButtonProps> = ({defaultColor = theme.colors.black, link, icon}) => {

  const [iconColor, setIconColor] = useState(defaultColor)

  return (
    <S.IconButtonWrapper onMouseEnter={() => setIconColor(theme.colors.primary)} onMouseLeave={() => setIconColor(defaultColor)}>
      <a target="_blank" href={link}>
        <FontAwesomeIcon icon={icon} size="2x" color={iconColor} />
      </a>
    </S.IconButtonWrapper>
  )
}