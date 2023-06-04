import React from 'react';
import { FilteredActionListProps, ItemInput } from '../FilteredActionList';
import { OverlayProps } from '../Overlay';
import { AnchoredOverlayProps } from '../AnchoredOverlay';
import { AnchoredOverlayWrapperAnchorProps } from '../AnchoredOverlay/AnchoredOverlay';
interface SelectPanelSingleSelection {
    selected: ItemInput | undefined;
    onSelectedChange: (selected: ItemInput | undefined) => void;
}
interface SelectPanelMultiSelection {
    selected: ItemInput[];
    onSelectedChange: (selected: ItemInput[]) => void;
}
interface SelectPanelBaseProps {
    title?: string | React.ReactElement;
    onOpenChange: (open: boolean, gesture: 'anchor-click' | 'anchor-key-press' | 'click-outside' | 'escape' | 'selection') => void;
    placeholder?: string;
    inputLabel?: string;
    overlayProps?: Partial<OverlayProps>;
}
export type SelectPanelProps = SelectPanelBaseProps & Omit<FilteredActionListProps, 'selectionVariant'> & Pick<AnchoredOverlayProps, 'open'> & AnchoredOverlayWrapperAnchorProps & (SelectPanelSingleSelection | SelectPanelMultiSelection) & {
    showItemDividers?: boolean;
};
export declare function SelectPanel({ open, onOpenChange, renderAnchor, anchorRef: externalAnchorRef, placeholder, placeholderText, inputLabel, selected, title, onSelectedChange, filterValue: externalFilterValue, onFilterChange: externalOnFilterChange, items, textInputProps, overlayProps, sx, ...listProps }: SelectPanelProps): JSX.Element;
export declare namespace SelectPanel {
    var displayName: string;
}
export {};
