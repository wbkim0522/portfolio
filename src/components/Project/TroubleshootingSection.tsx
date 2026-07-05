import { AlertCircle, CheckCircle2, Lightbulb, Search, Wrench } from 'lucide-react';
import { STYLES } from '../../styles/theme';

interface TroubleshootingSectionProps {
  labels: {
    troubleTitle: string;
    troubleProblem: string;
    troubleAnalysis: string;
    troubleSolution: string;
    troubleResult: string;
  };
  troubleshooting: {
    problem: string;
    analysis: string;
    solution: string;
    result: string;
  };
}

export function TroubleshootingSection({ labels, troubleshooting }: TroubleshootingSectionProps) {
  return (
    <div className={STYLES.troubleSection}>
      <h3 className={STYLES.troubleSectionHeading}>
        <Wrench size={20} className={STYLES.troubleSectionIcon} />
        {labels.troubleTitle}
      </h3>

      <div className={STYLES.troubleGrid}>
        <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardProblem}`}>
          <h4 className={`${STYLES.troubleCardHeader} ${STYLES.troubleTitleProblem}`}>
            <span className={`${STYLES.troubleBadge} ${STYLES.troubleBadgeProblem}`}>1</span>
            {labels.troubleProblem}
            <AlertCircle size={14} className={STYLES.projectIconSecondary} />
          </h4>
          <p className={STYLES.troubleDesc}>{troubleshooting.problem}</p>
        </div>

        <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardAnalysis}`}>
          <h4 className={`${STYLES.troubleCardHeader} ${STYLES.troubleTitleAnalysis}`}>
            <span className={`${STYLES.troubleBadge} ${STYLES.troubleBadgeAnalysis}`}>2</span>
            {labels.troubleAnalysis}
            <Search size={14} className={STYLES.projectIconSecondary} />
          </h4>
          <p className={STYLES.troubleDesc}>{troubleshooting.analysis}</p>
        </div>

        <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardSolution}`}>
          <h4 className={`${STYLES.troubleCardHeader} ${STYLES.troubleTitleSolution}`}>
            <span className={`${STYLES.troubleBadge} ${STYLES.troubleBadgeSolution}`}>3</span>
            {labels.troubleSolution}
            <Lightbulb size={14} className={STYLES.projectIconSecondary} />
          </h4>
          <p className={STYLES.troubleDesc}>{troubleshooting.solution}</p>
        </div>

        <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardResult}`}>
          <h4 className={`${STYLES.troubleCardHeader} ${STYLES.troubleTitleResult}`}>
            <span className={`${STYLES.troubleBadge} ${STYLES.troubleBadgeResult}`}>4</span>
            {labels.troubleResult}
            <CheckCircle2 size={14} className={STYLES.projectIconSecondary} />
          </h4>
          <p className={STYLES.troubleDesc}>{troubleshooting.result}</p>
        </div>
      </div>
    </div>
  );
}
