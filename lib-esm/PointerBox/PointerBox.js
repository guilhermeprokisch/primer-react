import React__default from 'react';
import { ThemeContext } from 'styled-components';
import Caret from '../Caret.js';
import { get } from '../constants.js';
import Box from '../Box/Box.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function PointerBox(props) {
  // don't destructure these, just grab them
  const themeContext = React__default.useContext(ThemeContext);
  const {
    bg,
    border,
    borderColor,
    theme: themeProp,
    sx
  } = props;
  const {
    caret,
    children,
    ...boxProps
  } = props;
  const {
    bg: sxBg,
    backgroundColor,
    ...sxRest
  } = sx || {};
  const theme = themeProp || themeContext;
  const customBackground = bg || sxBg || backgroundColor;
  const caretProps = {
    bg: bg || (sx === null || sx === void 0 ? void 0 : sx.bg) || (sx === null || sx === void 0 ? void 0 : sx.backgroundColor),
    borderColor: borderColor || (sx === null || sx === void 0 ? void 0 : sx.borderColor),
    borderWidth: border,
    location: caret,
    theme
  };
  const defaultBoxProps = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border.default',
    borderRadius: 2
  };
  return /*#__PURE__*/React__default.createElement(Box, _extends({}, defaultBoxProps, boxProps, {
    sx: {
      ...sxRest,
      '--custom-bg': get(`colors.${customBackground}`)({
        theme
      }),
      backgroundImage: customBackground ? `linear-gradient(var(--custom-bg), var(--custom-bg)), linear-gradient(${theme.colors.canvas.default}, ${theme.colors.canvas.default})` : undefined,
      position: 'relative'
    }
  }), children, /*#__PURE__*/React__default.createElement(Caret, caretProps));
}
PointerBox.displayName = "PointerBox";

export { PointerBox as default };
