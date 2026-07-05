import type { TranslationType } from "../data/language";
import ProfileFeature from "../features/profile/ProfileFeature";

interface profileProps {
  t: TranslationType['profileData'];
}

export default function Profile({ t }: profileProps) {
  return <ProfileFeature t={t} />;
}