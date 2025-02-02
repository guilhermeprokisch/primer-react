import React__default from 'react';
import styled from 'styled-components';
import ValidationAnimationContainer from '../_ValidationAnimationContainer.js';
import { get } from '../constants.js';
import CheckboxOrRadioGroupCaption from './_CheckboxOrRadioGroupCaption.js';
import CheckboxOrRadioGroupLabel from './_CheckboxOrRadioGroupLabel.js';
import CheckboxOrRadioGroupValidation from './_CheckboxOrRadioGroupValidation.js';
import VisuallyHidden from '../_VisuallyHidden.js';
import { useSlots } from '../hooks/useSlots.js';
import Box from '../Box/Box.js';
import { useSSRSafeId } from '@react-aria/ssr';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CheckboxOrRadioGroupContext = /*#__PURE__*/React__default.createContext({});
const Body = styled.div.withConfig({
  displayName: "CheckboxOrRadioGroup__Body",
  componentId: "sc-1qo75yk-0"
})(["display:flex;flex-direction:column;list-style:none;margin:0;padding:0;> * + *{margin-top:", ";}"], get('space.2'));
const CheckboxOrRadioGroup = ({
  'aria-labelledby': ariaLabelledby,
  children,
  disabled = false,
  id: idProp,
  required = false,
  sx
}) => {
  const [slots, rest] = useSlots(children, {
    caption: CheckboxOrRadioGroupCaption,
    label: CheckboxOrRadioGroupLabel,
    validation: CheckboxOrRadioGroupValidation
  });
  const labelChild = React__default.Children.toArray(children).find(child => /*#__PURE__*/React__default.isValidElement(child) && child.type === CheckboxOrRadioGroupLabel);
  const validationChild = React__default.Children.toArray(children).find(child => /*#__PURE__*/React__default.isValidElement(child) && child.type === CheckboxOrRadioGroupValidation ? child : null);
  const captionChild = React__default.Children.toArray(children).find(child => /*#__PURE__*/React__default.isValidElement(child) && child.type === CheckboxOrRadioGroupCaption ? child : null);
  const id = useSSRSafeId(idProp);
  const validationMessageId = validationChild ? `${id}-validationMessage` : undefined;
  const captionId = captionChild ? `${id}-caption` : undefined;
  if (!labelChild && !ariaLabelledby) {
    // eslint-disable-next-line no-console
    console.warn('A choice group must be labelled using a `CheckboxOrRadioGroup.Label` child, or by passing `aria-labelledby` to the CheckboxOrRadioGroup component.');
  }
  const isLegendVisible = /*#__PURE__*/React__default.isValidElement(labelChild) && !labelChild.props.visuallyHidden;
  return /*#__PURE__*/React__default.createElement(CheckboxOrRadioGroupContext.Provider, {
    value: {
      disabled,
      required,
      captionId,
      validationMessageId
    }
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Box, _extends({
    border: "none",
    margin: 0,
    mb: validationChild ? 2 : undefined,
    padding: 0
  }, labelChild && {
    as: 'fieldset',
    disabled
  }, {
    sx: sx
  }), labelChild ?
  /*#__PURE__*/
  /*
    Placing the caption text and validation text in the <legend> provides a better user
    experience for more screenreaders.
     Reference: https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/
  */
  React__default.createElement(Box, {
    as: "legend",
    mb: isLegendVisible ? 2 : undefined,
    padding: 0
  }, slots.label, slots.caption, /*#__PURE__*/React__default.isValidElement(slots.validation) && slots.validation.props.children && /*#__PURE__*/React__default.createElement(VisuallyHidden, null, slots.validation.props.children)) :
  /*
    If CheckboxOrRadioGroup.Label wasn't passed as a child, we don't render a <legend>
    but we still want to render a caption
  */
  slots.caption, /*#__PURE__*/React__default.createElement(Body, !labelChild && {
    ['aria-labelledby']: ariaLabelledby,
    ['aria-describedby']: [validationMessageId, captionId].filter(Boolean).join(' '),
    as: 'div',
    role: 'group'
  }, React__default.Children.toArray(rest).filter(child => /*#__PURE__*/React__default.isValidElement(child)))), validationChild && /*#__PURE__*/React__default.createElement(ValidationAnimationContainer
  // If we have CheckboxOrRadioGroup.Label as a child, we render a screenreader-accessible validation message in the <legend>
  , {
    "aria-hidden": Boolean(labelChild),
    show: true
  }, slots.validation)));
};
CheckboxOrRadioGroup.displayName = "CheckboxOrRadioGroup";
var CheckboxOrRadioGroup$1 = Object.assign(CheckboxOrRadioGroup, {
  Caption: CheckboxOrRadioGroupCaption,
  Label: CheckboxOrRadioGroupLabel,
  Validation: CheckboxOrRadioGroupValidation
});

export { CheckboxOrRadioGroupContext, CheckboxOrRadioGroup$1 as default };
