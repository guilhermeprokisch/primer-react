import React__default from 'react';
import InputLabel from '../_InputLabel.js';
import { FormControlContext } from './FormControl.js';

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
  } = React__default.useContext(FormControlContext);

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
  return /*#__PURE__*/React__default.createElement(InputLabel, labelProps, children);
};
FormControlLabel.displayName = "FormControlLabel";
var FormControlLabel$1 = FormControlLabel;

export { FormControlLabel$1 as default };
