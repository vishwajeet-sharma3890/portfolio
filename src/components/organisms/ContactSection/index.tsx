import * as React from 'react';
import { useEffect, useState } from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { ContactForm } from '../../molecules/ContactForm';
import { Card } from '../../atoms/Card';
import Fade from 'react-reveal/Fade';
import { init } from 'emailjs-com';
import { getScreenSize, ScreenSize } from '../../../globalStyles/media';
import { ContactEmailDetails } from '../../molecules/ContactForm/types';
import smileyImg from '../../../images/smiley.png';
import backgroundImg from '../../../images/circuits.png';

export const ContactSection: React.FC = () => {

  // States
  const [isEmailInitialized, setEmailInitialized] = useState(false);
  const [emailSentTo, setEmailSentTo] = useState<ContactEmailDetails | null>(null);

  useEffect(() => {
    if (!isEmailInitialized) {
      // TODO : Use env
      init('user_0K3tMxpof1ZiC6lXQMaM9');
      setEmailInitialized(true);
    }
  });

  // Media query
  const screenSize: ScreenSize = getScreenSize();

  return (
    <S.ContactSectionWrapper>
      <S.ContactSectionBackgroundWrapper alt="contact-background" src={backgroundImg} />
      <S.ContactSectionContentWrapper screenSize={screenSize}>
        <Fade bottom>
          <Card cardStyle="contactCard">
            {
              emailSentTo ?
                <>
                  {
                    emailSentTo.email ?
                      <SectionHeader>Hey there! <span>{emailSentTo.name}<br /></span> So good to hear
                        from you<br /> I've
                        received your <span>message</span> <br /> and will get back to <br /> you
                        on <span>{emailSentTo.email}</span> as <br /> soon as I
                        can<br />Have a <span>nice day!</span><br /><img src={smileyImg} alt="smiley" /></SectionHeader>
                      :
                      <SectionHeader>Hey there! <span>{emailSentTo.name}, </span><br /> Thank you for
                        your <span>message</span> <br />Hope you have a <span>great day</span><br /><img src={smileyImg}
                                                                                                         alt="smiley" /></SectionHeader>
                  }
                </>
                :
                <>
                  <SectionHeader>Let's <span>connect</span> and <span>build</span><br /> something <span>beautiful</span> together</SectionHeader>
                  <ContactForm onEmailSent={(details) => setEmailSentTo(details)} />
                </>
            }
          </Card>
        </Fade>
      </S.ContactSectionContentWrapper>
    </S.ContactSectionWrapper>
  );
};