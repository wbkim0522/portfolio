import { STYLES } from '../../styles/theme';
import type { TranslationType } from '../../data/language';
import { ProjectHeader } from '../../components/Project/ProjectHeader';
import { ProjectInfoCard } from '../../components/Project/ProjectInfoCard';
import { ProjectImageCard } from '../../components/Project/ProjectImageCard';
import { TroubleshootingSection } from '../../components/Project/TroubleshootingSection';

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

interface ProjectFeatureProps {
  t: ProjectData;
  labels: TranslationType['projectLabels'];
  imgSrc: string;
}

export default function ProjectFeature({ t, labels, imgSrc }: ProjectFeatureProps) {
  return (
    <section className={`${STYLES.mainCard} ${STYLES.projectPageContent}`}>
      <ProjectHeader title={t.title} role={t.role} period={t.period} />

      <div className={STYLES.projectHeroSection}>
        <ProjectInfoCard labels={labels} tasks={t.tasks} stack={t.stack} />
        <ProjectImageCard imgSrc={imgSrc} />
      </div>

      <TroubleshootingSection labels={labels} troubleshooting={t.troubleshooting} />
    </section>
  );
}
