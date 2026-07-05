import { ChevronRight, Cpu } from 'lucide-react';
import { STYLES } from '../../styles/theme';

interface ProjectInfoCardProps {
  labels: {
    tasksTitle: string;
    techStackTitle: string;
  };
  tasks: readonly string[];
  stack: readonly string[];
}

export function ProjectInfoCard({ labels, tasks, stack }: ProjectInfoCardProps) {
  return (
    <div className={STYLES.projectContextCard}>
      <div className={STYLES.projectInfoContent}>
        <h3 className={STYLES.projectSecTitle}>{labels.tasksTitle}</h3>
        <ul className={STYLES.projectTaskList}>
          {tasks.map((task, idx) => (
            <li key={idx} className={STYLES.projectTaskItem}>
              <ChevronRight size={15} className={STYLES.projectTaskIcon} />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={STYLES.projectTechContent}>
        <h4 className={STYLES.projectTechHeading}>
          <Cpu size={12} className={STYLES.projectIconPrimary} />
          {labels.techStackTitle}
        </h4>

        <div className={STYLES.projectStackWrap}>
          {stack.map((s) => (
            <span key={s} className={STYLES.projectStackBadge}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
