import React__default from 'react';
import styled from 'styled-components';
import { width } from 'styled-system';
import { get } from '../constants.js';
import sx from '../sx.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Item = styled.span.withConfig({
  displayName: "ProgressBar__Item",
  componentId: "sc-1jz8j7n-0"
})(["width:", ";background-color:", ";", ";"], props => props.progress ? `${props.progress}%` : 0, get('colors.success.emphasis'), sx);
Item.displayName = 'ProgressBar.Item';
const sizeMap = {
  small: '5px',
  large: '10px',
  default: '8px'
};
const ProgressContainer = styled.span.withConfig({
  displayName: "ProgressBar__ProgressContainer",
  componentId: "sc-1jz8j7n-1"
})(["display:", ";overflow:hidden;background-color:", ";border-radius:", ";height:", ";", " ", ";"], props => props.inline ? 'inline-flex' : 'flex', get('colors.border.default'), get('radii.1'), props => sizeMap[props.barSize || 'default'], width, sx);
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
  return /*#__PURE__*/React__default.createElement(ProgressContainer, _extends({
    barSize: barSize
  }, rest), children !== null && children !== void 0 ? children : /*#__PURE__*/React__default.createElement(Item, {
    progress: progress,
    sx: {
      backgroundColor: bg
    }
  }));
};
ProgressBar.displayName = "ProgressBar";

export { Item, ProgressBar };
