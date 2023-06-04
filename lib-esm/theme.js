import primitives from '@primer/primitives';
import { t as theme$2 } from './utils/theme2.js';

const {
  lineHeight: lineHeights
} = primitives.typography.normal;
const animation = {
  easeOutCubic: 'cubic-bezier(0.33, 1, 0.68, 1)'
};
const breakpoints = ['544px', '768px', '1012px', '1280px'];
const fonts = {
  normal: theme$2.fontStack(['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji']),
  mono: theme$2.fontStack(['SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'])
};
const fontWeights = {
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 600
};
const borderWidths = [0, '1px'];
const radii = ['0', '3px', '6px', '100px'];
const sizes = {
  small: '544px',
  medium: '768px',
  large: '1012px',
  xlarge: '1280px'
};
const fontSizes = ['12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px'];
const space = ['0', '4px', '8px', '16px', '24px', '32px', '40px', '48px', '64px', '80px', '96px', '112px', '128px'];
const colorSchemes = Object.entries(primitives.colors).reduce((acc, [name, variables]) => {
  const {
    colors,
    shadows
  } = theme$2.partitionColors(variables);
  return {
    ...acc,
    [name]: {
      colors: theme$2.omitScale(colors),
      shadows: theme$2.omitScale(shadows)
    }
  };
}, {});
const theme = {
  animation,
  borderWidths,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  sizes,
  space,
  colorSchemes
};
var theme$1 = theme;

// NOTE: for now, ThemeColors and ThemeShadows are handcrafted types. It would be nice if these
// were exports from primitives (or a different shape but derived from those exports).

export { theme$1 as default };
