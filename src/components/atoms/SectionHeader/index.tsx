import * as React from 'react';
import * as S from './styles';
import Fade from 'react-reveal/Fade';

export const SectionHeader: React.FC = ({ children }) => {
  return (
    <Fade bottom>
      <S.SectionWrapper>
        {children}
      </S.SectionWrapper>
    </Fade>
  );
};