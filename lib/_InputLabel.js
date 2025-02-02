'use strict';

var React = require('react');
var _VisuallyHidden = require('./_VisuallyHidden.js');
var Box = require('./Box/Box.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const InputLabel = ({
  children,
  disabled,
  htmlFor,
  id,
  required,
  visuallyHidden,
  sx,
  as = 'label',
  ...props
}) => {
  return /*#__PURE__*/React__default.default.createElement(_VisuallyHidden, _extends({
    isVisible: !visuallyHidden,
    as: as /* This assertion is clearly wrong, but it's the only way TS will allow the htmlFor prop to be possibly defined */,

    htmlFor: htmlFor,
    id: id,
    sx: {
      fontWeight: 'bold',
      fontSize: 1,
      display: 'block',
      color: disabled ? 'fg.muted' : 'fg.default',
      cursor: disabled ? 'not-allowed' : 'pointer',
      alignSelf: 'flex-start',
      ...sx
    }
  }, props), required ? /*#__PURE__*/React__default.default.createElement(Box, {
    display: "flex",
    as: "span"
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    mr: 1
  }, children), /*#__PURE__*/React__default.default.createElement("span", null, "*")) : children);
};
InputLabel.displayName = "InputLabel";
var InputLabel$1 = InputLabel;

module.exports = InputLabel$1;
