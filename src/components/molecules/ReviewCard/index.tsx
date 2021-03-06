import * as React from 'react';
import * as S from './styles';
import { ReviewCardProps } from './types';
import { ProfilePicture } from '../../atoms/ProfilePicture';
import { ReviewerName } from '../../atoms/ReviewerName';
import { ReviewerReview } from '../../atoms/ReviewerReview';
import { IconButton } from '../../atoms/IconButton';
import { Card } from '../../atoms/Card';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import overlayTopTimage from '../../../images/reviewoverlaytop.svg';

export const ReviewCard: React.FC<ReviewCardProps> = ({ name, pictureUrl, review, linkedInUrl }) => {
  return (
    <S.ReviewCardWrapper>
      <Card cardStyle="reviewCard">
        <S.ReviewCardOverlay src={overlayTopTimage} isTop={true} />
        <S.ReviewCardOverlay src={overlayTopTimage} isTop={false} />
        <S.ReviewCardProfileWrapper>
          <ProfilePicture pictureUrl={pictureUrl} size="72px" justifySelf="flex-start" margin="0" />
          <ReviewerName {...name} />
        </S.ReviewCardProfileWrapper>
        <ReviewerReview>
          {review}
        </ReviewerReview>
        <S.ReviewCardIconWrapper>
          <IconButton icon={faLinkedin} link={linkedInUrl} />
        </S.ReviewCardIconWrapper>
      </Card>
    </S.ReviewCardWrapper>
  );
};