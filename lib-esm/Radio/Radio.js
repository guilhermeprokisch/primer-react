import styled from 'styled-components';
import React__default, { useContext } from 'react';
import sx from '../sx.js';
import { RadioGroupContext } from '../RadioGroup/RadioGroup.js';
import getGlobalFocusStyles from '../_getGlobalFocusStyles.js';
import { get } from '../constants.js';
import { sharedCheckboxAndRadioStyles } from '../_sharedCheckboxAndRadioStyles.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const StyledRadio = styled.input.withConfig({
  displayName: "Radio__StyledRadio",
  componentId: "sc-1tx0ht9-0"
})(["", ";border-radius:var(--borderRadius-full,100vh);transition:background-color,border-color 80ms cubic-bezier(0.33,1,0.68,1);&:checked{border-color:", ";border-width:var(--base-size-4,4px);&:disabled{cursor:not-allowed;border-color:", ";}}", ";@media (forced-colors:active){background-color:canvastext;border-color:canvastext;}", ""], sharedCheckboxAndRadioStyles, get('colors.accent.fg'), get('colors.fg.muted'), getGlobalFocusStyles(), sx);

/**
 * An accessible, native radio component for selecting one option from a list.
 */
const Radio = /*#__PURE__*/React__default.forwardRef(({
  checked,
  disabled,
  name: nameProp,
  onChange,
  sx: sxProp,
  required,
  validationStatus,
  value,
  ...rest
}, ref) => {
  const radioGroupContext = useContext(RadioGroupContext);
  const handleOnChange = e => {
    (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.onChange) && radioGroupContext.onChange(e);
    onChange && onChange(e);
  };
  const name = nameProp || (radioGroupContext === null || radioGroupContext === void 0 ? void 0 : radioGroupContext.name);
  if (!name) {
    // eslint-disable-next-line no-console
    console.warn('A radio input must have a `name` attribute. Pass `name` as a prop directly to each Radio, or nest them in a `RadioGroup` component with a `name` prop');
  }
  return /*#__PURE__*/React__default.createElement(StyledRadio, _extends({
    type: "radio",
    value: value,
    name: name,
    ref: ref,
    disabled: disabled,
    checked: checked,
    "aria-checked": checked ? 'true' : 'false',
    required: required,
    "aria-required": required ? 'true' : 'false',
    "aria-invalid": validationStatus === 'error' ? 'true' : 'false',
    sx: sxProp,
    onChange: handleOnChange
  }, rest));
});
Radio.displayName = 'Radio';
var Radio$1 = Radio;

export { Radio$1 as default };
