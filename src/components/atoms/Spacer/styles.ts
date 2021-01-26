import {styled} from "../../../globalStyles";
import {SpacerType} from "./types";

export const SpacerWrapper = styled.div<{ size: string, type: SpacerType }>`
  ${props => `
    ${props.type === "vertical" ?
          `
            height: 100%;
            width: ${props.size};
          ` :
          `
            height: ${props.size};
            width: 100%;
          `
  }
  `}
`