import {styled} from "../../../globalStyles";

export const ProfilePictureWrapper = styled.div<{ size: string }>`
  ${props => `
     img {
      height: ${props.size};
      width: ${props.size};
     }
  `}
`