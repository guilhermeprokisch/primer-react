import React__default from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { TYPOGRAPHY, COMMON } from './constants.js';
import { useTheme, defaultColorMode } from './ThemeProvider.js';
import 'focus-visible';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const GlobalStyle = createGlobalStyle(["*{box-sizing:border-box;}body{margin:0;}table{border-collapse:collapse;}input{color-scheme:", ";}[role=\"button\"]:focus:not(:focus-visible):not(.focus-visible),[role=\"tabpanel\"][tabindex=\"0\"]:focus:not(:focus-visible):not(.focus-visible),button:focus:not(:focus-visible):not(.focus-visible),summary:focus:not(:focus-visible):not(.focus-visible),a:focus:not(:focus-visible):not(.focus-visible){outline:none;box-shadow:none;}[tabindex=\"0\"]:focus:not(:focus-visible):not(.focus-visible),details-dialog:focus:not(:focus-visible):not(.focus-visible){outline:none;}"], props => props.colorScheme);
const Base = styled.div.withConfig({
  displayName: "BaseStyles__Base",
  componentId: "sc-nfjs56-0"
})(["", ";", ";"], TYPOGRAPHY, COMMON);
function BaseStyles(props) {
  const {
    children,
    color = 'fg.default',
    fontFamily = 'normal',
    lineHeight = 'default',
    ...rest
  } = props;
  const {
    colorScheme,
    colorMode,
    dayScheme,
    nightScheme
  } = useTheme();

  /**
   * We need to map valid primer/react color modes onto valid color modes for primer/primitives
   * valid color modes for primer/primitives: auto | light | dark
   * valid color modes for primer/primer: auto | day | night | light | dark
   */

  const primerColorModeToPrimitiveColorMode = {
    auto: 'auto',
    light: 'light',
    dark: 'dark',
    day: 'light',
    night: 'dark'
  };
  return /*#__PURE__*/React__default.createElement(Base, _extends({}, rest, {
    color: color,
    fontFamily: fontFamily,
    lineHeight: lineHeight,
    "data-portal-root": true,
    "data-color-mode": primerColorModeToPrimitiveColorMode[colorMode || defaultColorMode],
    "data-light-theme": dayScheme,
    "data-dark-theme": nightScheme
  }), /*#__PURE__*/React__default.createElement(GlobalStyle, {
    colorScheme: colorScheme !== null && colorScheme !== void 0 && colorScheme.includes('dark') ? 'dark' : 'light'
  }), children);
}
BaseStyles.displayName = "BaseStyles";

export { BaseStyles as default };
