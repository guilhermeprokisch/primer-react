import React__default from 'react';
import { CheckboxOrRadioGroupContext } from './CheckboxOrRadioGroup.js';
import Text from '../Text/Text.js';

const CheckboxOrRadioGroupCaption = ({
  children,
  sx
}) => {
  const {
    disabled,
    captionId
  } = React__default.useContext(CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React__default.createElement(Text, {
    color: disabled ? 'fg.muted' : 'fg.subtle',
    fontSize: 1,
    id: captionId,
    sx: sx
  }, children);
};
CheckboxOrRadioGroupCaption.displayName = "CheckboxOrRadioGroupCaption";
var CheckboxOrRadioGroupCaption$1 = CheckboxOrRadioGroupCaption;

export { CheckboxOrRadioGroupCaption$1 as default };
