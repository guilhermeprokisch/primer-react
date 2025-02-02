'use strict';

var React = require('react');
var constants = require('../constants.js');
require('../sx.js');
var Box = require('../Box/Box.js');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var merge__default = /*#__PURE__*/_interopDefault(merge);

/**
 * Visually separates `Item`s or `Group`s in an `ActionList`.
 */
const Divider = ({
  sx = {},
  as = 'li'
}) => {
  return /*#__PURE__*/React__default.default.createElement(Box, {
    as: as,
    "aria-hidden": "true",
    role: "separator",
    sx: merge__default.default({
      height: 1,
      backgroundColor: 'actionListItem.inlineDivider',
      marginTop: theme => `calc(${constants.get('space.2')(theme)} - 1px)`,
      marginBottom: 2,
      listStyle: 'none' // hide the ::marker inserted by browser's stylesheet
    }, sx),
    "data-component": "ActionList.Divider"
  });
};
Divider.displayName = "Divider";

exports.Divider = Divider;
