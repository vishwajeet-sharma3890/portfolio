import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { ParallaxContainer } from '../../atoms/ParallaxContainer';
import techbackgroundImage from '../../../images/tech-background.jpg';
import techHTML from '../../../images/tech-html.svg';
import techCSS from '../../../images/tech-css.svg';
import techJS from '../../../images/tech-js.svg';
import techReact from '../../../images/tech-react.svg';
import techPostgres from '../../../images/tech-postgres.svg';
import techNode from '../../../images/tech-node.svg';
import techMongo from '../../../images/tech-mongo.svg';
import { TechImages } from '../../molecules/TechImages';

export const TechSection: React.FC = () => {
  return (
    <S.TechSectionWrapper>
      <SectionHeader>Tech that I can help you with</SectionHeader>
      <ParallaxContainer backgroundImageUrl={techbackgroundImage}>
        <S.TechSectionOverlay>
          <S.TechSectionImageWrapper>
            <TechImages
              images={[techHTML, techCSS, techJS, techReact, techPostgres, techNode, techMongo]} />
          </S.TechSectionImageWrapper>
        </S.TechSectionOverlay>
      </ParallaxContainer>
    </S.TechSectionWrapper>
  );
};