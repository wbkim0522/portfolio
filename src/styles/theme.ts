const COMPONENT_TOKENS = {
  CONTAINER: "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-sm dark:shadow-none",
  FLOATING: "bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 rounded-b-2xl shadow-xl",
  ITEM: "rounded-lg lg:rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50/50 dark:hover:bg-neutral-800",
  CONTROL_TRACK: "bg-neutral-100 dark:bg-neutral-800 rounded-lg p-0.5 flex items-center gap-0.5 shrink-0",
  CONTROL_BTN: "rounded-md text-xs px-2.5 py-1 transition-all cursor-pointer"
};

export const STYLES = {
  // APP
  wrapper: "max-w-[1600px] min-h-screen h-full lg:h-screen lg:overflow-hidden mx-auto px-4 lg:px-6 xl:px-8 w-full flex flex-col lg:grid lg:grid-cols-[240px_1fr] xl:grid-cols-[280px_1fr] gap-6 xl:gap-8 pt-4 pb-8 lg:py-8 text-neutral-800 dark:text-neutral-200 selection:bg-indigo-500/10 selection:text-indigo-500 font-sans antialiased bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300",
  main: "w-full min-w-0 lg:h-full flex flex-col",
  mainCard: `${COMPONENT_TOKENS.CONTAINER} flex-grow p-6 xl:p-8 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto`,

  // Navigation
  nav: `${COMPONENT_TOKENS.CONTAINER} sticky top-0 lg:top-8 z-50 w-full grid grid-cols-[auto_1fr_auto] items-center lg:flex lg:flex-col lg:items-stretch lg:justify-start px-4 py-3 lg:p-4 xl:p-6 lg:h-[calc(100vh-4rem)] lg:gap-6 relative`,
  navHeader: "contents lg:flex lg:flex-row lg:items-center lg:justify-between lg:w-full lg:min-w-0 lg:gap-2",
  logoBtn: "w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0",
  profileName: "font-bold tracking-tight text-neutral-800 dark:text-neutral-100 shrink-0 text-sm sm:text-base truncate",
  menuButton: "lg:hidden p-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors focus:outline-none cursor-pointer row-start-1 col-start-3 justify-self-end",
  menuList: `${COMPONENT_TOKENS.FLOATING} absolute lg:relative top-full lg:top-0 left-0 w-full lg:w-auto flex flex-col p-4 lg:p-0 lg:pt-2 lg:bg-transparent lg:border-none lg:shadow-none lg:rounded-none z-40 transition-all duration-300 ease-out transform lg:transform-none! lg:opacity-100! lg:visible!`,
  menuItem: `${COMPONENT_TOKENS.ITEM} px-2.5 py-1.5 lg:px-3 lg:py-2 xl:px-4 xl:py-2.5 text-xs lg:text-sm font-bold cursor-pointer transition-all shrink-0 w-full block`,
  menuActive: "text-indigo-600! dark:text-white! bg-indigo-50! dark:bg-neutral-800!",
  openActive: "translate-y-0 opacity-100 visible",
  openInactive: "-translate-y-4 opacity-0 invisible",
  switchBar: COMPONENT_TOKENS.CONTROL_TRACK,
  switchBtnActive: `${COMPONENT_TOKENS.CONTROL_BTN} font-black bg-white dark:bg-neutral-700 text-indigo-600 dark:text-indigo-400 shadow-sm`,
  switchBtnInactive: `${COMPONENT_TOKENS.CONTROL_BTN} font-bold text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300`,
  funcGroup: "row-start-1 col-start-2 justify-self-end mr-2 flex flex-row lg:flex-col items-center lg:items-stretch gap-3 lg:gap-3 w-auto lg:w-full lg:mt-auto lg:pt-4 lg:border-t lg:border-neutral-100 lg:dark:border-neutral-800",
  funcBox: "flex items-center justify-between lg:w-full lg:px-2",
  funcTitle: "hidden lg:block text-[11px] font-bold text-neutral-400 dark:text-neutral-500 tracking-wider",
  navLogoWrap: "flex items-center gap-3",
  navIcon: "w-6 h-6",

  // Project Layout 3단 스플릿
  projectHeaderSection: "flex flex-col gap-4 pb-6 border-b border-neutral-100 dark:border-neutral-800/60 shrink-0",
  projectTitleRow: "flex flex-col md:flex-row md:items-end justify-between gap-4",
  projectTitle: "text-2xl lg:text-3xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight leading-snug",
  projectRole: "text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-2",
  projectPeriodBadge: "inline-flex items-center gap-1.5 text-xs font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-lg shrink-0 self-start md:self-auto",
  projectStackWrap: "flex flex-wrap gap-2 pt-1",
  projectStackBadge: "px-2.5 py-1 text-xs font-bold rounded-lg bg-indigo-50/40 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/10",

  // Hero Section 5:5 스플릿
  projectHeroSection: "grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-stretch w-full",
  
  // Left: Performance Context
  projectContextCard: "bg-neutral-50/50 dark:bg-neutral-800/10 border border-neutral-100 dark:border-neutral-800/40 rounded-2xl p-6 flex flex-col justify-between gap-6 h-full",
  projectSecTitle: "text-base font-black text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5",
  projectTaskList: "flex flex-col gap-2.5",
  projectTaskItem: "flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed",
  projectTaskIcon: "text-indigo-500 mt-1 shrink-0 stroke-[3]",
  projectIconPrimary: "text-indigo-500 dark:text-indigo-400",
  projectIconSecondary: "text-neutral-400 dark:text-neutral-500 ml-auto opacity-50",

  // 우측 고정 브라우저 프레임 캔버스
  projectMockupCard: "bg-neutral-100 dark:bg-neutral-800/30 border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden flex items-center justify-center p-6 lg:p-8 relative group select-none min-h-[250px] lg:min-h-auto h-full",
  projectMockupOverlay: "absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-size-[12px_12px] dark:bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] pointer-events-none",
  projectImgFixed: "w-full h-auto max-w-full object-contain rounded-lg shadow-[0_12px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-500 group-hover:scale-[1.025]",

  // Bottom: Troubleshooting Layout
  troubleSection: "pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex flex-col gap-5 shrink-0",
  troubleGrid: "grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6",
  troubleCardCommon: "p-5 rounded-2xl flex flex-col gap-2.5 border transition-all duration-300",
  troubleCardProblem: "bg-rose-50/50 dark:bg-rose-950/10 border-rose-100 dark:border-rose-900/30",
  troubleCardAnalysis: "bg-amber-50/50 dark:bg-amber-950/10 border-amber-100 dark:border-amber-900/30",
  troubleCardSolution: "bg-indigo-50/50 dark:bg-indigo-950/10 border-indigo-100 dark:border-indigo-900/30",
  troubleCardResult: "bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-100 dark:border-emerald-900/30",
  troubleCardHeader: "text-sm font-bold flex items-center gap-2",
  troubleBadge: "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shadow-sm",
  troubleDesc: "text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed",

  // Profile Layout
  profileGrid: "grid grid-cols-1 xl:grid-cols-[300px_1fr] gap-8 xl:gap-12 items-start",
  profileLeftCol: "flex flex-col gap-8 xl:sticky xl:top-24",
  
  // Profile Header
  profileTitle: "text-2xl xl:text-3xl font-black tracking-tight text-neutral-900 dark:text-neutral-50",
  profileRoleText: "text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1.5",
  
  // Contact Card
  contactCard: "bg-neutral-50/50 dark:bg-neutral-800/20 border border-neutral-100 dark:border-neutral-800/50 rounded-2xl p-4 flex flex-col gap-3",
  contactTitle: "text-xs font-bold text-neutral-400 dark:text-neutral-500 tracking-wider uppercase",
  contactList: "flex flex-col gap-2.5",
  contactItem: "flex items-center gap-2.5 text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:text-indigo-600 dark:hover:text-white transition-colors",
  contactIcon: "w-4 h-4 text-neutral-500",
  
  // Tech Stack
  stackSection: "flex flex-col gap-5",
  stackTitle: "text-xs font-bold text-neutral-400 dark:text-neutral-500 tracking-wider uppercase",
  stackGroupList: "flex flex-col gap-4",
  stackGroup: "flex flex-col gap-2",
  stackGroupTitle: "text-xs font-bold text-neutral-500 dark:text-neutral-400",
  stackBadgeWrap: "flex flex-wrap gap-1.5",
  profileStackBadge: "px-2 py-1 text-[11px] font-bold rounded-lg bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 border border-indigo-100/30 dark:border-indigo-900/10",

  // Timeline (Right Column)
  timelineCol: "flex flex-col gap-6 xl:border-l xl:border-neutral-100 xl:dark:border-neutral-800/60 xl:pl-8",
  timelineTitle: "text-lg font-black text-neutral-800 dark:text-neutral-200 mb-2 uppercase",
  timelineWrap: "relative ml-2 pl-6 flex flex-col gap-8",
  timelineLine: "absolute left-0 top-1.5 bottom-1.5 w-0.5 -translate-x-1/2 bg-neutral-100 dark:bg-neutral-800/80",
  
  timelineItem: "relative group",
  timelineDotOuter: "absolute -left-6 -translate-x-1/2 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 group-hover:border-indigo-600 dark:group-hover:border-indigo-400 transition-colors duration-300 z-10",
  timelineDotInner: "absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-400 -translate-x-1/2 -translate-y-1/2 transition-colors duration-300",

  timelineHeader: "flex flex-col md:flex-row md:items-center justify-between gap-1.5",
  timelineItemTitle: "text-sm xl:text-base font-extrabold text-neutral-800 dark:text-neutral-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300",
  timelinePeriod: "text-[11px] md:text-xs font-bold text-neutral-400 dark:text-neutral-500 font-mono tracking-tight shrink-0 bg-neutral-100 dark:bg-neutral-800/50 px-2 py-0.5 rounded-md self-start md:self-auto",
  
  timelineMetaWrap: "flex flex-wrap items-center gap-2 mt-2",
  timelineRole: "text-[11px] font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800 px-2 py-0.5 rounded border border-neutral-100 dark:border-neutral-800",
  timelineStackWrap: "flex gap-1",
  timelineStackItem: "text-[10px] font-bold text-neutral-400 dark:text-neutral-500",

  timelineTaskList: "list-none flex flex-col gap-1.5 mt-3.5",
  timelineTaskItem: "text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed flex items-start gap-1.5",
  timelineTaskBullet: "text-indigo-500 dark:text-indigo-400 mt-1 select-none shrink-0",

  // 에러 페이지
  errorWrapper: "text-center py-6 px-4 flex flex-col items-center",
  errorIcon: "w-16 h-16 text-indigo-600 dark:text-indigo-400 mb-6 animate-bounce",
  errorTitle: "text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4",
  errorDescription: "text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-8 whitespace-pre-wrap",
  errorButton: "bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 hover:bg-indigo-700 hover:-translate-y-0.5 active:translate-y-0",
};