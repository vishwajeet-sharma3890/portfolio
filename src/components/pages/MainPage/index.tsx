import * as React from "react"
import * as S from "./styles"
import {ProfilePicture} from "../../atoms/ProfilePicture"
import profileImage from "../../../images/profile.svg"
import {ProfileCard} from "../../organisms/ProfileCard";
import {Banner} from "../../atoms/Banner";
import {ProfileIcons} from "../../molecules/ProfileIcons";
import {Spacer} from "../../atoms/Spacer";
import {useEffect, useRef, useState} from "react";
import {ProfileDescription} from "../../atoms/ProfileDescription";
import {Button} from "../../atoms/Button";
import { TechSection } from "../../organisms/TechSection";

export const MainPage: React.FC = () => {

  // Refs
  const profileRef = useRef<HTMLDivElement>(null)

  // States
  const [bodyMargin, setBodyMargin] = useState(0)

  useEffect(() => {
    if (profileRef && profileRef.current) {
      setBodyMargin(profileRef.current.clientHeight - 120)
    }
  })

  return (
    <S.MainPageWrapper>
      <header>
        <S.BannerContainer>
          <Banner />
          <S.ProfileContainer ref={profileRef}>
            <ProfileCard />
          </S.ProfileContainer>
        </S.BannerContainer>
      </header>
      <Spacer size={`${bodyMargin}px`} type="horizontal" />
      <ProfileDescription>
        I'm a big techie, I love everything to do with new tech and software. I take pride in delivering my<br />
        products in the highest quality and ensuring that the products have the best user experience and<br />
        customer engagement. I am continuously in pursuit of improving myself and my work so that I bring<br />
        out the best in myself and the people I work with. I have worked in the IT industry for 7 years and<br />
        worked on a variety of technologies and projects. I love a challenge and I am quick to adapt and<br />
        evolve, see the bigger picture and solve problems for customers.<br />
        <Spacer size="64px" type="horizontal" />
        <Button onClick={() => ''}>Download Resume</Button>
        <Spacer size="64px" type="horizontal" />
      </ProfileDescription>
      <TechSection />
    </S.MainPageWrapper>
  )
}