import React from 'react';
import { AriaRole } from '../utils/types';
import { SxProp } from '../sx';
export type ActionListItemProps = {
    /**
     * Primary content for an Item
     */
    children?: React.ReactNode;
    /**
     * Callback that will trigger both on click selection and keyboard selection.
     */
    onSelect?: (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => void;
    /**
     * Is the `Item` is currently selected?
     */
    selected?: boolean;
    /**
     * Indicate whether the item is active. There should never be more than one active item.
     */
    active?: boolean;
    /**
     * Style variations associated with various `Item` types.
     *
     * - `"default"` - An action `Item`.
     * - `"danger"` - A destructive action `Item`.
     */
    variant?: 'default' | 'danger';
    /**
     * Items that are disabled can not be clicked, selected, or navigated through.
     */
    disabled?: boolean;
    /**
     * The ARIA role describing the function of `Item` component. `option` is a common value.
     */
    role?: AriaRole;
    /**
     * id to attach to the root element of the Item
     */
    id?: string;
    /**
     * Private API for use internally only. Used by LinkItem to wrap contents in an anchor
     */
    _PrivateItemWrapper?: React.FC<React.PropsWithChildren<MenuItemProps>>;
} & SxProp;
type MenuItemProps = {
    onClick?: (event: React.MouseEvent) => void;
    onKeyPress?: (event: React.KeyboardEvent) => void;
    'aria-disabled'?: boolean;
    tabIndex?: number;
    'aria-labelledby'?: string;
    'aria-describedby'?: string;
    role?: string;
};
export type ItemContext = Pick<ActionListItemProps, 'variant' | 'disabled'> & {
    inlineDescriptionId?: string;
    blockDescriptionId?: string;
};
export declare const ItemContext: React.Context<ItemContext>;
export declare const getVariantStyles: (variant: ActionListItemProps['variant'], disabled: ActionListItemProps['disabled']) => {
    color: string;
    iconColor: string;
    annotationColor: string;
    hoverColor?: undefined;
} | {
    color: string;
    iconColor: string;
    annotationColor: string;
    hoverColor: string;
};
export declare const Slots: React.FC<{
    context?: Record<string, unknown> | undefined;
    children: (slots: {
        Heading?: React.ReactNode;
        LeadingVisual?: React.ReactNode;
        InlineDescription?: React.ReactNode;
        BlockDescription?: React.ReactNode;
        TrailingVisual?: React.ReactNode;
    }) => React.ReactNode;
}>, Slot: <T>(props: {
    name: "Heading" | "LeadingVisual" | "InlineDescription" | "BlockDescription" | "TrailingVisual";
    children: React.ReactNode | ((context: T) => React.ReactNode);
}) => null;
export declare const TEXT_ROW_HEIGHT = "20px";
export {};
