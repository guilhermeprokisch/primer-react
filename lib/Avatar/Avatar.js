'use strict';

var React = require('react');
var styled = require('styled-components');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

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
const StyledAvatar = styled__default.default.img.attrs(props => ({
  height: props.size,
  width: props.size
})).withConfig({
  displayName: "Avatar__StyledAvatar",
  componentId: "sc-2lv0r8-0"
})(["display:inline-block;overflow:hidden;line-height:", ";vertical-align:middle;border-radius:", ";box-shadow:0 0 0 1px ", ";", ""], constants.get('lineHeights.condensedUltra'), props => getBorderRadius(props), constants.get('colors.avatar.border'), sx.default);
const Avatar = /*#__PURE__*/React__default.default.forwardRef(function Avatar({
  alt = '',
  size = 20,
  square = false,
  ...rest
}, ref) {
  return /*#__PURE__*/React__default.default.createElement(StyledAvatar, _extends({
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

module.exports = Avatar$1;
