import { BoxProps } from '../Box';
export type FlexProps = BoxProps;
/**
 * @deprecated Use the Box component instead (i.e. <Flex> → <Box display="flex">)
 */
declare const Flex: import("styled-components").StyledComponent<"div", any, import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").TypographyProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").GridProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").BackgroundProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Background<import("styled-system").TLengthStyledSystem>> & import("styled-system").BorderProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Border<import("styled-system").TLengthStyledSystem>> & import("styled-system").PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").ShadowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("..").SxProp, never>;
export default Flex;
