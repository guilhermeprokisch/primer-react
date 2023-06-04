import React__default from 'react';
import InputValidation from '../_InputValidation.js';
import { FormControlContext } from './FormControl.js';

const FormControlValidation = ({
  children,
  variant,
  sx,
  id
}) => {
  const {
    validationMessageId
  } = React__default.useContext(FormControlContext);
  return /*#__PURE__*/React__default.createElement(InputValidation, {
    validationStatus: variant,
    id: id || validationMessageId || '',
    sx: sx
  }, children);
};
FormControlValidation.displayName = "FormControlValidation";
var FormControlValidation$1 = FormControlValidation;

export { FormControlValidation$1 as default };
