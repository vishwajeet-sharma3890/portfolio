import {styled} from "../../../globalStyles";

export const ReviewCardWrapper = styled.div`
  ${props => `
    position: relative;
    max-width: ${props.theme.body.sections.review.card.maxWidth};
    margin: ${props.theme.body.sections.review.card.margin};
  `}
`

export const ReviewCardProfileWrapper = styled.div`
  ${props => `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 16px;
    z-index: ${props.theme.zIndex.review.content};
    position: relative;
  `}
`

export const ReviewCardIconWrapper = styled.div`
  ${props => `
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const ReviewCardOverlay = styled.img<{ isTop: boolean }>`
  ${props => `
    position: absolute;
    transform: rotate(${props.isTop ? `0` : `180`}deg);
    ${props.isTop ? `top: 0; left: 0;` : `bottom: 0; right: 0;`}
    height: ${props.theme.body.sections.review.card.overlay[props.isTop ? "top" : "bottom"].size};
    z-index: ${props.theme.zIndex.review.overlay};
  `}
`