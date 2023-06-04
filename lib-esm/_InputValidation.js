import { CheckCircleFillIcon, AlertFillIcon } from '@primer/octicons-react';
import React__default from 'react';
import Text from './Text/Text.js';
import Box from './Box/Box.js';

const validationIconMap = {
  success: CheckCircleFillIcon,
  error: AlertFillIcon,
  warning: AlertFillIcon
};
const validationColorMap = {
  success: 'success.fg',
  error: 'danger.fg',
  warning: 'attention.fg'
};
const InputValidation = ({
  children,
  id,
  validationStatus,
  sx
}) => {
  const IconComponent = validationStatus ? validationIconMap[validationStatus] : undefined;
  const fgColor = validationStatus ? validationColorMap[validationStatus] : undefined;

  // TODO: use `text-caption-lineHeight` token as a custom property when it's available
  // then, we can move this all to CSS and use `calc` to get our height values
  const captionLineHeight = 16 / 12;
  const iconSize = 12;
  const iconBoxMinHeight = iconSize * captionLineHeight;
  return /*#__PURE__*/React__default.createElement(Text, {
    sx: {
      fontSize: 0,
      fontWeight: 'bold',
      alignItems: 'start',
      color: fgColor,
      display: 'flex',
      a: {
        color: 'currentColor',
        textDecoration: 'underline'
      },
      ...sx
    },
    "aria-live": "polite"
  }, IconComponent && /*#__PURE__*/React__default.createElement(Box, {
    as: "span",
    alignItems: "center",
    display: "flex",
    minHeight: iconBoxMinHeight,
    mr: 1,
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default.createElement(IconComponent, {
    size: iconSize,
    fill: "currentColor"
  })), /*#__PURE__*/React__default.createElement(Box, {
    as: "span",
    id: id,
    sx: {
      lineHeight: captionLineHeight
    }
  }, children));
};
InputValidation.displayName = "InputValidation";
var InputValidation$1 = InputValidation;

export { InputValidation$1 as default };