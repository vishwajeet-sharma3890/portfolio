import {styled} from "../../../globalStyles";

export const TechImagesWrapper = styled.div`
  ${props => `
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    grid-gap: 32px;
  `}
`

export const TechImagesAnimationWrapper = styled.div<{ opacity: number }>`
  ${props => `
    opacity: ${props.opacity};
    -webkit-transition: opacity 0.5s ease;
    transition: opacity 0.5s ease;
  `}
`