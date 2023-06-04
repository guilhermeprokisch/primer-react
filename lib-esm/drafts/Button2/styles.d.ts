import { VariantType, AlignContent } from './types';
import { Theme } from '../../ThemeProvider';
export declare const getVariantStyles: (variant?: VariantType, theme?: Theme) => {
    color: string;
    backgroundColor: string;
    boxShadow: string;
    '&:hover:not([disabled])': {
        backgroundColor: string;
        borderColor: string;
    };
    '&:active:not([disabled])': {
        backgroundColor: string;
        borderColor: string;
    };
    '&:disabled': {
        color: string;
        '[data-component=ButtonCounter]': {
            color: string;
        };
    };
    '&[aria-expanded=true]': {
        backgroundColor: string;
        borderColor: string;
    };
} | {
    color: string;
    backgroundColor: string;
    borderColor: string;
    boxShadow: string;
    '&:hover:not([disabled])': {
        color: string;
        backgroundColor: string;
    };
    '&:focus:not([disabled])': {
        boxShadow: string;
    };
    '&:focus-visible:not([disabled])': {
        boxShadow: string;
    };
    '&:active:not([disabled])': {
        backgroundColor: string;
        boxShadow: string;
    };
    '&:disabled': {
        color: string;
        backgroundColor: string;
        '[data-component=ButtonCounter]': {
            color: string;
        };
    };
    '[data-component=ButtonCounter]': {
        backgroundColor: string;
        color: string;
    };
    '&[aria-expanded=true]': {
        backgroundColor: string;
        boxShadow: string;
    };
} | {
    color: string;
    backgroundColor: string;
    boxShadow: string;
    '&:hover:not([disabled])': {
        color: string;
        backgroundColor: string;
        borderColor: string;
        boxShadow: string;
        '[data-component=ButtonCounter]': {
            backgroundColor: string;
            color: string;
        };
    };
    '&:active:not([disabled])': {
        color: string;
        backgroundColor: string;
        boxShadow: string;
        borderColor: string;
    };
    '&:disabled': {
        color: string;
        backgroundColor: string;
        borderColor: string;
        '[data-component=ButtonCounter]': {
            color: string;
            backgroundColor: string;
        };
    };
    '[data-component=ButtonCounter]': {
        color: string;
        backgroundColor: string;
    };
    '&[aria-expanded=true]': {
        color: string;
        backgroundColor: string;
        boxShadow: string;
        borderColor: string;
    };
} | {
    color: string;
    backgroundColor: string;
    borderColor: string;
    boxShadow: string;
    '&:hover:not([disabled])': {
        backgroundColor: string;
    };
    '&:active:not([disabled])': {
        backgroundColor: string;
    };
    '&:disabled': {
        color: string;
        '[data-component=ButtonCounter]': {
            color: string;
        };
    };
    '&[aria-expanded=true]': {
        backgroundColor: string;
    };
    '&[data-component="IconButton"][data-no-visuals]': {
        color: string;
    };
    '[data-component="trailingAction"]': {
        color: string;
    };
    '[data-component="leadingVisual"]': {
        color: string;
    };
    '&[data-no-visuals]': {
        color: string;
    };
    '&:has([data-component="ButtonCounter"])': {
        color: string;
    };
} | {
    color: string;
    boxShadow: string;
    borderColor: string;
    backgroundColor: string;
    '&:hover:not([disabled])': {
        color: string;
        backgroundColor: string;
        borderColor: string;
        boxShadow: string;
        '[data-component=ButtonCounter]': {
            backgroundColor: string;
            color: string;
        };
    };
    '&:active:not([disabled])': {
        color: string;
        backgroundColor: string;
        boxShadow: string;
        borderColor: string;
    };
    '&:disabled': {
        color: string;
        backgroundColor: string;
        borderColor: string;
        '[data-component=ButtonCounter]': {
            backgroundColor: string;
            color: string;
        };
    };
    '[data-component=ButtonCounter]': {
        backgroundColor: string;
        color: string;
    };
    '&[aria-expanded=true]': {
        color: string;
        backgroundColor: string;
        boxShadow: string;
        borderColor: string;
    };
};
export declare const getBaseStyles: (theme?: Theme) => {
    borderRadius: string;
    border: string;
    borderColor: any;
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    cursor: string;
    appearance: string;
    userSelect: string;
    textDecoration: string;
    textAlign: string;
    display: string;
    alignItems: string;
    justifyContent: string;
    height: string;
    padding: string;
    gap: string;
    minWidth: string;
    transition: string;
    transitionProperty: string;
    '&[href]': {
        display: string;
        '&:hover': {
            textDecoration: string;
        };
    };
    '&:hover': {
        transitionDuration: string;
    };
    '&:active': {
        transition: string;
    };
    '&:disabled': {
        cursor: string;
        boxShadow: string;
    };
    '@media (forced-colors: active)': {
        '&:focus': {
            outline: string;
        };
    };
    '[data-component=ButtonCounter]': {
        fontSize: string;
    };
    '&[data-component=IconButton]': {
        display: string;
        padding: string;
        placeContent: string;
        width: string;
        minWidth: string;
    };
    '&[data-size="small"]': {
        padding: string;
        height: string;
        gap: string;
        fontSize: string;
        '[data-component="text"]': {
            lineHeight: string;
        };
        '[data-component=ButtonCounter]': {
            fontSize: string;
        };
        '[data-component="buttonContent"] > :not(:last-child)': {
            mr: string;
        };
        '&[data-component=IconButton]': {
            width: string;
            padding: string;
        };
    };
    '&[data-size="large"]': {
        padding: string;
        height: string;
        gap: string;
        '[data-component="buttonContent"] > :not(:last-child)': {
            mr: string;
        };
        '&[data-component=IconButton]': {
            width: string;
            padding: string;
        };
    };
};
export declare const getButtonStyles: (theme?: Theme) => {
    '&[data-block="block"]': {
        width: string;
    };
    '[data-component="leadingVisual"]': {
        gridArea: string;
    };
    '[data-component="text"]': {
        gridArea: string;
        lineHeight: string;
        whiteSpace: string;
    };
    '[data-component="trailingVisual"]': {
        gridArea: string;
    };
    '[data-component="trailingAction"]': {
        marginRight: string;
    };
    '[data-component="buttonContent"]': {
        flex: string;
        display: string;
        gridTemplateAreas: string;
        gridTemplateColumns: string;
        alignItems: string;
        alignContent: string;
    };
    '[data-component="buttonContent"] > :not(:last-child)': {
        mr: string;
    };
    borderRadius: string;
    border: string;
    borderColor: any;
    fontFamily: string;
    fontWeight: string;
    fontSize: string;
    cursor: string;
    appearance: string;
    userSelect: string;
    textDecoration: string;
    textAlign: string;
    display: string;
    alignItems: string;
    justifyContent: string;
    height: string;
    padding: string;
    gap: string;
    minWidth: string;
    transition: string;
    transitionProperty: string;
    '&[href]': {
        display: string;
        '&:hover': {
            textDecoration: string;
        };
    };
    '&:hover': {
        transitionDuration: string;
    };
    '&:active': {
        transition: string;
    };
    '&:disabled': {
        cursor: string;
        boxShadow: string;
    };
    '@media (forced-colors: active)': {
        '&:focus': {
            outline: string;
        };
    };
    '[data-component=ButtonCounter]': {
        fontSize: string;
    };
    '&[data-component=IconButton]': {
        display: string;
        padding: string;
        placeContent: string;
        width: string;
        minWidth: string;
    };
    '&[data-size="small"]': {
        padding: string;
        height: string;
        gap: string;
        fontSize: string;
        '[data-component="text"]': {
            lineHeight: string;
        };
        '[data-component=ButtonCounter]': {
            fontSize: string;
        };
        '[data-component="buttonContent"] > :not(:last-child)': {
            mr: string;
        };
        '&[data-component=IconButton]': {
            width: string;
            padding: string;
        };
    };
    '&[data-size="large"]': {
        padding: string;
        height: string;
        gap: string;
        '[data-component="buttonContent"] > :not(:last-child)': {
            mr: string;
        };
        '&[data-component=IconButton]': {
            width: string;
            padding: string;
        };
    };
};
export declare const getAlignContentSize: (alignContent?: AlignContent) => {
    justifyContent: string;
};