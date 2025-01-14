import React__default from 'react';
import { Slot } from './ChoiceFieldset.js';
import Text from '../../Text/Text.js';

const ChoiceFieldsetDescription = ({
  children
}) => /*#__PURE__*/React__default.createElement(Slot, {
  name: "Description"
}, ({
  disabled
}) => /*#__PURE__*/React__default.createElement(Text, {
  color: disabled ? 'fg.muted' : 'fg.default',
  fontSize: 1
}, children));
ChoiceFieldsetDescription.displayName = "ChoiceFieldsetDescription";
var ChoiceFieldsetDescription$1 = ChoiceFieldsetDescription;

export { ChoiceFieldsetDescription$1 as default };
