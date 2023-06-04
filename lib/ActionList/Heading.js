'use strict';

var React = require('react');
var List = require('./List.js');
var constants = require('../constants.js');
require('../sx.js');
var useId = require('../hooks/useId.js');
var defaultSxProp = require('../utils/defaultSxProp.js');
var Box = require('../Box/Box.js');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var merge__default = /*#__PURE__*/_interopDefault(merge);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Displays the name and description of the ActionList.
 *
 * For visual presentation only. It's hidden from screen readers.
 */
const Heading = ({
  variant,
  title,
  subtitle,
  as = 'h3',
  sx = defaultSxProp.defaultSxProp,
  ...props
}) => {
  const {
    variant: listVariant,
    headingId: headingId
  } = React__default.default.useContext(List.ListContext);
  const styles = {
    paddingY: '6px',
    paddingX: listVariant === 'full' ? 2 : 3,
    fontSize: 0,
    fontWeight: 'bold',
    color: 'fg.muted',
    listStyle: 'none',
    ...(variant === 'filled' && {
      backgroundColor: 'canvas.subtle',
      marginX: 0,
      marginBottom: 2,
      borderTop: '1px solid',
      borderBottom: '1px solid',
      borderColor: 'neutral.muted'
    })
  };
  const id = useId.useId(headingId);
  const Title = /*#__PURE__*/React__default.default.createElement(Box, {
    as: as,
    sx: {
      color: constants.get('colors.fg.muted'),
      fontSize: constants.get('fontSizes.0'),
      fontWeight: constants.get('fontWeights.bold'),
      marginBottom: 0,
      marginTop: 0
    },
    id: id
  }, title);
  const Subtitle = /*#__PURE__*/React__default.default.createElement(Box, {
    as: "span",
    sx: {
      color: constants.get('colors.fg.muted'),
      fontSize: constants.get('fontSizes.0'),
      fontWeight: constants.get('fontWeights.normal')
    }
  }, subtitle);
  return /*#__PURE__*/React__default.default.createElement(Box, _extends({
    as: "div",
    sx: merge__default.default(styles, sx)
  }, props), Title, subtitle && Subtitle);
};
Heading.displayName = "Heading";

exports.Heading = Heading;
