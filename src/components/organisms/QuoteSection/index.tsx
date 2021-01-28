import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { ParallaxContainer } from '../../atoms/ParallaxContainer';
import quoteBackgroundImage from '../../../images/quote-background.jpg';
import { Spacer } from '../../atoms/Spacer';

export const QuoteSection: React.FC = () => {
  return (
    <S.QuoteSectionWrapper>
      <SectionHeader>A quote from my idol <span>Kobe Bryant</span> that defines who I am</SectionHeader>
      <Spacer size="64px" type="horizontal" />
      <ParallaxContainer backgroundImageUrl={quoteBackgroundImage}>
        <S.QuoteSectionOverlay>
          <S.QuoteSectionTextWrapper>
            "I wanted you to know that it doesn't matter how hard you work, that I'm willing to work harder than you." -
            Kobe Bryant to Jay Williams
          </S.QuoteSectionTextWrapper>
        </S.QuoteSectionOverlay>
      </ParallaxContainer>
    </S.QuoteSectionWrapper>
  );
};