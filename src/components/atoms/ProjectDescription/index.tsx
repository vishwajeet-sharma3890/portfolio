import * as React from "react"
import * as S from "./styles"
import {ProjectDescriptionProps} from "./types"
import { Spacer } from '../Spacer';
import { getScreenSize, ScreenSize } from '../../../globalStyles/media';

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({textAlign = "left", year, company, project, technology, link}) => {

  // Media query
  const screenSize: ScreenSize = getScreenSize()

  return (
    <S.ProjectDescriptionWrapper screenSize={screenSize} textAlign={textAlign}>
      <h6>{year}</h6>
      <h5>{company}</h5>
      <Spacer size="16px" type="horizontal" />
      <h3>{project}</h3>
      <Spacer size="16px" type="horizontal" />
      <ul>
        {
          technology.map((tech, index) => (
           <li key={`ProjectDescriptionWrapper${index}`}>
             {tech}
             <br />
           </li>
          ))
        }
      </ul>
      <a href={link} target="_blank">View website</a>
    </S.ProjectDescriptionWrapper>
  )
}