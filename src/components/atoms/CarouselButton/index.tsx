import * as React from 'react';
import * as S from './styles';
import { CarouselButtonProps } from './types';
import arrowSVG from '../../../images/arrow.svg';
import arrowJPEG from '../../../images/arrow.jpg';

export const CarouselButton: React.FC<CarouselButtonProps> = ({ carouselButtonPosition = 'left' }) => {
  return (
    <S.CarouselButtonWrapper carouselButtonPosition={carouselButtonPosition}>
      <object data={arrowSVG} type="image/svg+xml">
        <img src={arrowJPEG} alt="carousel-arrow" />
      </object>
    </S.CarouselButtonWrapper>
  );
};