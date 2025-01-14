import { KeyPaths } from './utils/types/KeyPaths';
import primitives from '@primer/primitives';
type SchemeValue = Record<'colors' | 'shadows', Partial<typeof primitives.colors.light>>;
declare const theme: {
    animation: {
        easeOutCubic: string;
    };
    borderWidths: (string | number)[];
    breakpoints: string[];
    fonts: {
        normal: any;
        mono: any;
    };
    fontSizes: string[];
    fontWeights: {
        light: number;
        normal: number;
        semibold: number;
        bold: number;
    };
    lineHeights: {
        condensedUltra: number;
        condensed: number;
        default: number;
    };
    radii: string[];
    sizes: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
    };
    space: string[];
    colorSchemes: Record<"light" | "light_high_contrast" | "light_colorblind" | "light_tritanopia" | "dark" | "dark_dimmed" | "dark_high_contrast" | "dark_colorblind" | "dark_tritanopia", SchemeValue>;
};
export default theme;
type ThemeColors = {
    fg: {
        default: string;
        muted: string;
        subtle: string;
        onEmphasis: string;
    };
    canvas: {
        default: string;
        overlay: string;
        inset: string;
        subtle: string;
    };
    border: {
        default: string;
        muted: string;
        subtle: string;
    };
    neutral: {
        emphasisPlus: string;
        emphasis: string;
        muted: string;
        subtle: string;
    };
    accent: {
        fg: string;
        emphasis: string;
        muted: string;
        subtle: string;
    };
    success: {
        fg: string;
        emphasis: string;
        muted: string;
        subtle: string;
    };
    attention: {
        fg: string;
        emphasis: string;
        muted: string;
        subtle: string;
    };
    severe: {
        fg: string;
        emphasis: string;
        muted: string;
        subtle: string;
    };
    danger: {
        fg: string;
        emphasis: string;
        muted: string;
        subtle: string;
    };
    open: {
        fg: string;
        emphasis: string;
        muted: string;
        subtle: string;
    };
    closed: {
        fg: string;
        emphasis: string;
        muted: string;
        subtle: string;
    };
    done: {
        fg: string;
        emphasis: string;
        muted: string;
        subtle: string;
    };
    sponsors: {
        fg: string;
        emphasis: string;
        muted: string;
        subtle: string;
    };
};
type ThemeShadows = {
    shadow: {
        small: string;
        medium: string;
        large: string;
        extraLarge: string;
    };
};
export type ThemeColorPaths = KeyPaths<ThemeColors>;
export type ThemeShadowPaths = KeyPaths<ThemeShadows>;
