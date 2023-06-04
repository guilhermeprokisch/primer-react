import React, { ComponentProps } from 'react';
import { SxProp } from '../sx';
import { ForwardRefComponent as PolymorphicForwardRefComponent } from '../utils/polymorphic';
/** @deprecated 'extralarge' to be removed to align with size naming ADR https://github.com/github/primer/blob/main/adrs/2022-02-09-size-naming-guidelines.md **/
type ExtraLarge = 'extralarge';
export type TokenSizeKeys = 'small' | 'medium' | 'large' | 'xlarge' | ExtraLarge;
export declare const tokenSizes: Record<TokenSizeKeys, string>;
export declare const defaultTokenSize: TokenSizeKeys;
export interface TokenBaseProps extends Omit<React.HTMLProps<HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement>, 'size' | 'id'> {
    as?: 'button' | 'a' | 'span';
    /**
     * The function that gets called when a user clicks the remove button, or keys "Backspace" or "Delete" when focused on the token
     */
    onRemove?: () => void;
    /**
     * Whether the remove button should be rendered in the token
     */
    hideRemoveButton?: boolean;
    /**
     * Whether the token is selected
     */
    isSelected?: boolean;
    /**
     * The text label inside the token
     */
    text: React.ReactNode;
    /**
     * A unique identifier that can be associated with the token
     */
    id?: number | string;
    /**
     * Which size the token will be rendered at
     */
    size?: TokenSizeKeys;
    /**
     * Whether or not the token is disabled (non-interactive).
     */
    disabled?: boolean;
}
export declare const isTokenInteractive: ({ as, onClick, onFocus, tabIndex, disabled, }: Pick<ComponentProps<typeof TokenBase>, 'disabled' | 'as' | 'onClick' | 'onFocus' | 'tabIndex'>) => boolean;
declare const TokenBase: PolymorphicForwardRefComponent<"a" | "button" | "span", TokenBaseProps & SxProp>;
export default TokenBase;