import { STYLES } from '../../styles/theme';

interface SkillGroup {
  title: string;
  skills: string[];
}

interface ProfileSkillGroupsProps {
  skillGroups: SkillGroup[];
}

export function ProfileSkillGroups({ skillGroups }: ProfileSkillGroupsProps) {
  return (
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
  );
}
