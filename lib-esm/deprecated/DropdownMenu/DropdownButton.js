import React__default from 'react';
import { TriangleDownIcon } from '@primer/octicons-react';
import Button from '../Button/Button.js';
import Octicon from '../../Octicon/Octicon.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * @deprecated Use Button with Octicons instead. See https://primer.style/react/drafts/Button2#appending-an-icon for more details.
 */
const DropdownButton = /*#__PURE__*/React__default.forwardRef(({
  children,
  ...props
}, ref) => /*#__PURE__*/React__default.createElement(Button, _extends({
  ref: ref,
  type: "button"
}, props), children, /*#__PURE__*/React__default.createElement(Octicon, {
  icon: TriangleDownIcon,
  sx: {
    ml: 1
  }
})));

export { DropdownButton };
