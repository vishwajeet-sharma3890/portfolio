import { styled } from '../../../globalStyles';

export const ProjectPictureContainer = styled.div`
  ${props => `
    height: ${props.theme.body.sections.projects.image.height};
    width: ${props.theme.body.sections.projects.image.width};
  `}
`

export const ProjectPictureWrapper = styled.div`
  ${props => `
  position: relative;
    z-index: 1;
    width: 100%;
    padding-bottom: 120%;
    perspective: 1000px;
    transition: transform 0.35s;

    &:hover {
        transform: scale(1.2);
        z-index: 10;
    }
  `}
`;

export const ProjectPictureHoverWrapper = styled.div<{ backgroundImage: string }>`
  ${props => `
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: 100% 100%;
    box-shadow: ${props.theme.body.sections.projects.image.shadow};
    perspective-origin: 50% 50%;
    transform-style: preserve-3d;
    transform-origin: center;
    will-change: transform;
    transition: transform 0.1s, filter 0.35s, box-shadow: 0.3s;
    
    &:hover {
      transition: none;
      box-shadow: ${props.theme.body.sections.projects.image.shadowHover};
    }
    
  `}
`;

export const ProjectPictureGloss = styled.div`
  ${props => `
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 20em;
    height: 20em;
    margin-left: -6em;
    margin-top: -17em;
    background: radial-gradient(
      circle farthest-corner at 50% 50%,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.5) 33%,
      rgba(255, 255, 255, 0) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    
    will-change: transform;
    transition: opacity 0.21s ease-in-out;
    
  `}
`;