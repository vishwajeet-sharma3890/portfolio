import * as React from 'react';
import * as S from './styles';
import { ProjectProps } from './types';
import { ProjectPicture } from '../../atoms/ProjectPicture';
import { ProjectDescription } from '../../atoms/ProjectDescription';
import Fade from 'react-reveal/Fade';

export const Project: React.FC<ProjectProps> = ({ orientation, projectImage, description, index }) => {

  return (
    <S.ProjectWrapper>
      <S.ProjectBackground orientation={orientation} />
      {
        orientation === 'left' ?
          <>
            <Fade left>
              <ProjectPicture pictureUrl={projectImage} index={index} />
            </Fade>
            <Fade right>
              <ProjectDescription {...description} />
            </Fade>
          </>
          :
          <>
            <Fade left>
              <ProjectDescription {...description} />
            </Fade>
            <Fade right>
              <ProjectPicture pictureUrl={projectImage} index={index} />
            </Fade>
          </>
      }


    </S.ProjectWrapper>
  );
};