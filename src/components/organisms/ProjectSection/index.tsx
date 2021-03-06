import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { Project } from '../../molecules/Project';
import { ProjectProps } from '../../molecules/Project/types';
import buycepsProjectImage from '../../../images/buyceps.svg';
import millionGenieProjectImage from '../../../images/milliongenie.svg';
import millionGenieAppProjectImage from '../../../images/milliongenieapp.svg';
import { Spacer } from '../../atoms/Spacer';
import { getScreenSize, isMobileScreen, ScreenSize } from '../../../globalStyles/media';

const projects: ProjectProps[] = [
  {
    index: 0,
    description: {
      year: '2020',
      company: 'Buyceps India Pty Ltd',
      project: 'E-Commerce website',
      technology: ['ReactJS', 'Typescript', 'GraphQL', 'PostgreSQL'],
      link: 'https://buyceps.com/',
    },
    projectImage: buycepsProjectImage,
    orientation: 'left',
  },
  {
    index: 1,
    description: {
      year: '2018',
      company: 'MillionGenie Pty Ltd',
      project: 'Bloodbank Portal',
      technology: ['ReactJS', 'NodeJS', 'Java', 'PostgreSQL'],
      link: 'https://portal.milliongenie.com/login',
    },
    projectImage: millionGenieProjectImage,
    orientation: 'right',
  },
  {
    index: 2,
    description: {
      year: '2017',
      company: 'MillionGenie Pty Ltd',
      project: 'Blood donation app',
      technology: ['Android', 'Google Analytics', 'Java SDK', 'MongoDB'],
      link: 'https://play.google.com/store/apps/details?id=com.milliongenie.milliongenie&hl=en_AU&gl=US',
    },
    projectImage: millionGenieAppProjectImage,
    orientation: 'left',
  },
];

export const ProjectSection: React.FC = () => {

  // Media query
  const screenSize: ScreenSize = getScreenSize();

  const getProjectSpacing = () => {
    const screenSizeString = screenSize as string
    switch (screenSizeString) {
      case 'largedesktop': {
        return "640px"
      }
      case 'desktop': {
        return "350px"
      }
      case 'largetab': {
        return "350px"
      }
      case 'tab': {
        return "350px"
      }
      case 'largemobile': {
        return "120px"
      }
      case 'mobile': {
        return "120px"
      }
      default : {
        return "350px"
      }
    }
  }

  return (
    <S.ProjectSectionWrapper>
      <SectionHeader>Here is some of that <span>tech</span> in <span>action</span></SectionHeader>
      {
        projects.map((project, index) => {
          return (
            <div key={`ProjectSectionWrapper${index}`}>
              <Project {...project} />
              <Spacer size={getProjectSpacing()} type="horizontal" />
            </div>
          );
        })
      }
    </S.ProjectSectionWrapper>
  );
};