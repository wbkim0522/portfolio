import ProjectFeature from '../features/project/ProjectFeature';
import type { TranslationType } from '../data/language';

export interface ProjectData {
  title: string;
  period: string;
  role: string;
  stack: readonly string[];
  tasks: readonly string[];
  troubleshooting: {
    problem: string;
    analysis: string;
    solution: string;
    result: string;
  };
}

interface ProjectProps {
  t: ProjectData;
  labels: TranslationType['projectLabels'];
  imgSrc: string;
}

export default function Project({ t, labels, imgSrc }: ProjectProps) {
  return <ProjectFeature t={t} labels={labels} imgSrc={imgSrc} />;
}
