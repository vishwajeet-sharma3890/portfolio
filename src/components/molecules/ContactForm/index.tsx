import * as React from 'react';
import * as S from './styles';
import { Input } from '../../atoms/Input';
import { Spacer } from '../../atoms/Spacer';
import { Button } from '../../atoms/Button';

export const ContactForm: React.FC = () => {
  return (
    <S.ContactFormWrapper>
      <Input placeholder="May I know your name please?" onChange={() => ''} />
      <Spacer size="16px" type="horizontal" />
      <Input placeholder="How can we get in touch (Email or Phone)" onChange={() => ''} />
      <Spacer size="16px" type="horizontal" />
      <Input inputType="textarea" placeholder="Write something awesome here" onChange={() => ''} />
      <Spacer size="16px" type="horizontal" />
      <Button buttonStyle="contact" onClick={() => ''}>Send Message</Button>
    </S.ContactFormWrapper>
  );
};