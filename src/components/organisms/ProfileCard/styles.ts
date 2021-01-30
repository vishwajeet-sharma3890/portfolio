import { styled } from '../../../globalStyles';
import { ScreenSize } from '../../../globalStyles/media';

export const ProfileCardWrapper = styled.div<{ screenSize: ScreenSize }>`
  ${props => `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    grid-gap: 5.625vw;
    max-width: ${props.theme.banner.profile.maxWidth[props.screenSize]};
  `}
`;

export const ProfileCardDetailsWrapper = styled.div`
  ${props => `
    margin: auto;
  `}
`;