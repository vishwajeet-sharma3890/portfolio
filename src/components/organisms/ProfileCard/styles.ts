import { styled } from '../../../globalStyles';

export const ProfileCardWrapper = styled.div`
  ${props => `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    grid-gap: 5.625vw;
    max-width: 720px;
  `}
`;

export const ProfileCardDetailsWrapper = styled.div`
  ${props => `
    margin: auto;
  `}
`;