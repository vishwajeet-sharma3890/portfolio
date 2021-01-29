import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { Spacer } from '../../atoms/Spacer';
import { ContactForm } from '../../molecules/ContactForm';
import { Card } from '../../atoms/Card';
import Fade from 'react-reveal/Fade';
import { useEffect, useState } from 'react';
import{ init } from 'emailjs-com';
import { getScreenSize, ScreenSize } from '../../../globalStyles/media';

export const ContactSection: React.FC = () => {

  // States
  const [isEmailInitialized, setEmailInitialized] = useState(false)

  useEffect(() => {
    if (!isEmailInitialized) {
      // TODO : Use env
      init("user_0K3tMxpof1ZiC6lXQMaM9");
      setEmailInitialized(true)
    }
  })

  // Media query
  const screenSize: ScreenSize = getScreenSize();

  return (
    <S.ContactSectionWrapper>
      <S.ContactSectionContentWrapper screenSize={screenSize}>
        <Fade bottom>
          <Card cardStyle="contactCard">
            <SectionHeader>Let's <span>connect</span> and <span>build</span><br /> something <span>beautiful</span> together</SectionHeader>
            <ContactForm />
          </Card>
        </Fade>
      </S.ContactSectionContentWrapper>
    </S.ContactSectionWrapper>
  );
};