export const LANGUAGE = {
  ko: {
    titleName: "김원빈",
    nav1: "자기소개",
    nav2: "동원로엑스 프로젝트",
    nav3: "삼성증권 프로젝트",

    projectLabels: {
      tasksTitle: "주요 수행 업무",
      techStackTitle: "사용 기술 및 스택",
      troubleTitle: "트러블슈팅 및 성능 최적화",
      troubleProblem: "문제 인식 (Problem)",
      troubleAnalysis: "원인 분석 (Analysis)",
      troubleSolution: "해결 방안 (Solution)",
      troubleResult: "도출 결과 (Result)"
    },

    profile: {
      name: "김원빈",
      experiences: [
        {
          title: "동원로엑스 DEBIS 시스템 웹 표준화 전환",
          period: "2025/12 ~ 2026/06",
          role: "시스템 화면 웹 표준 전환 개발",
          stack: ["WebSquare", "JavaScript"],
          tasks: [
            "WebSquare 솔루션을 활용한 기존 레거시 DEBIS 시스템 화면의 웹 표준화 마이그레이션 수행",
            "사용자 인터페이스 최적화를 위한 프론트엔드 스크립트 구현 및 화면 기능 개선"
          ]
        },
        {
          title: "삼성증권 H.Net 단말 Web 표준 전환",
          period: "2024/09 ~ 2025/09",
          role: "단말 화면 웹 표준 전환 개발",
          stack: ["WebSquare", "HTML5"],
          tasks: [
            "레거시 H.Net 금융 단말 화면을 웹스퀘어 기반 HTML5 웹 표준 화면으로 안정적 전환",
            "화면 컴포넌트 매핑 및 프론트엔드 스크립트 연동을 통한 데이터 정합성 확보"
          ]
        },
        {
          title: "사내 인력관리 솔루션 패키지 신규 구축",
          period: "2023/10 ~ 2024/08",
          role: "풀스택 기능 개발 및 아키텍처 구축",
          stack: ["Vue.js", "Spring Boot", "Java", "MariaDB"],
          tasks: [
            "Vue.js 프레임워크를 도입하여 시스템 전체 웹 화면 UI 및 프론트엔드 핵심 기능 개발",
            "Spring Boot 기반 RESTful API 설계 및 MariaDB 연동을 통한 백엔드 비즈니스 로직 구현"
          ]
        },
        {
          title: "KB손해보험 EDMS 웹 표준 전환",
          period: "2023/08 ~ 2023/09",
          role: "웹 표준 화면 전환 개발",
          stack: ["WebSquare", "JavaScript"],
          tasks: [
            "기존 전사 문서 관리(EDMS) 화면의 WebSquare 표준 환경 마이그레이션 전담",
            "JavaScript 기반 UI 스크립트 최적화를 통한 시스템 화면 기능 및 퍼포먼스 개선"
          ]
        },
        {
          title: "F&U신용정보 BMS 2.0 아키텍처 전환",
          period: "2023/04 ~ 2023/07",
          role: "레거시 쿼리 재설계 및 풀스택 개발",
          stack: ["Oracle", "MySQL", "WebSquare", "Spring Boot", "Java"],
          tasks: [
            "Oracle에서 MySQL로의 아키텍처 전환에 따른 레거시 쿼리 재설계 및 데이터 이관 검증",
            "WebSquare 화면 스크립트 가공 및 Java/Spring Boot 백엔드 비즈니스 로직 연동 수행"
          ]
        },
        {
          title: "신한은행 The Next",
          period: "2022/07 ~ 2022/10",
          role: "자동 전환 소스 검증 및 화면 수정",
          stack: ["WebSquare", "JavaScript"],
          tasks: [
            "자동 전환 툴(Converter)을 거친 소스코드의 무오류성 검증 및 예외 케이스 처리",
            "금융 비즈니스 로직에 맞춘 WebSquare 컴포넌트 매핑 최적화 및 스크립트 보완"
          ]
        }
      ]
    },
    project1: {
      title: "동원로엑스 DEBIS 시스템 웹 표준화 전환",
      period: "2025/12 ~ 2026/06",
      role: "시스템 화면 웹 표준 전환 및 데이터 가공 개발",
      stack: ["WebSquare", "JavaScript (ES6+)"],
      tasks: [
        "기존 레거시 DEBIS 시스템의 데이터 자동 피벗 기능을 웹 표준 환경으로 마이그레이션",
        "UI 솔루션 자체 컴포넌트의 구조적 제약 사항을 순수 자바스크립트 데이터 가공 로직으로 우회 설계"
      ],
      troubleshooting: {
        problem: "UI 솔루션(WebSquare) 내장 PivotGrid 컴포넌트 적용 시 컬럼 정렬(Sort) 및 드래그 이동(Move) 기능 오작동 발생",
        analysis: "내부 엔진 구조 분석 결과, PivotGrid가 원본 데이터를 실시간 연산하여 다차원 인덱스로 홀딩하는 'Read-only View' 방식으로 구동되어 표준 그리드 API와 충돌이 발생하는 것으로 원인 도출",
        solution: "솔루션 기본 피벗 컴포넌트의 구조적 한계로 인한 기능 오작동을 해결하기 위해, 프론트엔드 단에서 메모리 효율적인 해시 맵 자료구조를 활용해 피벗 매트릭스를 직접 연산·가공하는 알고리즘 구현",
        result: "가공 완료된 정형 데이터를 표준 GridView 컴포넌트에 직접 바인딩하여 고객이 요구한 정렬 및 컬럼 이동 기능을 100% 정상 작동시켰으며, 엔진 연산 오버헤드를 줄여 화면 렌더링 성능 최적화 달성"
      }
    },
    project2: {
      title: "삼성증권 H.Net 단말 Web 표준 전환",
      period: "2024/09 ~ 2025/09",
      role: "레거시 H.Net 금융 단말 화면의 웹 표준 변환 및 개인화 탭 UI 컴포넌트 자체 구축 전담",
      stack: ["WebSquare", "JavaScript", "HTML5"],
      tasks: [
        "일 평균 2,000~3,000라인 규모의 대량 레거시 금융 단말 코드를 웹 표준 스크립트로 고속 전환 및 최적화 수행",
        "기존 AS-IS 시스템의 로그인 정보 기반 개인화 즐겨찾기 탭 화면 복원을 위한 커스텀 UI 컴포넌트 신규 구축"
      ],
      troubleshooting: {
        problem: "신규 웹 표준 환경 내 개인화 즐겨찾기 탭 컴포넌트의 부재 및 WFrame(내장 iframe) 동시 로딩 시 병목 현상과 화면 규격 상이에 따른 UI 잘림 현상 발생",
        analysis: "WFrame 구조상 독립된 스코프를 가져 초기 렌더링 시점에 대량의 화면 경로가 동시에 로드되면서 렌더링 부하가 유발되며, 자식 화면의 메타데이터가 외곽 부모 컨테이너에 동적으로 반영되지 않는 것으로 원인 도출",
        solution: "컴포넌트의 생명주기(Lifecycle) 로딩 완료 이벤트를 제어하여 차순위 탭의 화면 경로를 순차적으로 동적 바인딩하는 로딩 파이프라인을 구축하고, WFrame 내부 메타데이터를 파싱하여 자식 화면 규격에 맞춰 부모 레이아웃 크기를 실시간 조정하는 자체 리사이징 제어 로직 구현",
        result: "공백이던 핵심 개인화 기능을 순수 컴포넌트 조합으로 완벽히 복원하여 100% 일정 내 온타임 배포를 완수하였으며, 발생한 결함에 대한 신속한 핫픽스 대응으로 시스템 조기 안정화 달성"
      }
    }
  },
  ja: {
    titleName: "キムウォンビン",
    nav1: "自己紹介",
    nav2: "Dongwon Loex プロジェクト",
    nav3: "サムスン証券 プロジェクト",

    projectLabels: {
      tasksTitle: "主な担当業務",
      techStackTitle: "使用技術・スタック",
      troubleTitle: "トラブルシューティング及びパフォーマンス最適化",
      troubleProblem: "問題認識 (Problem)",
      troubleAnalysis: "原因分析 (Analysis)",
      troubleSolution: "解決策 (Solution)",
      troubleResult: "結果 (Result)"
    },

    profile: {
      name: "キムウォンビン",
      experiences: [
        {
          title: "Dongwon Loex DEBISシステム Web標準化移行",
          period: "2025/12 ~ 2026/06",
          role: "システム画面のWeb標準化移行開発",
          stack: ["WebSquare", "JavaScript"],
          tasks: [
            "WebSquareソリューションを活用した、既存のレガシーDEBISシステム画面のWeb標準化マイグレーションを実行",
            "ユーザーインターフェース最適化のためのフロントエンドスクリプトの実装および画面機能の改善"
          ]
        },
        {
          title: "サムスン証券 H.Net端末 Web標準化移行",
          period: "2024/09 ~ 2025/09",
          role: "端末画面のWeb標準化移行開発",
          stack: ["WebSquare", "HTML5"],
          tasks: [
            "レガシーH.Net金融端末画面を、WebSquareベースのHTML5 Web標準画面へ安定的に移行",
            "画面コンポーネントのマッピングおよびフロントエンドスクリプトの連動によるデータ整合性の確保"
          ]
        },
        {
          title: "社内人材管理ソリューションパッケージの新規構築",
          period: "2023/10 ~ 2024/08",
          role: "フルスタック機能開発およびアーキテクチャの構築",
          stack: ["Vue.js", "Spring Boot", "Java", "MariaDB"],
          tasks: [
            "Vue.jsフレームワークを導入し、システム全体のWeb画面UIおよびフロントエンドのコア機能を開発",
            "Spring BootベースのRESTful API設計およびMariaDB連動によるバックエンドのビジネスロジックを実装"
          ]
        },
        {
          title: "KB損害保険 EDMS Web標準化移行",
          period: "2023/08 ~ 2023/09",
          role: "Web標準画面移行開発",
          stack: ["WebSquare", "JavaScript"],
          tasks: [
            "既存の全社文書管理(EDMS)画面のWebSquare標準環境マイグレーションを専任",
            "JavaScriptベースのUIスクリプト最適化によるシステム画面の機能およびパフォーマンスの改善"
          ]
        },
        {
          title: "F&U信用情報 BMS 2.0 アーキテクチャ移行",
          period: "2023/04 ~ 2023/07",
          role: "レガシー クエリの再設計およびフルスタック開発",
          stack: ["Oracle", "MySQL", "WebSquare", "Spring Boot", "Java"],
          tasks: [
            "OracleからMySQLへのアーキテクチャ移行に伴うレガシー クエリの再設計およびデータ移行の検証",
            "WebSquare画面スクリプトの加工およびJava/Spring Bootバックエンドのビジネスロジック連動を実行"
          ]
        },
        {
          title: "新韓銀行 The Next",
          period: "2022/07 ~ 2022/10",
          role: "自動移行ソースの検証および画面修正",
          stack: ["WebSquare", "JavaScript"],
          tasks: [
            "自動移行ツール(Converter)を経たソースコードの無エラー検証および例外ケースの処理",
            "金融ビジネスロジックに合わせたWebSquareコンポーネントのマッピング最適化およびスクリプトの補完"
          ]
        }
      ]
    },
    project1: {
      title: "東元ロエックス DEBISシステムWeb標準化移行",
      period: "2025.12 ~ 2026.06",
      role: "システム画面のWeb標準化移行およびデータ加工開発",
      stack: ["WebSquare", "JavaScript (ES6+)"],
      tasks: [
        "既存のレガシーDEBISシステムにおけるデータ自動ピボット機能のWeb標準環境へのマイグレーション",
        "UIソリューション独自コンポーネントの構造的な制約事項を、純粋なJavaScriptのデータ加工ロジックによる迂回設計で解決"
      ],
      troubleshooting: {
        problem: "UIソリューション(WebSquare)内蔵のPivotGridコンポーネント適用時、カラムソート(Sort)およびドラッグ移動(Move)機能が正常に動作しない現象が発生",
        analysis: "内部エンジン構造を分析した結果、PivotGridが元データをリアルタイムに演算して多次元インデックスとして保持する「Read-only View」方式で駆動するため、標準グリッドAPIとの衝突が発生していると原因を特定",
        solution: "ソリューション標準のピボットコンポーネントの構造적限界による機能不具合を解消するため、フロントエンド側でメモリ効率の高いハッシュマップ構造を活用し、ピボットマトリックスを直接演算・加工するアルゴリズムを実装",
        result: "加工済みの定型データを標準GridViewコンポーネントに直接バインディングすることで、顧客が要求したソートおよびカラム移動機能を100%正常に動作させ、エンジンの演算オーバーヘッドを削減して画面レンダリング性能の最適化を達成"
      }
    },
    project2: {
      title: "サムスン証券 H.Net端末 Web標準化移行",
      period: "2024.09 ~ 2025.09",
      role: "レガシーH.Net金融端末画面のWeb標準移行およびパーソナライズタブUIコンポーネントの独自構築担当",
      stack: ["WebSquare", "JavaScript", "HTML5"],
      tasks: [
        "日平均2,000〜3,000行規模の大量のレガシー金融端末コードをWeb標準スクリプトへ高速移行および最適化を遂行",
        "既存AS-ISシステムのログイン情報に基づくパーソナライズお気に入りタブ画面を復元するためのカスタムUIコンポーネントを新規構築"
      ],
      troubleshooting: {
        problem: "新規Web標準環境におけるパーソナライズお気に入りタブコンポーネントの不在、およびWFrame(内蔵iframe)同時ロード時のボトルネックと画面規格の相違によるUIの見切れ現象が発生",
        analysis: "WFrame構造上、独立したスコープを持つため、初期レンダリング時に大量の画面パスが同時にロードされることでレンダリング負荷が誘発され、子画面のメタデータが外枠の親コンテナに動的に反映されないことが原因であると特定",
        solution: "コンポーネントのライフサイクル(Lifecycle)ロード完了イベントを制御し、次順位タブの画面パスを順次動的バインディングするロードパイプラインを構築。さらにWFrame内部のメタデータをパースして子画面の規格に合わせ、親レイアウトのサイズをリアルタイムに調整する独自のリサイジング制御ロジックを実装",
        result: "機能が欠落していたコアなパーソナライズ機能を純粋なコンポーネントの組み合わせで完全に復元し、100%スケジュール通りのオンタイムデプロイ(On-Time)を完遂。さらに発生した欠陥に対する迅速なホットフィックス対応により、システムの早期安定化を達成"
      }
    }
  }
} as const;

export type LanguageType = keyof typeof LANGUAGE;
export type TranslationType = typeof LANGUAGE[LanguageType];