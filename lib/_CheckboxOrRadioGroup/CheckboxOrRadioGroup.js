'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var _ValidationAnimationContainer = require('../_ValidationAnimationContainer.js');
var constants = require('../constants.js');
var _CheckboxOrRadioGroupCaption = require('./_CheckboxOrRadioGroupCaption.js');
var _CheckboxOrRadioGroupLabel = require('./_CheckboxOrRadioGroupLabel.js');
var _CheckboxOrRadioGroupValidation = require('./_CheckboxOrRadioGroupValidation.js');
var _VisuallyHidden = require('../_VisuallyHidden.js');
var useSlots = require('../hooks/useSlots.js');
var Box = require('../Box/Box.js');
var ssr = require('@react-aria/ssr');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const CheckboxOrRadioGroupContext = /*#__PURE__*/React__default.default.createContext({});
const Body = styled__default.default.div.withConfig({
  displayName: "CheckboxOrRadioGroup__Body",
  componentId: "sc-1qo75yk-0"
})(["display:flex;flex-direction:column;list-style:none;margin:0;padding:0;> * + *{margin-top:", ";}"], constants.get('space.2'));
const CheckboxOrRadioGroup = ({
  'aria-labelledby': ariaLabelledby,
  children,
  disabled = false,
  id: idProp,
  required = false,
  sx
}) => {
  const [slots, rest] = useSlots.useSlots(children, {
    caption: _CheckboxOrRadioGroupCaption,
    label: _CheckboxOrRadioGroupLabel,
    validation: _CheckboxOrRadioGroupValidation
  });
  const labelChild = React__default.default.Children.toArray(children).find(child => /*#__PURE__*/React__default.default.isValidElement(child) && child.type === _CheckboxOrRadioGroupLabel);
  const validationChild = React__default.default.Children.toArray(children).find(child => /*#__PURE__*/React__default.default.isValidElement(child) && child.type === _CheckboxOrRadioGroupValidation ? child : null);
  const captionChild = React__default.default.Children.toArray(children).find(child => /*#__PURE__*/React__default.default.isValidElement(child) && child.type === _CheckboxOrRadioGroupCaption ? child : null);
  const id = ssr.useSSRSafeId(idProp);
  const validationMessageId = validationChild ? `${id}-validationMessage` : undefined;
  const captionId = captionChild ? `${id}-caption` : undefined;
  if (!labelChild && !ariaLabelledby) {
    // eslint-disable-next-line no-console
    console.warn('A choice group must be labelled using a `CheckboxOrRadioGroup.Label` child, or by passing `aria-labelledby` to the CheckboxOrRadioGroup component.');
  }
  const isLegendVisible = /*#__PURE__*/React__default.default.isValidElement(labelChild) && !labelChild.props.visuallyHidden;
  return /*#__PURE__*/React__default.default.createElement(CheckboxOrRadioGroupContext.Provider, {
    value: {
      disabled,
      required,
      captionId,
      validationMessageId
    }
  }, /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement(Box, _extends({
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
  React__default.default.createElement(Box, {
    as: "legend",
    mb: isLegendVisible ? 2 : undefined,
    padding: 0
  }, slots.label, slots.caption, /*#__PURE__*/React__default.default.isValidElement(slots.validation) && slots.validation.props.children && /*#__PURE__*/React__default.default.createElement(_VisuallyHidden, null, slots.validation.props.children)) :
  /*
    If CheckboxOrRadioGroup.Label wasn't passed as a child, we don't render a <legend>
    but we still want to render a caption
  */
  slots.caption, /*#__PURE__*/React__default.default.createElement(Body, !labelChild && {
    ['aria-labelledby']: ariaLabelledby,
    ['aria-describedby']: [validationMessageId, captionId].filter(Boolean).join(' '),
    as: 'div',
    role: 'group'
  }, React__default.default.Children.toArray(rest).filter(child => /*#__PURE__*/React__default.default.isValidElement(child)))), validationChild && /*#__PURE__*/React__default.default.createElement(_ValidationAnimationContainer
  // If we have CheckboxOrRadioGroup.Label as a child, we render a screenreader-accessible validation message in the <legend>
  , {
    "aria-hidden": Boolean(labelChild),
    show: true
  }, slots.validation)));
};
CheckboxOrRadioGroup.displayName = "CheckboxOrRadioGroup";
var CheckboxOrRadioGroup$1 = Object.assign(CheckboxOrRadioGroup, {
  Caption: _CheckboxOrRadioGroupCaption,
  Label: _CheckboxOrRadioGroupLabel,
  Validation: _CheckboxOrRadioGroupValidation
});

exports.CheckboxOrRadioGroupContext = CheckboxOrRadioGroupContext;
exports.default = CheckboxOrRadioGroup$1;
