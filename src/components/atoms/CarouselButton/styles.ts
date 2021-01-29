import { styled } from '../../../globalStyles';
import { CarouselButtonPosition } from './types';

export const CarouselButtonWrapper = styled.div<{ carouselButtonPosition: CarouselButtonPosition }>`
  ${props => `
      height: 42px;
      width: 42px;
      background: ${props.theme.button.carousel.background};
      display: flex;
      align-items: center;
      justify-content: center;
      
      object {
        transform: rotate(${props.carouselButtonPosition === "right" ? "180" : "0"}deg);  
      }
      
    `    
  }
`