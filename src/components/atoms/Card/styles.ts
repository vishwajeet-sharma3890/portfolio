import {styled} from "../../../globalStyles";

export const CardWrapper = styled.div`
  ${props => `
    background: ${props.theme.card.profileCard.background};
    height: ${props.theme.card.profileCard.height};
    width: ${props.theme.card.profileCard.width};
    padding: ${props.theme.card.profileCard.padding};
    box-shadow: ${props.theme.card.profileCard.shadow};
  `}
`