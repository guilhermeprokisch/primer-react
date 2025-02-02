'use strict';

var styled = require('styled-components');
var constants = require('../constants.js');
var sx = require('../sx.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var styled__default = /*#__PURE__*/_interopDefault(styled);

const LabelGroup = styled__default.default.span.withConfig({
  displayName: "LabelGroup",
  componentId: "sc-6tqg8q-0"
})(["& *{margin-right:", ";}& *:last-child{margin-right:0;}", ";"], constants.get('space.1'), sx.default);
var LabelGroup$1 = LabelGroup;

module.exports = LabelGroup$1;
