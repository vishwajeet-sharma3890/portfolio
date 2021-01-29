import * as React from 'react';
import { ChangeEvent, useState } from 'react';
import * as S from './styles';
import { Input } from '../../atoms/Input';
import { Spacer } from '../../atoms/Spacer';
import { Button } from '../../atoms/Button';
import { EmailJSResponseStatus, send } from 'emailjs-com';
import { TextArea } from '../../atoms/TextArea';
import { ErrorMessage } from '../../atoms/ErrorMessage';
import { ContactFormProps } from './types';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID } from '../../../utils/env';

export const ContactForm: React.FC<ContactFormProps> = ({ onEmailSent }) => {

  // States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendingMail, setSendingMail] = useState(false)
  const [errorFields, setErrorFields] = useState<string[]>([])

  // Function to handle email response
  const handleSendEmailSuccess = (response: EmailJSResponseStatus) => {
    // TODO : Track this event
    if (response.status === 200) {
      onEmailSent({ name, email })
    }
    else {
      handleSendEmailFailure(null)
    }
    setSendingMail(false)
  };

  const handleSendEmailFailure = (reason: any) => {
    const newErrorFields: string[] = []
    // TODO : Track this event
    if (reason) {
      newErrorFields.push(`Uh oh!, I was not able to receive your message because ${reason}, Please try again or email me at work.vishwajeetsharma@gmail.com`)
    }
    else {
      newErrorFields.push("Uh oh!, I was not able to receive your message, Please try again or email me at work.vishwajeetsharma@gmail.com")
    }
    setErrorFields(newErrorFields)
    setSendingMail(false)
  };

  const handleSendEmail = () => {
    if (name && message) {
      const templateParams = {
        name,
        email,
        message,
      };
      
      if (EMAIL_JS_SERVICE_ID && EMAIL_JS_TEMPLATE_ID) {
        setSendingMail(true)
        send(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, templateParams).then(handleSendEmailSuccess, handleSendEmailFailure);
      }
      else {
        // TODO : Track event
        console.error('Email JS params not present in ENV')
      }
    } else {
      const newErrorFields: string[] = []
      if (!name) {
        newErrorFields.push('name')
      }
      if (!message) {
        newErrorFields.push('message')
      }
      setErrorFields(newErrorFields)
    }
  };

  const getErrorMessage = () => {
    if (!name) {
      return "Don't stay anonymous, I'd love to know your name :)"
    }
    if (!message) {
      return "Aw shucks! you forgot to type the message you are trying to send me"
    }
    return ''
  }

  const handleNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newErrorFields = errorFields.filter((error) => {
      return error !== "name"
    })
    setErrorFields(newErrorFields)
    setName(e.target.value)
  }

  const handleMessageInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newErrorFields = errorFields.filter((error) => {
      return error !== "message"
    })
    setErrorFields(newErrorFields)
    setMessage(e.target.value)
  }

  return (
    <S.ContactFormWrapper>
      <Input placeholder="May I know your name please?" onChange={handleNameInputChange} value={name} error={errorFields.includes("name")} />
      <Spacer size="16px" type="horizontal" />
      <Input placeholder="How can we get in touch (Email or Phone)" onChange={(e) => setEmail(e.target.value)}
             value={email} error={errorFields.includes("email")}  />
      <Spacer size="16px" type="horizontal" />
      <TextArea placeholder="Write something awesome here" onChange={handleMessageInputChange}
                value={message} error={errorFields.includes("message")}  />
      <Spacer size="16px" type="horizontal" />
      <Button disabled={errorFields.length > 0 || sendingMail} buttonStyle="contact" onClick={handleSendEmail}>Send Message</Button>
      {errorFields.length > 0 && <S.ErrorMessageWrapper><ErrorMessage>{getErrorMessage()}</ErrorMessage></S.ErrorMessageWrapper>}
    </S.ContactFormWrapper>
  );
};