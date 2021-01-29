import * as React from 'react';
import * as S from './styles';
import { ProjectProps } from './types';
import { ProjectPicture } from '../../atoms/ProjectPicture';
import { ProjectDescription } from '../../atoms/ProjectDescription';
import Fade from 'react-reveal/Fade';
import { getScreenSize, isMobileScreen, ScreenSize } from '../../../globalStyles/media';

export const Project: React.FC<ProjectProps> = ({ orientation, projectImage, description, index }) => {

  // Media query
  const screenSize: ScreenSize = getScreenSize()
  const isMobile = isMobileScreen(screenSize)

  return (
    <S.ProjectWrapper screenSize={screenSize}>
      <S.ProjectBackground orientation={orientation} />
      {
        orientation === 'left' || isMobile ?
          <>
            <Fade left>
              <ProjectPicture pictureUrl={projectImage} index={index} />
            </Fade>
            <Fade right>
              <ProjectDescription textAlign={orientation} {...description} />
            </Fade>
          </>
          :
          <>
            <Fade left>
              <ProjectDescription textAlign="right" {...description} />
            </Fade>
            <Fade right>
              <ProjectPicture pictureUrl={projectImage} index={index} />
            </Fade>
          </>
      }


    </S.ProjectWrapper>
  );
};