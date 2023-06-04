import React__default from 'react';
import { ListContext } from './List.js';
import { get } from '../constants.js';
import '../sx.js';
import { useId } from '../hooks/useId.js';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import Box from '../Box/Box.js';
import merge from 'deepmerge';

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
  sx = defaultSxProp,
  ...props
}) => {
  const {
    variant: listVariant,
    headingId: headingId
  } = React__default.useContext(ListContext);
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
  const id = useId(headingId);
  const Title = /*#__PURE__*/React__default.createElement(Box, {
    as: as,
    sx: {
      color: get('colors.fg.muted'),
      fontSize: get('fontSizes.0'),
      fontWeight: get('fontWeights.bold'),
      marginBottom: 0,
      marginTop: 0
    },
    id: id
  }, title);
  const Subtitle = /*#__PURE__*/React__default.createElement(Box, {
    as: "span",
    sx: {
      color: get('colors.fg.muted'),
      fontSize: get('fontSizes.0'),
      fontWeight: get('fontWeights.normal')
    }
  }, subtitle);
  return /*#__PURE__*/React__default.createElement(Box, _extends({
    as: "div",
    sx: merge(styles, sx)
  }, props), Title, subtitle && Subtitle);
};
Heading.displayName = "Heading";

export { Heading };
