import * as React from 'react';
import * as S from './styles';
import { ProjectPictureProps } from './types';
import { getScreenSize, isMobileScreen, ScreenSize } from '../../../globalStyles/media';

export const ProjectPicture: React.FC<ProjectPictureProps> = ({ pictureUrl, link, index }) => {

  const maxTilt = 30; // Max card tilt (deg).

  // Media query
  const screenSize: ScreenSize = getScreenSize();
  const isMobile = isMobileScreen(screenSize);

  // Finding out the bounding element from mouse event
  const mouseOverBoundingElem = (evt: any | null) => {
    if (evt && evt.target) {
      const target = evt.target;
      const bounding = target.getBoundingClientRect();

      const x = evt.nativeEvent.clientX - Math.round(bounding.left);
      const y = evt.nativeEvent.clientY - Math.round(bounding.top);

      return {
        x: Math.max(0, x),
        y: Math.max(0, y),
        width: Math.round(bounding.width),
        height: Math.round(bounding.height),
      };
    }
    return '';
  };

  const handleMouseMove = (evt: any) => {

    // Don't animate if mobile screen
    if (isMobile) {
      return;
    }

    const bounding = mouseOverBoundingElem(evt);

    if (bounding) {
      const posX = bounding.width / 2 - bounding.x;
      const posY = bounding.height / 2 - bounding.y;

      const hypotenuseCursor = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2));
      const hypotenuseMax = Math.sqrt(Math.pow(bounding.width / 2, 2) + Math.pow(bounding.height / 2, 2));
      const ratio = hypotenuseCursor / hypotenuseMax;

      // Using pure javascript to update animation smoothly

      const projectPictureCover = document.getElementById(`project-picture-cover${index}`);
      if (projectPictureCover) {
        projectPictureCover.style.transform = `rotate3d(${posY / hypotenuseCursor}, ${-posX / hypotenuseCursor}, 0, ${ratio * maxTilt}deg)`;
        projectPictureCover.style.filter = `brightness(${1.6 - bounding.y / bounding.height})`;
      }

      const projectPictureGloss = document.getElementById(`project-picture-gloss${index}`);
      if (projectPictureGloss) {
        projectPictureGloss.style.transform = `translateX(${posX * ratio * 0.75}px) translateY(${posY * ratio}px)`;
        projectPictureGloss.style.opacity = `0.5`;
      }
    }
  };

  const handleMouseLeave = () => {
    // Using pure javascript to update animation smoothly
    const projectPictureCover = document.getElementById(`project-picture-cover${index}`);
    if (projectPictureCover) {
      projectPictureCover.style.transform = ``;
      projectPictureCover.style.filter = ``;
    }
    const projectPictureGloss = document.getElementById(`project-picture-gloss${index}`);
    if (projectPictureGloss) {
      projectPictureGloss.style.transform = `translateX(0) translateY(0)`;
      projectPictureGloss.style.opacity = `0`;
    }
  };

  return (
    <S.ProjectPictureContainer screenSize={screenSize}>
      <S.ProjectPictureWrapper onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} isMobile={isMobile}>
        <S.ProjectPictureHoverWrapper id={`project-picture-cover${index}`} backgroundImage={pictureUrl}>
          <a href={link} target="_blank">
            <img src={pictureUrl} alt="project-picture" />
          </a>
          <S.ProjectPictureGloss id={`project-picture-gloss${index}`} />
        </S.ProjectPictureHoverWrapper>
      </S.ProjectPictureWrapper>
    </S.ProjectPictureContainer>
  );
};