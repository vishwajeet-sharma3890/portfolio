import * as React from 'react';
import { useState } from 'react';
import * as S from './styles';
import { Input } from '../../atoms/Input';
import { Spacer } from '../../atoms/Spacer';
import { Button } from '../../atoms/Button';
import { EmailJSResponseStatus, send } from 'emailjs-com';
import { TextArea } from '../../atoms/TextArea';

export const ContactForm: React.FC = () => {

  // States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle email response
  const handleSendEmailSuccess = (response: EmailJSResponseStatus) => {
    if (response.status === 200) {
      // TODO : Handle success
    }
    else {
      // TODO : Handle failure
    }
  };

  const handleSendEmailFailure = (reason: any) => {
    // TODO : Handle failure
  };

  const handleSendEmail = () => {
    if (name && email && message) {
      const templateParams = {
        name,
        email,
        message,
      };
      // TODO : Add to env
      //send('service_z1syw9z', 'template_foayx6l', templateParams).then(handleSendEmailSuccess, handleSendEmailFailure);
    } else {
      // TODO : Handle failure
    }
  };

  return (
    <S.ContactFormWrapper>
      <Input placeholder="May I know your name please?" onChange={(e) => setName(e.target.value)} value={name} />
      <Spacer size="16px" type="horizontal" />
      <Input placeholder="How can we get in touch (Email or Phone)" onChange={(e) => setEmail(e.target.value)}
             value={email} />
      <Spacer size="16px" type="horizontal" />
      <TextArea placeholder="Write something awesome here" onChange={(e) => setMessage(e.target.value)}
                value={message} />
      <Spacer size="16px" type="horizontal" />
      <Button buttonStyle="contact" onClick={handleSendEmail}>Send Message</Button>
    </S.ContactFormWrapper>
  );
};