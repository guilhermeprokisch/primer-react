import React__default from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { get } from '../constants.js';
import sx from '../sx.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const xlargeSize = '32px';
const tokenSizes = {
  small: '16px',
  medium: '20px',
  large: '24px',
  extralarge: xlargeSize,
  xlarge: xlargeSize
};
const defaultTokenSize = 'medium';
const isTokenInteractive = ({
  as = 'span',
  onClick,
  onFocus,
  tabIndex = -1,
  disabled
}) => {
  if (disabled) {
    return false;
  }
  return Boolean(onFocus || onClick || tabIndex > -1 || ['a', 'button'].includes(as));
};
const xlargeVariantStyles = {
  fontSize: 1,
  height: tokenSizes.xlarge,
  lineHeight: tokenSizes.xlarge,
  paddingLeft: 3,
  paddingRight: 3,
  paddingTop: 0,
  paddingBottom: 0
};
const variants = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: 0,
      height: tokenSizes.small,
      // without setting lineHeight to match height, the "x" appears vertically mis-aligned
      lineHeight: tokenSizes.small,
      paddingLeft: 1,
      paddingRight: 1
    },
    medium: {
      fontSize: 0,
      height: tokenSizes.medium,
      lineHeight: tokenSizes.medium,
      paddingLeft: 2,
      paddingRight: 2
    },
    large: {
      fontSize: 0,
      height: tokenSizes.large,
      lineHeight: tokenSizes.large,
      paddingLeft: 2,
      paddingRight: 2
    },
    extralarge: xlargeVariantStyles,
    xlarge: xlargeVariantStyles
  }
});
const StyledTokenBase = styled.span.withConfig({
  displayName: "TokenBase__StyledTokenBase",
  componentId: "sc-1ju9l7y-0"
})(["align-items:center;border-radius:999px;cursor:", ";display:inline-flex;font-weight:", ";font-family:inherit;text-decoration:none;position:relative;white-space:nowrap;", " ", ""], props => isTokenInteractive(props) ? 'pointer' : 'auto', get('fontWeights.bold'), variants, sx);
const TokenBase = /*#__PURE__*/React__default.forwardRef(({
  onRemove,
  onKeyDown,
  id,
  size = defaultTokenSize,
  ...rest
}, forwardedRef) => {
  return /*#__PURE__*/React__default.createElement(StyledTokenBase, _extends({
    onKeyDown: event => {
      onKeyDown && onKeyDown(event);
      if ((event.key === 'Backspace' || event.key === 'Delete') && onRemove) {
        onRemove();
      }
    },
    id: id === null || id === void 0 ? void 0 : id.toString(),
    size: size
  }, rest, {
    ref: forwardedRef
  }));
});
var TokenBase$1 = TokenBase;

export { TokenBase$1 as default, defaultTokenSize, isTokenInteractive, tokenSizes };
