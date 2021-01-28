import {styled} from "../../../globalStyles";
import { CardStyle } from './types';

export const CardWrapper = styled.div<{ cardStyle: CardStyle }>`
  ${props => `
    background: ${props.theme.card[props.cardStyle].background};
    height: ${props.theme.card[props.cardStyle].height};
    width: ${props.theme.card[props.cardStyle].width};
    padding: ${props.theme.card[props.cardStyle].padding};
    box-shadow: ${props.theme.card[props.cardStyle].shadow};
  `}
`