export const THEME_MODES = {
  LIGHT: "light",
  DARK: "dark",
};
export const LS_SELECTED_THEME_MODE_KEY = "themeMode";
export const LS_ALL_THEMES_KEY = "themeMode";

const baseColors = {
  accent: "#f68759",
  backgroundAccent: "#fc935c",
  accentSecondary: "#4c4c4c",
  mobileMenuBackground: "#2c3a43a6",

  backgfoundMenuTablet: "#c7c7c7",
  darkGradientMenu: "linear-gradient(to bottom right, #4c4c4c, #4c4c4c)",
  backgroundSliderMenu:
    "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
  footerBackground: `linear-gradient(0deg, #8399a2 0%, #f0f6ee 100%)`,
  headerBackground: `linear-gradient(45deg, hsla(228, 17%, 53%, 1) 0%, hsla(229, 28%, 88%, 1) 100%);`,
  sliderBackground: `linear-gradient(180deg, #b3cdd1 0%, #d0d1dc 74%);
  `,
  black: "#000",
  white: "#fff",

  backgroundHomeAccent: "#02749ea7",
  backgroundHomeSecond: "#d7d7d7",

  accentSuccess: "#3cbc81",
  accentError: "#e2001a",

  darkMain: "#111111",
  darkSecondary: "#111321",

  whiteSecondary: "#FDF7F2",
};

export const theme = {
  shadow: `rgba(0, 0, 0, 0.09) 0px 2px 1px,
  rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
  rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`,

  borders: {
    //   primaryBtn: '2px solid',
    //   inputModal: '1px solid',
  },
  colors: {
    //   body: baseColors.darkGradient, //'#383a4d',
    accent: baseColors.accent,
    backgfoundTablet: baseColors.backgfoundMenuTablet,
    link: baseColors.accentSecondary,
    accentedTextDark: baseColors.darkSecondary,
    darkGradientMenu: baseColors.darkGradientMenu,
    backgroundSliderMenu: baseColors.backgroundSliderMenu,
    headerBackground: baseColors.headerBackground,
    footerBackground: baseColors.footerBackground,
    accentedTextLight: baseColors.accent,
    backgroundAccent: baseColors.backgroundAccent,
    sliderBackground: baseColors.sliderBackground,
    mobileMenuBackground: baseColors.mobileMenuBackground,

    backgroundHomeAccent: baseColors.backgroundHomeAccent,
    backgroundHomeSecond: baseColors.backgroundHomeSecond,
    //   heading: baseColors.darkMain,

    accentedBackgroundLight: baseColors.whiteSecondary,
    mainBackground: baseColors.whiteSecondary,
    mainBackgroundWithGradient: baseColors.whiteSecondary,
    mainBackgroundWithTransp: baseColors.whiteSecondary,
    mainBackgroundDark: "#300303",
    secondaryBackground: baseColors.white,
    ternaryBackground: baseColors.whiteSecondary,

    black: baseColors.black,
    darkMain: baseColors.darkMain,
    darkLight: baseColors.white,
    white: baseColors.white,
    whiteSecondary: baseColors.whiteSecondary,

    backdrop: " #11111199",
    placeholder: "#b3323299",
    hoverBtn: "#FF6101",
    input: baseColors.whiteSecondary,
    shadowCard: "rgba(49, 21, 4, 0.07)",
    inputModal: "rgba(245, 146, 86, 0.5)",
    success: baseColors.accentSuccess,
    warning: baseColors.accentError,
  },
  fontSizes: {
    xs: "12px",
    s: "14px",
    m: "16px",
    ml: "24px",
    mll: "28px",
    n: "18px",
    nl: "20px",
    l: "32px",
    lx: "36px",
    xl: "64px",
  },
  fontWeights: {
    text: 400,
    heading: 500,
    semiBold: 600,
    logo: 700,
  },
  sizes: {
    buttons: {
      normal: "100px",
    },
    small: "200px",
    normal: "300px",
    wide: "500px",
  },
  transitions: {
    normal: "250ms ease-in-out",
  },
  breakpoints: {
    mobile: {
      media: "(max-width: 888.98px)",
      width: "320px",
    },
    mobileOnly: {
      media: "(max-width: 888.98px)",
      width: "767.9px",
    },
    tablet: {
      media: "(min-width: 768px) and (max-width: 1279px)",
      mediaFrom: "(min-width: 768px)",
      width: "768px",
    },
    desktop: {
      media: "(min-width: 1280px)",
      width: "1280px",
    },
  },
};

const darkTheme = {
  ...theme,

  colors: {
    ...theme.colors,

    accentedTextDark: baseColors.accent,
    accentedTextDarkOpaq: baseColors.accent + "99",
    accentedTextLight: baseColors.white,
    darkLight: baseColors.darkMain,
    heading: baseColors.white,
    navText: baseColors.whiteSecondary,
    newsText: baseColors.whiteSecondary,

    accentedBackgroundLight: baseColors.accent,
    mainBackgroundWithGradient: baseColors.darkGradient,
    mainBackgroundWithTransp: "transparent",
    secondaryBackground: baseColors.septenary,
    ternaryBackground: baseColors.septenary,
  },
};

export const allThemes = {
  dark: darkTheme,
  light: theme,
};
