/// <reference types="react" />
export type { ProgressBarProps } from './ProgressBar';
/**
 * Collection of ProgressBar related components.
 */
export declare const ProgressBar: (({ progress, bg, barSize, children, ...rest }: import("./ProgressBar").ProgressBarProps) => JSX.Element) & {
    Item: import("styled-components").StyledComponent<"span", any, {
        progress?: string | number | undefined;
    } & import("..").SxProp, never>;
};
