import { styled } from '../../../globalStyles';

export const ErrorMessageWrapper = styled.div`
  ${props => `
      
    `
}
`;

export const ErrorMessageParagraph = styled.p`
  ${props => `
      color: ${props.theme.error.color};
      font-size: ${props.theme.error.fontSize};
      font-weight: ${props.theme.error.fontWeight};
    `
}
`;