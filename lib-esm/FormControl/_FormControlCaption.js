import React__default from 'react';
import InputCaption from '../_InputCaption.js';
import { FormControlContext } from './FormControl.js';

const FormControlCaption = ({
  children,
  sx,
  id
}) => {
  const {
    captionId,
    disabled
  } = React__default.useContext(FormControlContext);
  return /*#__PURE__*/React__default.createElement(InputCaption, {
    id: id || captionId || '',
    disabled: disabled,
    sx: sx
  }, children);
};
FormControlCaption.displayName = "FormControlCaption";
var FormControlCaption$1 = FormControlCaption;

export { FormControlCaption$1 as default };
