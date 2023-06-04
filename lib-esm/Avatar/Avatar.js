import React__default from 'react';
import styled from 'styled-components';
import { get } from '../constants.js';
import sx from '../sx.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function getBorderRadius({
  size,
  square
}) {
  if (square) {
    return size && size <= 24 ? '4px' : '6px';
  } else {
    return '50%';
  }
}
const StyledAvatar = styled.img.attrs(props => ({
  height: props.size,
  width: props.size
})).withConfig({
  displayName: "Avatar__StyledAvatar",
  componentId: "sc-2lv0r8-0"
})(["display:inline-block;overflow:hidden;line-height:", ";vertical-align:middle;border-radius:", ";box-shadow:0 0 0 1px ", ";", ""], get('lineHeights.condensedUltra'), props => getBorderRadius(props), get('colors.avatar.border'), sx);
const Avatar = /*#__PURE__*/React__default.forwardRef(function Avatar({
  alt = '',
  size = 20,
  square = false,
  ...rest
}, ref) {
  return /*#__PURE__*/React__default.createElement(StyledAvatar, _extends({
    ref: ref,
    alt: alt,
    size: size,
    square: square
  }, rest));
});
if (process.env.NODE_ENV !== "production") {
  Avatar.displayName = 'Avatar';
}
var Avatar$1 = Avatar;

export { Avatar$1 as default };
