# KIMWONBIN Portfolio

🇯🇵 [日本語](#日本語) ｜ 🇰🇷 [한국어](#한국어)

**Live Demo:** https://wbkim0522.github.io/portfolio/

---

## 日本語

WebSquareベースのエンタープライズレガシー画面転換実務（金融・物流ドメイン）を基に、React/TypeScriptモダンフロントエンドスタックへ転換中のフロントエンドエンジニアのポートフォリオサイトです。

### About

- 4年間、金融・物流エンタープライズシステムのWeb標準化（WebSquare）およびフルスタック（Vue.js/Spring Boot）開発を経験
- 現在React、TypeScriptなどモダンフロントエンドスタックを自主的に学習しながら、本ポートフォリオを自ら設計・実装
- 実務で経験した技術的トラブルシューティング事例をプロジェクトごとに詳細に記録

### Features

- **日韓自動言語切替**：ブラウザの言語設定を検知し、日本語/韓国語コンテンツを自動表示。手動切替も可能
- **ダークモード**：ライト/ダークテーマの切替に対応
- **レスポンシブナビゲーション**：モバイル環境でハンバーガーメニューに切り替わるレスポンシブUI
- **プロジェクト詳細ページ**：問題認識（Problem）→原因分析（Analysis）→解決策（Solution）→結果（Result）の構成で、実際のトラブルシューティング過程を記録

### Tech Stack

| 分類 | 技術 |
|---|---|
| Core | React 19, TypeScript |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Build Tool | Vite 8 |
| Deploy | GitHub Pages (gh-pages) |

### Project Structure

```
src/
├── components/     # 再利用可能なUIコンポーネント（Navigation, Profile, Project）
├── features/       # ページ単位の機能（ProfileFeature, ProjectFeature）
├── pages/          # ルートページ
├── data/           # 多言語（i18n）テキストデータ
├── mocks/          # プロフィール・プロジェクトのモックデータ
└── styles/         # 共通スタイルトークン
```

### Getting Started

```bash
npm install
npm run dev       # ローカル開発サーバー起動
npm run build     # プロダクションビルド
npm run deploy    # GitHub Pagesへデプロイ
```

### Contact

- Email: wbkim0522@gmail.com
- GitHub: [github.com/wbkim0522](https://github.com/wbkim0522)

---

## 한국어

WebSquare 기반 엔터프라이즈 레거시 화면 전환 실무(금융·물류 도메인)를 바탕으로, React/TypeScript 모던 프론트엔드 스택으로 전환 중인 프론트엔드 개발자의 포트폴리오 사이트입니다.

### About

- 4년간 금융·물류 엔터프라이즈 시스템의 웹 표준화(WebSquare) 및 풀스택(Vue.js/Spring Boot) 개발 경험
- 현재 React, TypeScript 등 모던 프론트엔드 스택을 자기주도적으로 학습하며 이 포트폴리오를 직접 설계·구현
- 실무에서 겪은 기술적 트러블슈팅 사례를 프로젝트별로 상세히 기록

### Features

- **한/일 자동 언어 전환**: 브라우저 언어 설정을 감지해 한국어/일본어 콘텐츠 자동 표시, 수동 전환도 가능
- **다크 모드**: 라이트/다크 테마 토글 지원
- **반응형 네비게이션**: 모바일 환경에서 햄버거 메뉴로 전환되는 반응형 UI
- **프로젝트 상세 페이지**: 문제 인식(Problem) → 원인 분석(Analysis) → 해결 방안(Solution) → 결과(Result) 구조로 실제 트러블슈팅 과정을 기록

### Tech Stack

| 분류 | 기술 |
|---|---|
| Core | React 19, TypeScript |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Build Tool | Vite 8 |
| Deploy | GitHub Pages (gh-pages) |

### Project Structure

```
src/
├── components/     # 재사용 UI 컴포넌트 (Navigation, Profile, Project)
├── features/       # 페이지 단위 기능 (ProfileFeature, ProjectFeature)
├── pages/          # 라우트 페이지
├── data/           # 다국어(i18n) 텍스트 데이터
├── mocks/          # 프로필/프로젝트 목업 데이터
└── styles/         # 공통 스타일 토큰
```

### Getting Started

```bash
npm install
npm run dev       # 로컬 개발 서버 실행
npm run build     # 프로덕션 빌드
npm run deploy    # GitHub Pages 배포
```

### Contact

- Email: wbkim0522@gmail.com
- GitHub: [github.com/wbkim0522](https://github.com/wbkim0522)
