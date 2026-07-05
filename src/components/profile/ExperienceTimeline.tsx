import { STYLES } from '../../styles/theme';
import type { TranslationType } from '../../data/language';

interface ExperienceTimelineProps {
  experiences: TranslationType['profileData']['experiences'];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className={STYLES.timelineWrap}>
      <div className={STYLES.timelineLine} />

      {experiences.map((exp, index) => (
        <div key={index} className={STYLES.timelineItem}>
          <div className={STYLES.timelineDotOuter}>
            <div className={STYLES.timelineDotInner} />
          </div>

          <div className={STYLES.timelineHeader}>
            <h3 className={STYLES.timelineItemTitle}>{exp.title}</h3>
            <span className={STYLES.timelinePeriod}>{exp.period}</span>
          </div>

          <div className={STYLES.timelineMetaWrap}>
            <span className={STYLES.timelineRole}>{exp.role}</span>
            <div className={STYLES.timelineStackWrap}>
              {exp.stack.map((s) => (
                <span key={s} className={STYLES.timelineStackItem}>#{s}</span>
              ))}
            </div>
          </div>

          <ul className={STYLES.timelineTaskList}>
            {exp.tasks.map((task, tIdx) => (
              <li key={tIdx} className={STYLES.timelineTaskItem}>
                <span className={STYLES.timelineTaskBullet}>•</span>
                <span>{task}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
