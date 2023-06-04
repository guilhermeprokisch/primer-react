import React from 'react';
import { SxProp } from '../sx';
export type ActionListDividerProps = {
    as?: React.ElementType;
} & SxProp;
/**
 * Visually separates `Item`s or `Group`s in an `ActionList`.
 */
export declare const Divider: React.FC<React.PropsWithChildren<ActionListDividerProps>>;
