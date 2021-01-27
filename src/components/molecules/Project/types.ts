import { ProjectDescriptionProps } from '../../atoms/ProjectDescription/types';

export type ProjectOrientation = 'left' | 'right'

export interface ProjectProps {
  projectImage: string
  description: ProjectDescriptionProps
  orientation: ProjectOrientation
}