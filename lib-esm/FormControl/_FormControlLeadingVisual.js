import React__default from 'react';
import { get } from '../constants.js';
import { FormControlContext } from './FormControl.js';
import Box from '../Box/Box.js';

const FormControlLeadingVisual = ({
  children,
  sx
}) => {
  const {
    disabled,
    captionId
  } = React__default.useContext(FormControlContext);
  return /*#__PURE__*/React__default.createElement(Box, {
    color: disabled ? 'fg.muted' : 'fg.default',
    sx: {
      '> *': {
        minWidth: captionId ? get('fontSizes.4') : get('fontSizes.2'),
        minHeight: captionId ? get('fontSizes.4') : get('fontSizes.2'),
        fill: 'currentColor'
      },
      ...sx
    },
    ml: 2
  }, children);
};
FormControlLeadingVisual.displayName = "FormControlLeadingVisual";
var FormControlLeadingVisual$1 = FormControlLeadingVisual;

export { FormControlLeadingVisual$1 as default };
