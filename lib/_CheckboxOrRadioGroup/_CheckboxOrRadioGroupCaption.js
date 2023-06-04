'use strict';

var React = require('react');
var CheckboxOrRadioGroup = require('./CheckboxOrRadioGroup.js');
var Text = require('../Text/Text.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const CheckboxOrRadioGroupCaption = ({
  children,
  sx
}) => {
  const {
    disabled,
    captionId
  } = React__default.default.useContext(CheckboxOrRadioGroup.CheckboxOrRadioGroupContext);
  return /*#__PURE__*/React__default.default.createElement(Text, {
    color: disabled ? 'fg.muted' : 'fg.subtle',
    fontSize: 1,
    id: captionId,
    sx: sx
  }, children);
};
CheckboxOrRadioGroupCaption.displayName = "CheckboxOrRadioGroupCaption";
var CheckboxOrRadioGroupCaption$1 = CheckboxOrRadioGroupCaption;

module.exports = CheckboxOrRadioGroupCaption$1;
