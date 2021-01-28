import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { Spacer } from '../../atoms/Spacer';
import { ContactForm } from '../../molecules/ContactForm';
import { Card } from '../../atoms/Card';
import Fade from 'react-reveal/Fade';

export const ContactSection: React.FC = () => {
  return (
    <S.ContactSectionWrapper>
      <S.ContactSectionContentWrapper>
        <Fade bottom>
          <Card cardStyle="profileCard">
            <SectionHeader>Let's <span>connect</span> and <span>build</span><br /> something <span>beautiful</span> together</SectionHeader>
            <Spacer size="32px" type="horizontal" />
            <ContactForm />
          </Card>
        </Fade>
      </S.ContactSectionContentWrapper>
    </S.ContactSectionWrapper>
  );
};