'use strict';

var React = require('react');
var createSlots = require('../deprecated/utils/create-slots.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

const ItemContext = /*#__PURE__*/React__default.default.createContext({});
const getVariantStyles = (variant, disabled) => {
  if (disabled) {
    return {
      color: 'primer.fg.disabled',
      iconColor: 'primer.fg.disabled',
      annotationColor: 'primer.fg.disabled'
    };
  }
  switch (variant) {
    case 'danger':
      return {
        color: 'danger.fg',
        iconColor: 'danger.fg',
        annotationColor: 'fg.muted',
        hoverColor: 'actionListItem.danger.hoverText'
      };
    default:
      return {
        color: 'fg.default',
        iconColor: 'fg.muted',
        annotationColor: 'fg.muted',
        hoverColor: 'fg.default'
      };
  }
};
createSlots(['Heading', 'LeadingVisual', 'InlineDescription', 'BlockDescription', 'TrailingVisual']);
const TEXT_ROW_HEIGHT = '20px'; // custom value off the scale

exports.ItemContext = ItemContext;
exports.TEXT_ROW_HEIGHT = TEXT_ROW_HEIGHT;
exports.getVariantStyles = getVariantStyles;
