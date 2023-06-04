'use strict';

var React = require('react');
var _VisuallyHidden = require('../_VisuallyHidden.js');
var CheckboxOrRadioGroup = require('./CheckboxOrRadioGroup.js');
var Box = require('../Box/Box.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const CheckboxOrRadioGroupLabel = ({
  children,
  visuallyHidden = false,
  sx
}) => {
  const {
    required,
    disabled
  } = React__default.default.useContext(CheckboxOrRadioGroup.CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React__default.default.createElement(_VisuallyHidden, {
    isVisible: !visuallyHidden,
    title: required ? 'required field' : undefined,
    sx: {
      display: 'block',
      color: disabled ? 'fg.muted' : undefined,
      fontSize: 2,
      ...sx
    }
  }, required ? /*#__PURE__*/React__default.default.createElement(Box, {
    display: "flex",
    as: "span"
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    mr: 1
  }, children), /*#__PURE__*/React__default.default.createElement("span", null, "*")) : children);
};
CheckboxOrRadioGroupLabel.displayName = "CheckboxOrRadioGroupLabel";
var CheckboxOrRadioGroupLabel$1 = CheckboxOrRadioGroupLabel;

module.exports = CheckboxOrRadioGroupLabel$1;