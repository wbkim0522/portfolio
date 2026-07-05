import type { TranslationType } from '../../data/language';
import { STYLES } from '../../styles/theme';
import { ExperienceTimeline } from '../../components/profile/ExperienceTimeline';
import { ProfileContactCard } from '../../components/profile/ProfileContactCard';
import { ProfileSkillGroups } from '../../components/profile/ProfileSkillGroups';
import { profileMock } from '../../mocks/profile';

interface ProfileProps {
  t: TranslationType['profileData'];
}

export default function ProfileFeature({ t }: ProfileProps) {
  const experiences = t.experiences;
  const skillGroups = profileMock.skillGroups;

  return (
    <section className={STYLES.mainCard}>
      <div className={STYLES.profileGrid}>
        <div className={STYLES.profileLeftCol}>
          <div>
            <h1 className={STYLES.profileTitle}>{t.name}</h1>
            <p className={STYLES.profileRoleText}>{profileMock.role}</p>
          </div>

          <ProfileContactCard />
          <ProfileSkillGroups skillGroups={skillGroups} />
        </div>

        <div className={STYLES.timelineCol}>
          <h2 className={STYLES.timelineTitle}>{profileMock.experienceTitle}</h2>
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
}
