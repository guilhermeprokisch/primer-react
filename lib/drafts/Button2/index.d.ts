/// <reference types="react" />
export type { ButtonProps, IconButtonProps } from './types';
export declare const Button: import("../../utils/polymorphic").ForwardRefComponent<"button", import("./types").ButtonProps> & {
    Counter: ({ children, sx: sxProp, ...props }: import("./ButtonCounter").CounterProps) => JSX.Element;
};
