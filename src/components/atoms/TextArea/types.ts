import { ChangeEventHandler } from 'react';

export interface TextAreaProps {
  placeholder: string
  value: string
  onChange: ChangeEventHandler<HTMLTextAreaElement>
}