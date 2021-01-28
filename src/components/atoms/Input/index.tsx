import * as React from 'react';
import * as S from './styles';
import { InputProps } from './types';

export const Input: React.FC<InputProps> = ({ placeholder, inputType = "input" }) => {
  return (
    <S.InputWrapper inputType={inputType}>
      {inputType === "input" ? <input placeholder={placeholder} /> : <textarea placeholder={placeholder} />}
    </S.InputWrapper>
  );
};