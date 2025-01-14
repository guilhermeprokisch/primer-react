import React from 'react';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
import { SxProp } from '../sx';
import { AriaRole } from '../utils/types';
export type ActionListProps = React.PropsWithChildren<{
    /**
     * `inset` children are offset (vertically and horizontally) from `List`’s edges, `full` children are flush (vertically and horizontally) with `List` edges
     */
    variant?: 'inset' | 'full';
    /**
     * Whether multiple Items or a single Item can be selected.
     */
    selectionVariant?: 'single' | 'multiple';
    /**
     * Display a divider above each `Item` in this `List` when it does not follow a `Header` or `Divider`.
     */
    showDividers?: boolean;
    /**
     * The ARIA role describing the function of `List` component. `listbox` or `menu` are a common values.
     */
    role?: AriaRole;
}> & SxProp;
type ContextProps = Pick<ActionListProps, 'variant' | 'selectionVariant' | 'showDividers' | 'role'> & {
    headingId?: string;
};
export declare const ListContext: React.Context<ContextProps>;
export declare const List: PolymorphicForwardRefComponent<"ul", ActionListProps>;
export {};
