import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { icons, ProfileCard } from '../../organisms/ProfileCard';
import { Banner } from '../../atoms/Banner';
import { Spacer } from '../../atoms/Spacer';
import { ProfileDescription } from '../../atoms/ProfileDescription';
import { Button } from '../../atoms/Button';
import { TechSection } from '../../organisms/TechSection';
import { ProjectSection } from '../../organisms/ProjectSection';
import { QuoteSection } from '../../organisms/QuoteSection';
import { ReviewSection } from '../../organisms/ReviewSection';
import { ContactSection } from '../../organisms/ContactSection';
import { ProfileIcons } from '../../molecules/ProfileIcons';
import { theme } from '../../../globalStyles/constants';
import { getScreenSize, isMobileScreen, ScreenSize } from '../../../globalStyles/media';

export const MainPage: React.FC = () => {

  // Refs
  const profileRef = useRef<HTMLDivElement>(null);

  // States
  const [bodyMargin, setBodyMargin] = useState(0);

  // Media query
  const screenSize: ScreenSize = getScreenSize();
  const mobileScreen = isMobileScreen(screenSize);

  useEffect(() => {
    if (profileRef && profileRef.current) {
      setBodyMargin(profileRef.current.clientHeight);
    }
  });

  // Section spacer according to screenSize
  let sectionSpacer = 64;
  if (mobileScreen) {
    sectionSpacer = 32;
  }

  return (
    <S.MainPageWrapper>
      <header>
        <S.BannerContainer>
          <Banner />
          <S.ProfileContainer ref={profileRef} screenSize={screenSize}>
            <ProfileCard />
          </S.ProfileContainer>
        </S.BannerContainer>
      </header>
      <Spacer size={`${bodyMargin}px`} type="horizontal" />
      <ProfileDescription>
        I'm a big techie, I love everything to do with new tech and software. I take pride in delivering my
        products in the highest quality and ensuring that the products have the best user experience and
        customer engagement. I am continuously in pursuit of improving myself and my work so that I bring
        out the best in myself and the people I work with. I have worked in the IT industry for 7 years and
        worked on a variety of technologies and projects. I love a challenge and I am quick to adapt and
        evolve, see the bigger picture and solve problems for customers.<br />
      </ProfileDescription>
      <Spacer size={`${sectionSpacer}px`} type="horizontal" />
      <S.DownloadButtonContainer>
        <a href={"https://drive.google.com/file/d/1O8cYB4jO7Fy3Tq7DpcxKUjLsJWdw6vyu/view?usp=sharing"} target="_blank">
          <Button>Download Resume</Button>
        </a>
      </S.DownloadButtonContainer>
      <Spacer size={`${sectionSpacer * 2}px`} type="horizontal" />
      <TechSection />
      <Spacer size={`${sectionSpacer * 4}px`} type="horizontal" />
      <ProjectSection />
      <QuoteSection />
      <Spacer size={`${sectionSpacer * 2}px`} type="horizontal" />
      {/*<ReviewSection />
      <Spacer size={`${sectionSpacer * 2}px`} type="horizontal" />*/}
      <ContactSection />
      <footer>
        <ProfileIcons icons={icons} defaultColor={theme.colors.white} />
        <Spacer size={`${sectionSpacer + 32}px`} type="horizontal" />
        Copyright © {new Date().getFullYear()} Vish - All Rights Reserved.
      </footer>
    </S.MainPageWrapper>
  );
};