import { TextAlign } from '../../../globalStyles/media';

export interface ProjectDescriptionProps {
  year: string;
  company: string;
  project: string;
  technology: string[];
  link: string;
  textAlign?: TextAlign;
}