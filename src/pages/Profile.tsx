import type { TranslationType } from "../data/language";
import { Terminal, Mail} from 'lucide-react';
import { STYLES } from "../styles/theme";

interface profileProps {
  t: TranslationType['profile'];
};

export default function Profile({ t }: profileProps) {
  const experiences = t.experiences;

  const skillGroups = [
    {
      title: "Frontend",
      skills: ["WebSquare", "JavaScript", "Vue.js", "React", "TypeScript", "HTML5 / CSS3"]
    },
    {
      title: "Backend & DB",
      skills: ["Java", "Spring Boot", "MySQL", "MariaDB"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Vite", "Docker", "Git"]
    }
  ];

  return (
    <section className={STYLES.mainCard}>
      {/* 2단 가변 레이아웃 그리드 */}
      <div className={STYLES.profileGrid}>

        {/* 1. 왼쪽 컬럼 (인포, 기술 스택) */}
        <div className={STYLES.profileLeftCol}>

          {/* 타이틀 헤더 */}
          <div>
            <h1 className={STYLES.profileTitle}>{t.name}</h1>
            <p className={STYLES.profileRoleText}>Frontend Developer</p>
          </div>

          {/* Contact 카드 */}
          <div className={STYLES.contactCard}>
            <h3 className={STYLES.contactTitle}>CONTACT</h3>
            <div className={STYLES.contactList}>
              <a href="mailto:wbkim0522@gmail.com" className={STYLES.contactItem}>
                <Mail />
                <span>wbkim0522@gmail.com</span>
              </a>
              <a href="https://github.com/wbkim0522" target="_blank" rel="noreferrer" className={STYLES.contactItem}>
                <Terminal />
                <span>github.com/wbkim0522</span>
              </a>
            </div>
          </div>

          {/* Tech Stack */}
          <div className={STYLES.stackSection}>
            <h3 className={STYLES.stackTitle}>TECH STACK</h3>
            <div className={STYLES.stackGroupList}>
              {skillGroups.map((group, idx) => (
                <div key={idx} className={STYLES.stackGroup}>
                  <span className={STYLES.stackGroupTitle}>{group.title}</span>
                  <div className={STYLES.stackBadgeWrap}>
                    {group.skills.map((skill) => (
                      <span key={skill} className={STYLES.profileStackBadge}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 2. 오른쪽 컬럼 (타임라인 경력) */}
        <div className={STYLES.timelineCol}>
          <h2 className={STYLES.timelineTitle}>PROJECT EXPERIENCE</h2>

          <div className={STYLES.timelineWrap}>
            {/* 수직 타임라인 선 */}
            <div className={STYLES.timelineLine} />

            {experiences.map((exp, index) => (
              <div key={index} className={STYLES.timelineItem}>

                {/* 타임라인 도트 */}
                <div className={STYLES.timelineDotOuter}>
                  <div className={STYLES.timelineDotInner} />
                </div>

                {/* 프로젝트 타이틀 및 기간 */}
                <div className={STYLES.timelineHeader}>
                  <h3 className={STYLES.timelineItemTitle}>{exp.title}</h3>
                  <span className={STYLES.timelinePeriod}>{exp.period}</span>
                </div>

                {/* 역할 및 사용 스택 배지 */}
                <div className={STYLES.timelineMetaWrap}>
                  <span className={STYLES.timelineRole}>{exp.role}</span>
                  <div className={STYLES.timelineStackWrap}>
                    {exp.stack.map((s) => (
                      <span key={s} className={STYLES.timelineStackItem}>#{s}</span>
                    ))}
                  </div>
                </div>

                {/* 핵심 성과 및 업무 리스트 */}
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

        </div>

      </div>
    </section>
  );
}