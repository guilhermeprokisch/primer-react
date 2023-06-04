'use strict';

var React = require('react');
require('../sx.js');
var shared = require('./shared.js');
var Box = require('../Box/Box.js');
var Truncate = require('../Truncate/Truncate.js');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var merge__default = /*#__PURE__*/_interopDefault(merge);

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
  } = React__default.default.useContext(shared.ItemContext);
  return variant === 'block' ? /*#__PURE__*/React__default.default.createElement(Box, {
    as: "span",
    sx: merge__default.default({
      ...styles,
      color: disabled ? 'fg.disabled' : 'fg.muted'
    }, sx),
    id: blockDescriptionId
  }, props.children) : /*#__PURE__*/React__default.default.createElement(Truncate, {
    id: inlineDescriptionId,
    sx: merge__default.default({
      ...styles,
      color: disabled ? 'fg.disabled' : 'fg.muted'
    }, sx),
    title: props.children,
    inline: true,
    maxWidth: "100%"
  }, props.children);
};

exports.Description = Description;
