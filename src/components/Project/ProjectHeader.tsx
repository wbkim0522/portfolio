import { Clock } from 'lucide-react';
import { STYLES } from '../../styles/theme';

interface ProjectHeaderProps {
  title: string;
  role: string;
  period: string;
}

export function ProjectHeader({ title, role, period }: ProjectHeaderProps) {
  return (
    <div className={STYLES.projectHeaderSection}>
      <div className={STYLES.projectTitleRow}>
        <div>
          <h1 className={STYLES.projectTitle}>{title}</h1>
          <p className={STYLES.projectRole}>{role}</p>
        </div>

        <span className={STYLES.projectPeriodBadge}>
          <Clock size={14} className={STYLES.projectPeriodIcon} />
          {period}
        </span>
      </div>
    </div>
  );
}
