import { Mail, Terminal } from 'lucide-react';
import { STYLES } from '../../styles/theme';
import { profileMock } from '../../mocks/profile';

export function ProfileContactCard() {
  return (
    <div className={STYLES.contactCard}>
      <h3 className={STYLES.contactTitle}>CONTACT</h3>
      <div className={STYLES.contactList}>
        <a href={`mailto:${profileMock.contact.email}`} className={STYLES.contactItem}>
          <Mail />
          <span>{profileMock.contact.email}</span>
        </a>
        <a href={`https://github.com/${profileMock.contact.github.replace('github.com/', '')}`} target="_blank" rel="noreferrer" className={STYLES.contactItem}>
          <Terminal />
          <span>{profileMock.contact.github}</span>
        </a>
      </div>
    </div>
  );
}
