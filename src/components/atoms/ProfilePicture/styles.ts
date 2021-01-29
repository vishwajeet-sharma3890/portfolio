import {styled} from "../../../globalStyles";

export const ProfilePictureWrapper = styled.div<{ size: string }>`
  ${props => `
  
    margin: auto;
    justify-self: center;
  
     img {
      height: ${props.size};
      width: ${props.size};
     }
  `}
`