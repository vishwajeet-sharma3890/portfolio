import * as React from 'react';
import * as S from './styles';
import Fade from 'react-reveal/Fade';
import { Spacer } from '../Spacer';
import { getScreenSize, isMobileScreen, ScreenSize } from '../../../globalStyles/media';

export const SectionHeader: React.FC = ({ children }) => {

  // Media query
  const screenSize: ScreenSize = getScreenSize()

  return (
    <Fade bottom>
      <S.SectionWrapper>
        {children}
      </S.SectionWrapper>
      <Spacer size={`${isMobileScreen(screenSize) ? 32 : 64}px`} type="horizontal" />
    </Fade>
  );
};