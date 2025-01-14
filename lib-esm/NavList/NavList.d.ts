import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
import React from 'react';
import { ActionListDividerProps, ActionListLeadingVisualProps, ActionListTrailingVisualProps } from '../ActionList';
import { SxProp } from '../sx';
export type NavListProps = {
    children: React.ReactNode;
} & SxProp & React.ComponentProps<'nav'>;
export type NavListItemProps = {
    children: React.ReactNode;
    href?: string;
    'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | boolean;
} & SxProp;
export type NavListSubNavProps = {
    children: React.ReactNode;
} & SxProp;
export type NavListLeadingVisualProps = ActionListLeadingVisualProps;
export type NavListTrailingVisualProps = ActionListTrailingVisualProps;
export type NavListDividerProps = ActionListDividerProps;
export type NavListGroupProps = {
    children: React.ReactNode;
    title?: string;
} & SxProp;
export declare const NavList: React.ForwardRefExoticComponent<Omit<NavListProps, "ref"> & React.RefAttributes<HTMLElement>> & {
    Item: PolymorphicForwardRefComponent<"a", NavListItemProps>;
    SubNav: {
        ({ children, sx: sxProp }: NavListSubNavProps): JSX.Element | null;
        displayName: string;
    };
    LeadingVisual: React.FC<React.PropsWithChildren<SxProp & React.HTMLAttributes<HTMLSpanElement>>>;
    TrailingVisual: React.FC<React.PropsWithChildren<SxProp & React.HTMLAttributes<HTMLSpanElement>>>;
    Divider: React.FC<React.PropsWithChildren<ActionListDividerProps>>;
    Group: React.FC<NavListGroupProps>;
};
