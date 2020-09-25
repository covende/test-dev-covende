// Colors
const colors = {
  celeste: '#00ADF6',
  rojo: '#FF5454',
  amarillo: '#FFB210',
  verde: '#17BF93',
  morado: '#5164C4',
  azul: '#004772',
  black: '#011423',
  gris: '#F4F4F4',
  white: '#FFFFFF',
};

// breakpoints
const breakpoints = {
  xxs: 0,
  xs: 360,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

// Media queries
const mediaQueries = {
  min: {
    xxs: `@media (min-width: ${breakpoints.xxs}px)`,
    xs: `@media (min-width: ${breakpoints.xs}px)`,
    sm: `@media (min-width: ${breakpoints.sm}px)`,
    md: `@media (min-width: ${breakpoints.md}px)`,
    lg: `@media (min-width: ${breakpoints.lg}px)`,
    xl: `@media (min-width: ${breakpoints.xl}px)`,
  },
  max: {
    xxs: `@media (max-width: ${breakpoints.xxs}px)`,
    xs: `@media (max-width: ${breakpoints.xs}px)`,
    sm: `@media (max-width: ${breakpoints.sm}px)`,
    md: `@media (max-width: ${breakpoints.md}px)`,
    lg: `@media (max-width: ${breakpoints.lg}px)`,
    xl: `@media (max-width: ${breakpoints.xl}px)`,
  },
  between: {
    xxs_xs: `@media (min-width: ${breakpoints.xxs}px) and (max-width: ${breakpoints.xs}px)`,
    xs_sm: `@media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px)`,
    sm_md: `@media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px)`,
    md_lg: `@media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px)`,
    lg_xl: `@media (min-width: ${breakpoints.lg}px) and (max-width: ${breakpoints.xl}px)`,
  },
};

// Palette
const palette = {
  public: {
    primary: colors.celeste,
    secondary: colors.celeste,
    black: colors.celeste,
    darkBlack: colors.celeste,
    background: colors.celeste,
  },
  buyer: {
    primary: colors.celeste,
    secondary: colors.celeste,
    black: colors.celeste,
    darkBlack: colors.celeste,
    background: colors.celeste,
  },
  seller: {
    primary: colors.celeste,
    secondary: colors.celeste,
    black: colors.celeste,
    darkBlack: colors.celeste,
    background: colors.celeste,
  },
};

export const theme = {
  colors: colors,
  palette: palette,
  breakpoints: breakpoints,
  mq: mediaQueries,
};
