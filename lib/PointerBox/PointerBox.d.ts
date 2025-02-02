/// <reference types="react" />
import { BoxProps } from '../Box';
import { CaretProps } from '../Caret';
import { SxProp } from '../sx';
type MutatedSxProps = {
    sx?: {
        bg?: string;
        backgroundColor?: string;
        borderColor?: string;
    };
} & SxProp;
export type PointerBoxProps = {
    caret?: CaretProps['location'];
    bg?: CaretProps['bg'];
    borderColor?: CaretProps['borderColor'];
    border?: CaretProps['borderWidth'];
} & BoxProps & MutatedSxProps;
declare function PointerBox(props: PointerBoxProps): JSX.Element;
export default PointerBox;
