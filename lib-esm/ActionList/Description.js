import React__default from 'react';
import '../sx.js';
import { ItemContext } from './shared.js';
import Box from '../Box/Box.js';
import Truncate from '../Truncate/Truncate.js';
import merge from 'deepmerge';

const Description = ({
  variant = 'inline',
  sx = {},
  ...props
}) => {
  const styles = {
    fontSize: 0,
    lineHeight: '16px',
    flexGrow: 1,
    flexBasis: 0,
    minWidth: 0,
    marginLeft: variant === 'block' ? 0 : 2
  };
  const {
    blockDescriptionId,
    inlineDescriptionId,
    disabled
  } = React__default.useContext(ItemContext);
  return variant === 'block' ? /*#__PURE__*/React__default.createElement(Box, {
    as: "span",
    sx: merge({
      ...styles,
      color: disabled ? 'fg.disabled' : 'fg.muted'
    }, sx),
    id: blockDescriptionId
  }, props.children) : /*#__PURE__*/React__default.createElement(Truncate, {
    id: inlineDescriptionId,
    sx: merge({
      ...styles,
      color: disabled ? 'fg.disabled' : 'fg.muted'
    }, sx),
    title: props.children,
    inline: true,
    maxWidth: "100%"
  }, props.children);
};

export { Description };
