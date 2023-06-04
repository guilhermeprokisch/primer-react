import React__default from 'react';
import VisuallyHidden from '../_VisuallyHidden.js';
import { CheckboxOrRadioGroupContext } from './CheckboxOrRadioGroup.js';
import Box from '../Box/Box.js';

const CheckboxOrRadioGroupLabel = ({
  children,
  visuallyHidden = false,
  sx
}) => {
  const {
    required,
    disabled
  } = React__default.useContext(CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React__default.createElement(VisuallyHidden, {
    isVisible: !visuallyHidden,
    title: required ? 'required field' : undefined,
    sx: {
      display: 'block',
      color: disabled ? 'fg.muted' : undefined,
      fontSize: 2,
      ...sx
    }
  }, required ? /*#__PURE__*/React__default.createElement(Box, {
    display: "flex",
    as: "span"
  }, /*#__PURE__*/React__default.createElement(Box, {
    mr: 1
  }, children), /*#__PURE__*/React__default.createElement("span", null, "*")) : children);
};
CheckboxOrRadioGroupLabel.displayName = "CheckboxOrRadioGroupLabel";
var CheckboxOrRadioGroupLabel$1 = CheckboxOrRadioGroupLabel;

export { CheckboxOrRadioGroupLabel$1 as default };
