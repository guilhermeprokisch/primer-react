import { To } from 'history';
import React from 'react';
import { SxProp } from '../sx';
import { ComponentProps } from '../utils/types';
declare const UnderlineNavBase: import("styled-components").StyledComponent<"nav", any, SxProp, never>;
export type UnderlineNavProps = {
    actions?: React.ReactNode;
    align?: 'right';
    full?: boolean;
    label?: string;
} & ComponentProps<typeof UnderlineNavBase>;
declare function UnderlineNav({ actions, className, align, children, full, label, theme, ...rest }: UnderlineNavProps): JSX.Element;
declare const UnderlineNavLink: import("styled-components").StyledComponent<"a", any, {
    to?: To | undefined;
    selected?: boolean | undefined;
} & SxProp, never>;
export type UnderlineNavLinkProps = ComponentProps<typeof UnderlineNavLink>;
/**
 * @deprecated UnderlineNav is deprecated and will be replaced by the draft `UnderlineNav` in the next major release. See https://primer.style/react/drafts/UnderlineNav2 for more details.
 */
declare const _default: typeof UnderlineNav & {
    Link: import("styled-components").StyledComponent<"a", any, {
        to?: To | undefined;
        selected?: boolean | undefined;
    } & SxProp, never>;
};
export default _default;
