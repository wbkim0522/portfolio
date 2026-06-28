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
        <section className={`${STYLES.mainCard} flex flex-col gap-6 lg:gap-8`}>

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
                        <Clock size={14} className="text-neutral-400 dark:text-neutral-500" />
                        {t.period}
                    </span>
                </div>
            </div>

            {/* Content Split Layout */}
            <div className={STYLES.projectHeroSection}>

                {/* Left: Info Grid */}
                <div className={STYLES.projectContextCard}>
                    <div className="flex flex-col gap-3">
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

                    <div className="flex flex-col gap-2.5 pt-4 border-t border-neutral-100 dark:border-neutral-800/40 mt-auto">
                        <h4 className="text-xs font-black text-neutral-400 dark:text-neutral-50 tracking-wider uppercase flex items-center gap-1.5">
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
                <h3 className="text-lg font-black text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                    <Wrench size={20} className="text-neutral-700 dark:text-neutral-300" />
                    {labels.troubleTitle}
                </h3>

                <div className={STYLES.troubleGrid}>
                    {/* Problem */}
                    <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardProblem}`}>
                        <h4 className={`${STYLES.troubleCardHeader} text-rose-600 dark:text-rose-400`}>
                            <span className={`${STYLES.troubleBadge} bg-rose-100 dark:bg-rose-900/50`}>1</span>
                            {labels.troubleProblem}
                            <AlertCircle size={14} className={STYLES.projectIconSecondary} />
                        </h4>
                        <p className={STYLES.troubleDesc}>{ts.problem}</p>
                    </div>

                    {/* Analysis */}
                    <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardAnalysis}`}>
                        <h4 className={`${STYLES.troubleCardHeader} text-amber-600 dark:text-amber-400`}>
                            <span className={`${STYLES.troubleBadge} bg-amber-100 dark:bg-amber-900/50`}>2</span>
                            {labels.troubleAnalysis}
                            <Search size={14} className={STYLES.projectIconSecondary} />
                        </h4>
                        <p className={STYLES.troubleDesc}>{ts.analysis}</p>
                    </div>

                    {/* Solution */}
                    <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardSolution}`}>
                        <h4 className={`${STYLES.troubleCardHeader} text-indigo-600 dark:text-indigo-400`}>
                            <span className={`${STYLES.troubleBadge} bg-indigo-100 dark:bg-indigo-900/50`}>3</span>
                            {labels.troubleSolution}
                            <Lightbulb size={14} className={STYLES.projectIconSecondary} />
                        </h4>
                        <p className={STYLES.troubleDesc}>{ts.solution}</p>
                    </div>

                    {/* Result */}
                    <div className={`${STYLES.troubleCardCommon} ${STYLES.troubleCardResult}`}>
                        <h4 className={`${STYLES.troubleCardHeader} text-emerald-600 dark:text-emerald-400`}>
                            <span className={`${STYLES.troubleBadge} bg-emerald-100 dark:bg-emerald-900/50`}>4</span>
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