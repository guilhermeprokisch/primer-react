'use strict';

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const StyledTruncate = styled__default.default.div.withConfig({
  displayName: "Truncate__StyledTruncate",
  componentId: "sc-23o1d2-0"
})(["display:", ";overflow:hidden;text-overflow:ellipsis;vertical-align:", ";white-space:nowrap;", " ", " ", ";"], props => props.inline ? 'inline-block' : 'inherit', props => props.inline ? 'top' : 'initial', styledSystem.maxWidth, props => props.expandable ? `&:hover { max-width: 10000px; }` : '', sx.default);
const Truncate = /*#__PURE__*/React__default.default.forwardRef(function Truncate({
  as,
  expandable = false,
  inline = false,
  maxWidth = 125,
  ...rest
}, ref) {
  return /*#__PURE__*/React__default.default.createElement(StyledTruncate, _extends({
    ref: ref,
    as: as,
    expandable: expandable,
    inline: inline,
    maxWidth: maxWidth
  }, rest));
});
if (process.env.NODE_ENV !== "production") {
  Truncate.displayName = 'Truncate';
}
var Truncate$1 = Truncate;

module.exports = Truncate$1;
