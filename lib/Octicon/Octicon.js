'use strict';

var React = require('react');
var styled = require('styled-components');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Icon = /*#__PURE__*/React__default.default.forwardRef((props, ref) => {
  const {
    icon: IconComponent,
    ...rest
  } = props;
  return /*#__PURE__*/React__default.default.createElement(IconComponent, _extends({}, rest, {
    ref: ref
  }));
});
const Octicon = styled__default.default(Icon).withConfig({
  displayName: "Octicon",
  componentId: "sc-9kayk9-0"
})(["", ""], ({
  color,
  sx: sxProp
}) => sx.default({
  sx: {
    color,
    ...sxProp
  }
}));
var Octicon$1 = Octicon;

module.exports = Octicon$1;
