import React__default from 'react';
import { get } from '../constants.js';
import '../sx.js';
import Box from '../Box/Box.js';
import merge from 'deepmerge';

/**
 * Visually separates `Item`s or `Group`s in an `ActionList`.
 */
const Divider = ({
  sx = {},
  as = 'li'
}) => {
  return /*#__PURE__*/React__default.createElement(Box, {
    as: as,
    "aria-hidden": "true",
    role: "separator",
    sx: merge({
      height: 1,
      backgroundColor: 'actionListItem.inlineDivider',
      marginTop: theme => `calc(${get('space.2')(theme)} - 1px)`,
      marginBottom: 2,
      listStyle: 'none' // hide the ::marker inserted by browser's stylesheet
    }, sx),
    "data-component": "ActionList.Divider"
  });
};
Divider.displayName = "Divider";

export { Divider };
