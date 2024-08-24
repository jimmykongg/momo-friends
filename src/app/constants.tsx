/**
 * Theme colors
 */

type ThemeColors = Record<`--color-${string}`, string>;

export const LIGHT_COLORS: ThemeColors = {
  "--color-text": "hsl(0deg 0% 5%)",
  "--color-background": "hsl(32deg 25% 90%)",
  "--color-primary": "hsl(245deg 100% 50%)",
  "--color-secondary": "hsl(345deg 100% 50%)",
};

export const DARK_COLORS: ThemeColors = {
  "--color-text": "hsl(0deg 0% 100%)",
  "--color-background": "hsl(240deg 11% 7%)",
  "--color-primary": "hsl(50deg 100% 50%)",
  "--color-secondary": "hsl(210deg 100% 70%)",
};

/**
 * Media queries
 */
const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${600 / 16}rem)`,
  tabletAndSmaller: `(max-width: ${950 / 16}rem)`,
  laptopAndSmaller: `(max-width: ${1300 / 16}rem)`,
};

