import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { LANGUAGE, type LanguageType } from "./data/language";
import { Navigate, Route, Routes } from "react-router";
import { STYLES } from "./styles/theme";
import ProfileFeature from "./features/profile/ProfileFeature";
import ProjectFeature from "./features/project/ProjectFeature";
import dongwonImg from "./assets/dongwon_mok.svg";
import samsungImg from "./assets/samsung_mok.svg";
import lehuaImg from "./assets/lehua_mok.svg";
import Error from "./pages/Error";

export default function App() {

  const [lang, setLang] = useState<LanguageType>(() => {
    return navigator.languages[0] === 'ja' ? 'ja' : 'ko';
  });
  const [theme, setTheme] = useState('');
  const text = LANGUAGE[lang];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div className={STYLES.wrapper}>

      <Navigation
        t={text}
        lang={lang} setLang={setLang}
        theme={theme} setTheme={setTheme}
      />

      <main className={STYLES.main}>
        <Routes>
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/profile" element={<ProfileFeature t={text.profileData} />} />
          <Route path="/project" >
            <Route index element={<Navigate to="dongwon" replace />} />
            <Route path="dongwon" element={<ProjectFeature t={text.project1} labels={text.projectLabels} imgSrc={dongwonImg} />} />
            <Route path="samsung" element={<ProjectFeature t={text.project2} labels={text.projectLabels} imgSrc={samsungImg} />} />
            <Route path="solution" element={<ProjectFeature t={text.project3} labels={text.projectLabels} imgSrc={lehuaImg} />} />
          </Route>
          <Route path="*" element={<Error t={text.errorMsg} />} />
        </Routes>
      </main>

    </div>
  );
}