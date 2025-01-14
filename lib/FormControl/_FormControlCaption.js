'use strict';

var React = require('react');
var _InputCaption = require('../_InputCaption.js');
var FormControl = require('./FormControl.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const FormControlCaption = ({
  children,
  sx,
  id
}) => {
  const {
    captionId,
    disabled
  } = React__default.default.useContext(FormControl.FormControlContext);
  return /*#__PURE__*/React__default.default.createElement(_InputCaption, {
    id: id || captionId || '',
    disabled: disabled,
    sx: sx
  }, children);
};
FormControlCaption.displayName = "FormControlCaption";
var FormControlCaption$1 = FormControlCaption;

module.exports = FormControlCaption$1;
