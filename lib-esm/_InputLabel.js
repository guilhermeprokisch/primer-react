import React__default from 'react';
import VisuallyHidden from './_VisuallyHidden.js';
import Box from './Box/Box.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const InputLabel = ({
  children,
  disabled,
  htmlFor,
  id,
  required,
  visuallyHidden,
  sx,
  as = 'label',
  ...props
}) => {
  return /*#__PURE__*/React__default.createElement(VisuallyHidden, _extends({
    isVisible: !visuallyHidden,
    as: as /* This assertion is clearly wrong, but it's the only way TS will allow the htmlFor prop to be possibly defined */,

    htmlFor: htmlFor,
    id: id,
    sx: {
      fontWeight: 'bold',
      fontSize: 1,
      display: 'block',
      color: disabled ? 'fg.muted' : 'fg.default',
      cursor: disabled ? 'not-allowed' : 'pointer',
      alignSelf: 'flex-start',
      ...sx
    }
  }, props), required ? /*#__PURE__*/React__default.createElement(Box, {
    display: "flex",
    as: "span"
  }, /*#__PURE__*/React__default.createElement(Box, {
    mr: 1
  }, children), /*#__PURE__*/React__default.createElement("span", null, "*")) : children);
};
InputLabel.displayName = "InputLabel";
var InputLabel$1 = InputLabel;

export { InputLabel$1 as default };
