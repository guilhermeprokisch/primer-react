import { IconProps } from '@primer/octicons-react';
import React from 'react';
import { BoxProps } from '../Box';
export type CircleOcticonProps = {
    as?: React.ElementType;
    size?: number;
    icon: React.ComponentType<React.PropsWithChildren<{
        size?: IconProps['size'];
    }>>;
} & BoxProps;
declare function CircleOcticon(props: CircleOcticonProps): JSX.Element;
export default CircleOcticon;
