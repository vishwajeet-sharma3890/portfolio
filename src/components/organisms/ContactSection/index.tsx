import * as React from 'react';
import * as S from './styles';
import { SectionHeader } from '../../atoms/SectionHeader';
import { Spacer } from '../../atoms/Spacer';

export const ContactSection: React.FC = () => {
  return (
    <S.ContactSectionWrapper>
      <SectionHeader>Let's <span>connect</span> and <span>build</span> something <span>beautiful</span> together</SectionHeader>
      <Spacer size="64px" type="horizontal" />
    </S.ContactSectionWrapper>
  );
};