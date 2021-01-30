import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { ReviewCard } from '../../molecules/ReviewCard';
import { ReviewCardProps } from '../../molecules/ReviewCard/types';
import sampleReviewerPicture from '../../../images/samplereviewerpic.svg';
import { getScreenSize, ScreenSize } from '../../../globalStyles/media';
import Fade from 'react-reveal/Fade';
import Slider from 'react-slick';
import ismailJpeg from '../../../images/reviewer/ismail.jpg'

const reviews: ReviewCardProps[] = [
  {
    name: {
      company: 'Accenture',
      name: 'Ismail Khatib',
      position: 'Senior Software Engineer',
    },
    pictureUrl: ismailJpeg,
    review: <p>It was a pleasure working with Vishwajeet in TCS. He is a very ambitious and dedicated person. I mostly used to run to him with my java issues. Used to get remarkable solutions in return. Apart from work, we exchanged cultures, used to hangout after work sometimes. Never leaves a chance to help others. I wish I get to work with again in future.</p>,
    linkedInUrl: 'https://www.linkedin.com/in/ismail-khatib-732587a2/',
  },
  {
    name: {
      company: 'Auswide',
      name: 'Jess Sharma2',
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
      name: 'Jess Sharma3',
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
      name: 'Jess Sharma4',
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
      name: 'Jess Sharma5',
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
      name: 'Jess Sharma6',
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
      name: 'Jess Sharma7',
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
      name: 'Jess Sharma8',
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
      name: 'Jess Sharma9',
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
      name: 'Jess Sharma10',
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

  const getNumberOfSlides = () => {

    const screen = screenSize as string;

    switch (screen) {
      case 'largedesktop': {
        return 5;
      }
      case 'desktop': {
        return 4;
      }
      case 'largetab': {
        return 2;
      }
      case 'tab': {
        return 2;
      }
      case 'largemobile': {
        return 1;
      }
      case 'mobile': {
        return 1;
      }
      default :
        return 1;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: getNumberOfSlides(),
    slidesToScroll: getNumberOfSlides(),
    variableWidth: true,
  };

  return (
    <S.ReviewSectionWrapper>
      <SectionHeader><span>Hear</span> it from the <span>people</span> I <span>worked</span> with</SectionHeader>

      <S.ReviewSectionContentWrapper>
        <S.ReviewSectionBackgroundWrapper>
          <S.ReviewSectionBackground />
        </S.ReviewSectionBackgroundWrapper>
        <Fade bottom>
          <Slider {...settings}>
            {
              reviews.map((review, index) => (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ReviewCard key={`ReviewSectionWrapper${index}`} {...review} />
                </div>
              ))
            }
          </Slider>
        </Fade>
      </S.ReviewSectionContentWrapper>
    </S.ReviewSectionWrapper>
  );
};