import React__default from 'react';
import InputValidation from '../_InputValidation.js';
import { CheckboxOrRadioGroupContext } from './CheckboxOrRadioGroup.js';

const CheckboxOrRadioGroupValidation = ({
  children,
  variant,
  sx
}) => {
  const {
    validationMessageId = ''
  } = React__default.useContext(CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React__default.createElement(InputValidation, {
    validationStatus: variant,
    id: validationMessageId,
    sx: sx
  }, children);
};
CheckboxOrRadioGroupValidation.displayName = "CheckboxOrRadioGroupValidation";
var CheckboxOrRadioGroupValidation$1 = CheckboxOrRadioGroupValidation;

export { CheckboxOrRadioGroupValidation$1 as default };
