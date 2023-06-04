'use strict';

var React = require('react');
var _InputValidation = require('../_InputValidation.js');
var FormControl = require('./FormControl.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const FormControlValidation = ({
  children,
  variant,
  sx,
  id
}) => {
  const {
    validationMessageId
  } = React__default.default.useContext(FormControl.FormControlContext);
  return /*#__PURE__*/React__default.default.createElement(_InputValidation, {
    validationStatus: variant,
    id: id || validationMessageId || '',
    sx: sx
  }, children);
};
FormControlValidation.displayName = "FormControlValidation";
var FormControlValidation$1 = FormControlValidation;

module.exports = FormControlValidation$1;
