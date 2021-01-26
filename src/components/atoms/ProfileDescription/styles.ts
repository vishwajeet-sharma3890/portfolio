import {styled} from "../../../globalStyles";

export const ProfileDescriptionWrapper = styled.div`
  ${props => `
    
    color: ${props.theme.body.description.color};
    font-size: ${props.theme.body.description.fontSize};
    font-weight: ${props.theme.body.description.fontWeight};
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    margin: auto;
    
    p {
      line-height: 32px;
    }
    
  `}
`