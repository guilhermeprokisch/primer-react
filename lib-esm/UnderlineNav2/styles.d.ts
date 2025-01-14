import { Theme } from '../ThemeProvider';
import { UnderlineNavProps } from './UnderlineNav';
export declare const GAP = 8;
export declare const iconWrapStyles: {
    alignItems: string;
    display: string;
    marginRight: number;
};
export declare const counterStyles: {
    marginLeft: number;
    display: string;
    alignItems: string;
};
export declare const getNavStyles: (theme?: Theme, props?: Partial<Pick<UnderlineNavProps, 'align'>>) => {
    display: string;
    paddingX: number;
    justifyContent: string;
    borderBottom: string;
    borderBottomColor: string;
    align: string;
    alignItems: string;
    minHeight: string;
};
export declare const ulStyles: {
    display: string;
    listStyle: string;
    whiteSpace: string;
    paddingY: number;
    paddingX: number;
    margin: number;
    marginBottom: string;
    alignItems: string;
    gap: string;
    position: string;
};
export declare const getDividerStyle: (theme?: Theme) => {
    display: string;
    borderLeft: string;
    width: string;
    borderLeftColor: string;
    marginRight: number;
    height: string;
};
export declare const moreBtnStyles: {
    margin: number;
    border: number;
    background: string;
    fontWeight: string;
    boxShadow: string;
    paddingY: number;
    paddingX: number;
    '& > span[data-component="trailingIcon"]': {
        marginLeft: number;
    };
};
export declare const getLinkStyles: (theme?: Theme, props?: Partial<Pick<UnderlineNavProps, 'variant'>>, selectedLink?: React.RefObject<HTMLElement>, ref?: React.RefObject<HTMLElement>) => {
    '@media (hover:hover)': {
        '&:hover ': {
            backgroundColor: any;
            transition: string;
        };
    };
    '&:focus': {
        outline: string;
        '&': {
            boxShadow: string;
        };
        '&:not(:focus-visible)': {
            boxShadow: string;
        };
    };
    '&:focus-visible': {
        outline: string;
        boxShadow: string;
    };
    '& span[data-content]::before': {
        content: string;
        display: string;
        height: number;
        fontWeight: string;
        visibility: string;
        whiteSpace: string;
    };
    '&::after': {
        position: string;
        right: string;
        bottom: string;
        width: string;
        height: number;
        content: string;
        bg: any;
        borderRadius: number;
        transform: string;
    };
    '@media (forced-colors: active)': {
        '::after': {
            bg: string;
        };
    };
    paddingX: number;
    fontSize: number;
    position: string;
    display: string;
    color: string;
    textAlign: string;
    textDecoration: string;
    lineHeight: string;
    borderRadius: number;
};
export declare const menuItemStyles: {
    '& > span': {
        display: string;
    };
    textDecoration: string;
};
export declare const menuStyles: {
    position: string;
    zIndex: number;
    top: string;
    right: string;
    boxShadow: string;
    borderRadius: string;
    backgroundColor: string;
    listStyle: string;
    minWidth: string;
    maxWidth: string;
};
