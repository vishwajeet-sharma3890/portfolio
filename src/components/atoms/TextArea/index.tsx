import * as React from 'react';
import * as S from './styles';
import { TextAreaProps } from './types';
import { useState } from 'react';

export const TextArea: React.FC<TextAreaProps> = ({ onChange, value, placeholder }) => {

  // States
  const [isActive, setActive] = useState(false)

  const handleChange = (e: any) => {
    setActive(Boolean(e.target.value))
    onChange(e)
  }

  return (
    <S.TextAreaWrapper isActive={isActive}>
      <textarea placeholder={placeholder} value={value} onChange={handleChange} />
    </S.TextAreaWrapper>
  );
};