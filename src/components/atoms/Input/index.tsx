import * as React from 'react';
import * as S from './styles';
import { InputProps } from './types';
import { useState } from 'react';

export const Input: React.FC<InputProps> = ({ onChange, value, placeholder }) => {

  // States
  const [isActive, setActive] = useState(false)

  const handleChange = (e: any) => {
    setActive(Boolean(e.target.value))
    onChange(e)
  }

  return (
    <S.InputWrapper isActive={isActive} >
      <input placeholder={placeholder} value={value} onChange={handleChange} />
    </S.InputWrapper>
  );
};