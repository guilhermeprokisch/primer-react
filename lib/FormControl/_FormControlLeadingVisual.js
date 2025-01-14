'use strict';

var React = require('react');
var constants = require('../constants.js');
var FormControl = require('./FormControl.js');
var Box = require('../Box/Box.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const FormControlLeadingVisual = ({
  children,
  sx
}) => {
  const {
    disabled,
    captionId
  } = React__default.default.useContext(FormControl.FormControlContext);
  return /*#__PURE__*/React__default.default.createElement(Box, {
    color: disabled ? 'fg.muted' : 'fg.default',
    sx: {
      '> *': {
        minWidth: captionId ? constants.get('fontSizes.4') : constants.get('fontSizes.2'),
        minHeight: captionId ? constants.get('fontSizes.4') : constants.get('fontSizes.2'),
        fill: 'currentColor'
      },
      ...sx
    },
    ml: 2
  }, children);
};
FormControlLeadingVisual.displayName = "FormControlLeadingVisual";
var FormControlLeadingVisual$1 = FormControlLeadingVisual;

module.exports = FormControlLeadingVisual$1;
