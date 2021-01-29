import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { ReviewCard } from '../../molecules/ReviewCard';
import { ReviewCardProps } from '../../molecules/ReviewCard/types';
import sampleReviewerPicture from '../../../images/samplereviewerpic.svg';
import { getScreenSize, isMobileScreen, ScreenSize } from '../../../globalStyles/media';
import Fade from 'react-reveal/Fade';

const reviews: ReviewCardProps[] = [
  {
    name: {
      company: 'Auswide',
      name: 'Jess Sharma',
      position: 'Specialist',
    },
    pictureUrl: sampleReviewerPicture,
    review: <p><b>Loren Ipsum is a sample</b><br />This is sample text of my ex-teammate explaining how good I was and
      how good their experience was working with me.</p>,
    linkedInUrl: '',
  },
  {
    name: {
      company: 'Auswide',
      name: 'Jess Sharma',
      position: 'Specialist',
    },
    pictureUrl: sampleReviewerPicture,
    review: <p><b>Loren Ipsum is a sample</b><br />This is sample text of my ex-teammate explaining how good I was and
      how good their experience was working with me.</p>,
    linkedInUrl: '',
  },
  {
    name: {
      company: 'Auswide',
      name: 'Jess Sharma',
      position: 'Specialist',
    },
    pictureUrl: sampleReviewerPicture,
    review: <p><b>Loren Ipsum is a sample</b><br />This is sample text of my ex-teammate explaining how good I was and
      how good their experience was working with me.</p>,
    linkedInUrl: '',
  },
  {
    name: {
      company: 'Auswide',
      name: 'Jess Sharma',
      position: 'Specialist',
    },
    pictureUrl: sampleReviewerPicture,
    review: <p><b>Loren Ipsum is a sample</b><br />This is sample text of my ex-teammate explaining how good I was and
      how good their experience was working with me.</p>,
    linkedInUrl: '',
  },
];

export const ReviewSection: React.FC = () => {

  // Media query
  const screenSize: ScreenSize = getScreenSize();
  const mobileScreen = isMobileScreen(screenSize);

  const getNumberOfSlides = () => {

    const screen = screenSize as string

    switch (screen) {
      case 'largedesktop': {
        return 5;
      }
      case 'desktop': {
        return 4
      }
      case 'largetab': {
        return 2
      }
      case 'tab': {
        return 2
      }
      case 'largemobile': {
        return 1
      }
      case 'mobile': {
        return 1
      }
      default : return 1
    }
  }

  return (
    <S.ReviewSectionWrapper>
      <SectionHeader><span>Hear</span> it from the <span>people</span> I <span>worked</span> with</SectionHeader>
      <S.ReviewSectionContentWrapper>
        <S.ReviewSectionBackgroundWrapper>
          <S.ReviewSectionBackground />
        </S.ReviewSectionBackgroundWrapper>
        <Fade bottom>
          <div></div>
        </Fade>
      </S.ReviewSectionContentWrapper>
    </S.ReviewSectionWrapper>
  );
};