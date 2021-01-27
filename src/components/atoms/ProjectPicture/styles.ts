import {styled} from "../../../globalStyles";

export const ProjectPictureWrapper = styled.div`
  ${props => `
    img {
      height: ${props.theme.body.sections.projects.image.height};
    }
  `}
`