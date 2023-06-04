'use strict';

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Item = styled__default.default.span.withConfig({
  displayName: "ProgressBar__Item",
  componentId: "sc-1jz8j7n-0"
})(["width:", ";background-color:", ";", ";"], props => props.progress ? `${props.progress}%` : 0, constants.get('colors.success.emphasis'), sx.default);
Item.displayName = 'ProgressBar.Item';
const sizeMap = {
  small: '5px',
  large: '10px',
  default: '8px'
};
const ProgressContainer = styled__default.default.span.withConfig({
  displayName: "ProgressBar__ProgressContainer",
  componentId: "sc-1jz8j7n-1"
})(["display:", ";overflow:hidden;background-color:", ";border-radius:", ";height:", ";", " ", ";"], props => props.inline ? 'inline-flex' : 'flex', constants.get('colors.border.default'), constants.get('radii.1'), props => sizeMap[props.barSize || 'default'], styledSystem.width, sx.default);
const ProgressBar = ({
  progress,
  bg = 'success.emphasis',
  barSize = 'default',
  children,
  ...rest
}) => {
  if (children && progress) {
    throw new Error('You should pass `progress` or children, not both.');
  }
  return /*#__PURE__*/React__default.default.createElement(ProgressContainer, _extends({
    barSize: barSize
  }, rest), children !== null && children !== void 0 ? children : /*#__PURE__*/React__default.default.createElement(Item, {
    progress: progress,
    sx: {
      backgroundColor: bg
    }
  }));
};
ProgressBar.displayName = "ProgressBar";

exports.Item = Item;
exports.ProgressBar = ProgressBar;
