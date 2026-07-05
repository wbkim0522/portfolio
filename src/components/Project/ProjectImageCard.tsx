import { STYLES } from '../../styles/theme';

interface ProjectImageCardProps {
  imgSrc: string;
}

export function ProjectImageCard({ imgSrc }: ProjectImageCardProps) {
  return (
    <div className={STYLES.projectMockupCard}>
      <div className={STYLES.projectMockupOverlay} />
      <img
        src={imgSrc}
        alt="Project Showcase Desktop Frame"
        className={STYLES.projectImgFixed}
      />
    </div>
  );
}
