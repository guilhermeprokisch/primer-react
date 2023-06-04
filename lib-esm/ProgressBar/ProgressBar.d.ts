import React from 'react';
import { WidthProps } from 'styled-system';
import { SxProp } from '../sx';
type ProgressProp = {
    progress?: string | number;
};
export declare const Item: import("styled-components").StyledComponent<"span", any, ProgressProp & SxProp, never>;
declare const sizeMap: {
    small: string;
    large: string;
    default: string;
};
type StyledProgressContainerProps = {
    inline?: boolean;
    barSize?: keyof typeof sizeMap;
} & WidthProps & SxProp;
export type ProgressBarProps = React.PropsWithChildren & {
    bg?: string;
} & StyledProgressContainerProps & ProgressProp;
export declare const ProgressBar: ({ progress, bg, barSize, children, ...rest }: ProgressBarProps) => JSX.Element;
export {};
