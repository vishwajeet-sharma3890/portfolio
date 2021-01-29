import {styled} from "../../../globalStyles";
import { CardStyle } from './types';
import { ScreenSize } from '../../../globalStyles/media';

export const CardWrapper = styled.div<{ cardStyle: CardStyle, screenSize: ScreenSize }>`
  ${props => `
    background: ${props.theme.card[props.cardStyle].background};
    height: ${props.theme.card[props.cardStyle].height};
    width: ${props.theme.card[props.cardStyle].width};
    padding: ${props.theme.card[props.cardStyle].padding[props.screenSize]};
    box-shadow: ${props.theme.card[props.cardStyle].shadow};
  `}
`