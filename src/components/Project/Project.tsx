import { Clock, Wrench, AlertCircle, Search, Lightbulb, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';
import { STYLES } from "../../styles/theme";
import type { TranslationType } from '../../data/language';

// 프로젝트 구조 인터페이스
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
    const ts = t.troubleshooting;

    return (
        <section className={`${STYLES.mainCard} ${STYLES.projectPageContent}`}>

            {/* Header */}
            <div className={STYLES.projectHeaderSection}>
                <div className={STYLES.projectTitleRow}>
                    <div>
                        <h1 className={STYLES.projectTitle}>
                            {t.title}
                        </h1>
                        <p className={STYLES.projectRole}>
                            {t.role}
                        </p>
                    </div>

                    <span className={STYLES.projectPeriodBadge}>
                        <Clock size={14} className={STYLES.projectPeriodIcon} />
                        {t.period}
                    </span>
                </div>
            </div>

            {/* Content Split Layout */}
            <div className={STYLES.projectHeroSection}>

                {/* Left: Info Grid */}
                <div className={STYLES.projectContextCard}>
                    <div className={STYLES.projectInfoContent}>
                        <h3 className={STYLES.projectSecTitle}>
                            {labels.tasksTitle}
                        </h3>
                        <ul className={STYLES.projectTaskList}>
                            {t.tasks.map((task, idx) => (
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
                            {t.stack.map((s) => (
                                <span key={s} className={STYLES.projectStackBadge}>
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Picture Mockup */}
                <div className={STYLES.projectMockupCard}>
                    <div className={STYLES.projectMockupOverlay} />
                    <img
                        src={imgSrc}
                        alt="Project Showcase Desktop Frame"
                        className={STYLES.projectImgFixed}
                    />
                </div>
            </div>

            {/* Bottom: Troubleshooting */}
            <div className={STYLES.troubleSection}>
                <h3 className={STYLES.troubleSectionHeading}>
                    <Wrench size={20} className={STYLES.troubleSectionIcon} />
                    {labels.troubleTitle}
                </h3>

                <div className={STYLES.troubleGrid}>
                    {/* Problem */}
                    <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardProblem}`}>
                        <h4 className={`${STYLES.troubleCardHeader} ${STYLES.troubleTitleProblem}`}>
                            <span className={`${STYLES.troubleBadge} ${STYLES.troubleBadgeProblem}`}>1</span>
                            {labels.troubleProblem}
                            <AlertCircle size={14} className={STYLES.projectIconSecondary} />
                        </h4>
                        <p className={STYLES.troubleDesc}>{ts.problem}</p>
                    </div>

                    {/* Analysis */}
                    <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardAnalysis}`}>
                        <h4 className={`${STYLES.troubleCardHeader} ${STYLES.troubleTitleAnalysis}`}>
                            <span className={`${STYLES.troubleBadge} ${STYLES.troubleBadgeAnalysis}`}>2</span>
                            {labels.troubleAnalysis}
                            <Search size={14} className={STYLES.projectIconSecondary} />
                        </h4>
                        <p className={STYLES.troubleDesc}>{ts.analysis}</p>
                    </div>

                    {/* Solution */}
                    <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardSolution}`}>
                        <h4 className={`${STYLES.troubleCardHeader} ${STYLES.troubleTitleSolution}`}>
                            <span className={`${STYLES.troubleBadge} ${STYLES.troubleBadgeSolution}`}>3</span>
                            {labels.troubleSolution}
                            <Lightbulb size={14} className={STYLES.projectIconSecondary} />
                        </h4>
                        <p className={STYLES.troubleDesc}>{ts.solution}</p>
                    </div>

                    {/* Result */}
                    <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardResult}`}>
                        <h4 className={`${STYLES.troubleCardHeader} ${STYLES.troubleTitleResult}`}>
                            <span className={`${STYLES.troubleBadge} ${STYLES.troubleBadgeResult}`}>4</span>
                            {labels.troubleResult}
                            <CheckCircle2 size={14} className={STYLES.projectIconSecondary} />
                        </h4>
                        <p className={STYLES.troubleDesc}>{ts.result}</p>
                    </div>
                </div>
            </div>

        </section>
    );
}