import React from 'react';
import { TextInputProps } from '../TextInput';
import { ActionListProps, ActionListItemProps } from '../ActionList';
import { SxProp } from '../sx';
export type ItemInput = Partial<ActionListItemProps & {
    description?: string | React.ReactElement;
    descriptionVariant?: 'inline' | 'block';
    leadingVisual?: JSX.Element;
    onAction?: (itemFromAction: ItemInput, event: React.MouseEvent) => void;
    selected?: boolean;
    text?: string;
    trailingVisual?: string;
}>;
export interface FilteredActionListProps extends ActionListProps, SxProp {
    loading?: boolean;
    placeholderText?: string;
    filterValue?: string;
    onFilterChange: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    textInputProps?: Partial<Omit<TextInputProps, 'onChange'>>;
    inputRef?: React.RefObject<HTMLInputElement>;
    items: ItemInput[];
}
export declare function FilteredActionList({ loading, placeholderText, filterValue: externalFilterValue, onFilterChange, items, textInputProps, inputRef: providedInputRef, sx, ...listProps }: FilteredActionListProps): JSX.Element;
export declare namespace FilteredActionList {
    var displayName: string;
}
