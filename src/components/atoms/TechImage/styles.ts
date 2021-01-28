import {styled} from "../../../globalStyles";

export const TechImageWrapper = styled.div`
  ${props => `
    cursor: pointer;
    transition: transform 0.35s ease; 
    
    :hover {
      transform: scale(1.2);
    }
  `}
`