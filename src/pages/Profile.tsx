import type { TranslationType } from "../data/language";
import { STYLES } from "../styles/theme";

const GithubIcon = () => (
  <svg className={STYLES.contactIcon} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);

const MailIcon = () => (
  <svg className={STYLES.contactIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

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
      skills: ["Java", "Spring Boot", "MySQL", "MariaDB", "PostgreSQL"]
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
                <MailIcon />
                <span>wbkim0522@gmail.com</span>
              </a>
              <a href="https://github.com/wbkim0522" target="_blank" rel="noreferrer" className={STYLES.contactItem}>
                <GithubIcon />
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