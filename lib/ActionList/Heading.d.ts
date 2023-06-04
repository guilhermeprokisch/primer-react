import React from 'react';
import { SxProp } from '../sx';
export type ActionListHeadingProps = {
    variant?: 'subtle' | 'filled';
    title: string;
    subtitle?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & SxProp;
/**
 * Displays the name and description of the ActionList.
 *
 * For visual presentation only. It's hidden from screen readers.
 */
export declare const Heading: React.FC<React.PropsWithChildren<ActionListHeadingProps>>;
