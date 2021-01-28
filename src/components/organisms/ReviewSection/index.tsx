import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { ReviewCard } from '../../molecules/ReviewCard';
import { ReviewCardProps } from '../../molecules/ReviewCard/types';
import { Spacer } from '../../atoms/Spacer';
import sampleReviewerPicture from '../../../images/samplereviewerpic.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 764,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 764,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};

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
  return (
    <S.ReviewSectionWrapper>
      <SectionHeader>Hear it from the <span>people</span> I <span>worked</span> with</SectionHeader>
      <Spacer size="64px" type="horizontal" />
      <Carousel customLeftArrow={<div />}
                customRightArrow={<div />} swipeable minimumTouchDrag={80} draggable infinite autoPlaySpeed={3000}
                centerMode responsive={responsive}>
        {
          reviews.map((review, index) => (
            <ReviewCard key={`ReviewSectionWrapper${index}`} {...review} />
          ))
        }
      </Carousel>
    </S.ReviewSectionWrapper>
  );
};