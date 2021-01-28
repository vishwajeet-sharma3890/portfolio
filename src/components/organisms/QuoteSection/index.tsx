import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { ParallaxContainer } from '../../atoms/ParallaxContainer';
import techbackgroundImage from '../../../images/tech-background.jpg';
import techAndroid from '../../../images/tech-android.svg';
import techHTML from '../../../images/tech-html.svg';
import techCSS from '../../../images/tech-css.svg';
import techJS from '../../../images/tech-js.svg';
import techReact from '../../../images/tech-react.svg';
import techPostgres from '../../../images/tech-postgres.svg';
import techNode from '../../../images/tech-node.svg';
import techMongo from '../../../images/tech-mongo.svg';
import { TechImages } from '../../molecules/TechImages';
import { Spacer } from '../../atoms/Spacer';

export const QuoteSection: React.FC = () => {
  return (
    <S.QuoteSectionWrapper>
      <ParallaxContainer backgroundImageUrl={techbackgroundImage}>
        <S.QuoteSectionOverlay>
          <S.QuoteSectionTextWrapper>
            "Some really nice big quote here which says something about me and my work ethic
            and people will read and be like "Oh yes, that's something to think about"
          </S.QuoteSectionTextWrapper>
        </S.QuoteSectionOverlay>
      </ParallaxContainer>
    </S.QuoteSectionWrapper>
  );
};