'use strict';

var React = require('react');
var _InputLabel = require('../_InputLabel.js');
var FormControl = require('./FormControl.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const FormControlLabel = ({
  as,
  children,
  htmlFor,
  id,
  visuallyHidden,
  sx,
  ...props
}) => {
  const {
    disabled,
    id: formControlId,
    required
  } = React__default.default.useContext(FormControl.FormControlContext);

  /**
   * Ensure we can pass through props correctly, since legend/span accept no defined 'htmlFor'
   */
  const labelProps = as === 'legend' || as === 'span' ? {
    as,
    id,
    visuallyHidden,
    required,
    disabled,
    sx,
    ...props
  } : {
    as,
    id,
    visuallyHidden,
    htmlFor: htmlFor || formControlId,
    required,
    disabled,
    sx,
    ...props
  };
  return /*#__PURE__*/React__default.default.createElement(_InputLabel, labelProps, children);
};
FormControlLabel.displayName = "FormControlLabel";
var FormControlLabel$1 = FormControlLabel;

module.exports = FormControlLabel$1;
