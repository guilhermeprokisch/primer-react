import React__default from 'react';
import styled from 'styled-components';
import sx from '../sx.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Icon = /*#__PURE__*/React__default.forwardRef((props, ref) => {
  const {
    icon: IconComponent,
    ...rest
  } = props;
  return /*#__PURE__*/React__default.createElement(IconComponent, _extends({}, rest, {
    ref: ref
  }));
});
const Octicon = styled(Icon).withConfig({
  displayName: "Octicon",
  componentId: "sc-9kayk9-0"
})(["", ""], ({
  color,
  sx: sxProp
}) => sx({
  sx: {
    color,
    ...sxProp
  }
}));
var Octicon$1 = Octicon;

export { Octicon$1 as default };
