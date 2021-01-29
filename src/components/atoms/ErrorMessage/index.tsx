import * as React from 'react';
import * as S from './styles';

export const ErrorMessage: React.FC = ({ children }) => {
  return (
    <S.ErrorMessageWrapper>
      <S.ErrorMessageParagraph>
        {children}
      </S.ErrorMessageParagraph>
    </S.ErrorMessageWrapper>
  );
};