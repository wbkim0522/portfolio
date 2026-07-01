import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { LANGUAGE, type LanguageType } from "./data/language";
import { STYLES } from "./styles/theme";
import Profile from "./pages/Profile";
import Project from "./components/Project/Project";
import dongwonImg from "./assets/dongwon_mok.svg";
import samsungImg from "./assets/samsung_mok.svg";

export default function App() {

  const [lang, setLang] = useState<LanguageType>(() => { 
    return  navigator.languages[0] === 'ja' ? 'ja' : 'ko';
  });
  const [theme, setTheme] = useState('light');
  const [activeMenu, setActiveMenu] = useState<number>(0);
  const text = LANGUAGE[lang];

  // 다크 모드
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // 탭 이벤트
  const renderContent = () => {
    return (
      <>
        <div className={activeMenu === 0 ? "lg:h-full" : "hidden"}>
          <Profile t={text.profile} />
        </div>
        <div className={activeMenu === 1 ? "lg:h-full" : "hidden"}>
          <Project t={text.project1} labels={text.projectLabels} imgSrc={dongwonImg} />
        </div>
        <div className={activeMenu === 2 ? "lg:h-full" : "hidden"}>
          <Project t={text.project2} labels={text.projectLabels} imgSrc={samsungImg} />
        </div>
      </>
    );
  };

  return (
    <div className={STYLES.wrapper}>
      <Navigation
        t={text}
        lang={lang} setLang={setLang}
        activeMenu={activeMenu} setActiveMenu={setActiveMenu}
        theme={theme} setTheme={setTheme}
      />

      <main className={STYLES.main}>
        {renderContent()}
      </main>

    </div>
  );
}