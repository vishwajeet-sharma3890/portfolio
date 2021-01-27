import {styled} from "../../../globalStyles";

export const OverlayWrapper = styled.div<{ backgroundColor: string }>`
  ${props => `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${props.backgroundColor};
    opacity: 0.4; 
  `}
`