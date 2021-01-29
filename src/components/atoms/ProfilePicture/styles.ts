import {styled} from "../../../globalStyles";

export const ProfilePictureWrapper = styled.div<{ size: string, justifyself: string, margin: string }>`
  ${props => `
  
    margin: ${props.margin};
    justify-self: ${props.justifyself};
  
     img {
      height: ${props.size};
      width: ${props.size};
     }
  `}
`