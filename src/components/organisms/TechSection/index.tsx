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
import { TechImageProps } from '../../atoms/TechImage/types';
import { getScreenSize, ScreenSize } from '../../../globalStyles/media';

const techImages: TechImageProps[] = [
  {
    imageUrl: techAndroid,
    link: "https://www.android.com/intl/en_au/",
  },
  {
    imageUrl: techHTML,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    imageUrl: techCSS,
    link: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics",
  },
  {
    imageUrl: techJS,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    imageUrl: techReact,
    link: "https://reactjs.org/",
  },
  {
    imageUrl: techPostgres,
    link: "https://www.postgresql.org/",
  },
  {
    imageUrl: techNode,
    link: "https://nodejs.org/en/",
  },
  {
    imageUrl: techMongo,
    link: "https://www.mongodb.com/",
  },
]

export const TechSection: React.FC = () => {

  // Media query
  const screenSize: ScreenSize = getScreenSize()

  return (
    <S.TechSectionWrapper>
      <SectionHeader><span>Tech</span> that I can help <span>you</span> with</SectionHeader>
      <ParallaxContainer backgroundImageUrl={techbackgroundImage}>
        <S.TechSectionOverlay>
          <S.TechSectionImageWrapper screenSize={screenSize}>
            <TechImages
              images={techImages} />
          </S.TechSectionImageWrapper>
        </S.TechSectionOverlay>
      </ParallaxContainer>
    </S.TechSectionWrapper>
  );
};