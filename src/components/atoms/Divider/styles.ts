import {styled} from "../../../globalStyles";
import {DividerType} from "./types";

export const DividerWrapper = styled.div<{ margin: string; size: string, type: DividerType }>`
  ${props => `
    background: ${props.theme.divider.background};
    margin: ${props.margin};
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