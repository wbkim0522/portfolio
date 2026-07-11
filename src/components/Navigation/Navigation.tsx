import { useState } from 'react';
import type { LanguageType, TranslationType } from '../../data/language';
import { STYLES } from '../../styles/theme'
import { Sun, Moon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router';

interface navigationProps {
  lang: LanguageType;
  setLang: (lang: LanguageType) => void;
  theme: string;
  setTheme: (theme: string) => void;
  t: TranslationType;
};

export const Navigation = ({
  t,
  lang, setLang,
  theme, setTheme
}: navigationProps) => {

  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={`${STYLES.nav} ${isOpen ? 'rounded-b-none! border-b-0! shadow-none!' : ''}`}>
      {/* 헤더영역 */}
      <div className={STYLES.navHeader}>
        {/* 로고 및 타이틀 */}
        <div className={STYLES.navLogoWrap}>
          <button className={STYLES.logoBtn}>K</button>
          <p className={STYLES.profileName}>{t.titleName}</p>
        </div>

        {/* 모바일 용 메뉴버튼 */}
        <button
          onClick={() => setOpen(!isOpen)}
          className={STYLES.menuButton}
        >
          <svg className={STYLES.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              // 닫기(X) 아이콘
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // 햄버거(☰) 아이콘
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 메뉴 (모바일: nav 하단에 겹쳐 뜨는 플로팅 패널 / 데스크탑: 사이드바 flex 컬럼의 일부) */}
      <div className={`${STYLES.menuCollapse} ${isOpen ? STYLES.menuCollapseOpen : STYLES.menuCollapseClosed}`}>
        <div className={STYLES.menuInner}>

          {/* 메뉴 */}
          <ul className={STYLES.menuNavList}>
            {Object.entries(t.nav).map(([key, value]) => {
              const targetPath = `/${key}`
              const isActive = location.pathname === targetPath;

              return (
                <li key={key}
                  onClick={() => {
                    navigate(targetPath);
                    setOpen(false)
                  }}
                  className={`${STYLES.menuItem} ${isActive ? STYLES.menuActive : ''}`}
                >
                  <span>{value}</span>
                </li>
              )
            })}
          </ul>

          {/* 기능 그룹 */}
          <div className={STYLES.funcGroup}>
            {/* 언어 선택 */}
            <div className={STYLES.funcBox}>
              <span className={STYLES.funcTitle}>LANGUAGE</span>
              <div className={STYLES.switchBar}>
                <button
                  onClick={() => setLang('ko')}
                  className={lang === 'ko' ? STYLES.switchBtnActive : STYLES.switchBtnInactive}>
                  KR
                </button>
                <button
                  onClick={() => setLang('ja')}
                  className={lang === 'ja' ? STYLES.switchBtnActive : STYLES.switchBtnInactive}>
                  JP
                </button>
              </div>
            </div>

            {/* 다크 모드 */}
            <div className={STYLES.funcBox}>
              <span className={STYLES.funcTitle}>THEME</span>
              <div className={STYLES.switchBar}>
                <button
                  onClick={() => setTheme('')}
                  className={theme === '' ? STYLES.switchBtnActive : STYLES.switchBtnInactive}>
                  <Sun size={14} className={STYLES.themeIcon} />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={theme === 'dark' ? STYLES.switchBtnActive : STYLES.switchBtnInactive}>
                  <Moon size={14} className={STYLES.themeIcon} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

    </nav>
  )
}
