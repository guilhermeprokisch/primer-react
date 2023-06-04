'use strict';

var React = require('react');
var _InputValidation = require('../_InputValidation.js');
var CheckboxOrRadioGroup = require('./CheckboxOrRadioGroup.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const CheckboxOrRadioGroupValidation = ({
  children,
  variant,
  sx
}) => {
  const {
    validationMessageId = ''
  } = React__default.default.useContext(CheckboxOrRadioGroup.CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React__default.default.createElement(_InputValidation, {
    validationStatus: variant,
    id: validationMessageId,
    sx: sx
  }, children);
};
CheckboxOrRadioGroupValidation.displayName = "CheckboxOrRadioGroupValidation";
var CheckboxOrRadioGroupValidation$1 = CheckboxOrRadioGroupValidation;

module.exports = CheckboxOrRadioGroupValidation$1;
