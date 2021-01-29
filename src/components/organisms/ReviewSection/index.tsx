import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { ReviewCard } from '../../molecules/ReviewCard';
import { ReviewCardProps } from '../../molecules/ReviewCard/types';
import sampleReviewerPicture from '../../../images/samplereviewerpic.svg';
import Carousel, { arrowsPlugin, autoplayPlugin, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import 'react-multi-carousel/lib/styles.css';
import { getScreenSize, isMobileScreen, ScreenSize } from '../../../globalStyles/media';
import { CarouselButton } from '../../atoms/CarouselButton';

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

  return (
    <S.ReviewSectionWrapper>
      <SectionHeader><span>Hear</span> it from the <span>people</span> I <span>worked</span> with</SectionHeader>
      <S.ReviewSectionContentWrapper>
        <Carousel
          plugins={[
            'centered',
            'infinite',
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <CarouselButton carouselButtonPosition="left" />,
                arrowLeftDisabled: <CarouselButton disabled carouselButtonPosition="left" />,
                arrowRight: <CarouselButton carouselButtonPosition="right" />,
                arrowRightDisabled: <CarouselButton disabled carouselButtonPosition="right" />,
                addArrowClickHandler: false,
              },
            },
            {
              resolve: autoplayPlugin,
              options: {
                interval: 3000,
              },
            },
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: mobileScreen ? 1 : 2,
              },
            },
          ]}
          animationSpeed={1000}
        >
          {
            reviews.map((review, index) => (
              <ReviewCard key={`ReviewSectionWrapper${index}`} {...review} />
            ))
          }
        </Carousel>
      </S.ReviewSectionContentWrapper>
    </S.ReviewSectionWrapper>
  );
};