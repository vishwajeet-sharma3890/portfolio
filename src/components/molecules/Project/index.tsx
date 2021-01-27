import * as React from 'react';
import * as S from './styles';
import { ProjectProps } from './types';
import { ProjectPicture } from '../../atoms/ProjectPicture';
import { ProjectDescription } from '../../atoms/ProjectDescription';

export const Project: React.FC<ProjectProps> = ({ orientation, projectImage, description , index}) => {

  return (
    <S.ProjectWrapper>
      <S.ProjectBackground orientation={orientation} />
      {
        orientation === 'left' ?
          <>
            <ProjectPicture pictureUrl={projectImage} index={index} />
            <ProjectDescription {...description} />
          </>
          :
          <>
            <ProjectDescription {...description} />
            <ProjectPicture pictureUrl={projectImage} index={index} />
          </>
      }
    </S.ProjectWrapper>
  );
};