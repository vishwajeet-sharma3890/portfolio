import * as React from "react"
import * as S from "./styles"
import {ProfilePicture} from "../../atoms/ProfilePicture"
import profileImage from "../../../images/profile.svg"
import {Card} from "../../atoms/Card";
import {ProfileName} from "../../atoms/ProfileName";
import {Divider} from "../../atoms/Divider";
import {ProfileAttributes} from "../../molecules/ProfileAttributes";
import {ProfileAttributeProps} from "../../atoms/ProfileAttribute/types";
import {ProfileIcons} from "../../molecules/ProfileIcons";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Spacer} from "../../atoms/Spacer";
import {IconButtonProps} from "../../atoms/IconButton/types";
import { getScreenSize, isMobileScreen, isTabletScreen, ScreenSize } from '../../../globalStyles/media';

const attributes: ProfileAttributeProps[] = [
  {
    label: "Age",
    value: "30",
  },
  {
    label: "City",
    value: "Sarina, Queensland",
  },
  {
    label: "Email",
    value: "work.vishwajeetsharma@gmail.com",
  },
]

export const icons: IconButtonProps[] = [
  {
    icon: faGithub,
    link: "https://github.com/vishwajeet-sharma3890",
  },
  {
    icon: faFacebook,
    link: "https://www.facebook.com/vishu3",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/vish-sharma/",
  },
]

export const ProfileCard: React.FC = () => {

  // Media query
  const screenSize: ScreenSize = getScreenSize()
  let profilePictureSize = "255px"
  if (isMobileScreen(screenSize)) {
    profilePictureSize = "125px"
  }
  else if (isTabletScreen(screenSize)) {
    profilePictureSize = "175px"
  }
  else if (screenSize as string === "largedesktop") {
    profilePictureSize = "375px"
  }
  return (
    <Card cardStyle="profileCard">
      <S.ProfileCardWrapper screenSize={screenSize}>
        <ProfilePicture size={profilePictureSize} pictureUrl={profileImage}/>
        <S.ProfileCardDetailsWrapper>
          <ProfileName name="Vish Sharma" position="Web and Mobile App Developer"/>
          <Divider size="2px" type="horizontal" margin="32px 0"/>
          <ProfileAttributes attributes={attributes}/>
        </S.ProfileCardDetailsWrapper>
      </S.ProfileCardWrapper>
      <Spacer size="56px" type="horizontal"/>
      <ProfileIcons icons={icons}/>
    </Card>
  )
}