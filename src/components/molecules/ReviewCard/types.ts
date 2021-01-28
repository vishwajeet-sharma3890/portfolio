import { ReviewerNameProps } from '../../atoms/ReviewerName/types';
import { ReactChild } from 'react';

export interface ReviewCardProps {
  name: ReviewerNameProps
  pictureUrl: string
  review: ReactChild
  linkedInUrl: string
}