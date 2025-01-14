import React__default from 'react';
import { CheckIcon } from '@primer/octicons-react';
import { ListContext } from './List.js';
import { LeadingVisualContainer } from './Visuals.js';
import { GroupContext } from './Group.js';

const Selection = ({
  selected
}) => {
  const {
    selectionVariant: groupSelectionVariant
  } = React__default.useContext(GroupContext);
  const {
    selectionVariant: listSelectionVariant
  } = React__default.useContext(ListContext);

  /** selectionVariant in Group can override the selectionVariant in List root */
  /** fallback to selectionVariant from container menu if any (ActionMenu, SelectPanel ) */
  const selectionVariant = groupSelectionVariant !== null && groupSelectionVariant !== void 0 ? groupSelectionVariant : listSelectionVariant;
  if (!selectionVariant) {
    // if selectionVariant is not set on List, but Item is selected
    // fail loudly instead of silently ignoring
    if (selected) {
      throw new Error('For Item to be selected, ActionList needs to have a selectionVariant defined');
    } else {
      return null;
    }
  }
  if (selectionVariant === 'single') {
    return /*#__PURE__*/React__default.createElement(LeadingVisualContainer, null, selected && /*#__PURE__*/React__default.createElement(CheckIcon, null));
  }

  /**
   * selectionVariant is multiple
   * we use a svg instead of an input because there should not
   * be an interactive element inside an option
   * svg copied from primer/css
   */
  return /*#__PURE__*/React__default.createElement(LeadingVisualContainer, {
    sx: {
      rect: {
        fill: selected ? 'accent.fg' : 'canvas.default',
        stroke: selected ? 'accent.fg' : 'border.default',
        shapeRendering: 'auto' // this is a workaround to override global style in github/github, see primer/react#1666
      },

      path: {
        fill: 'fg.onEmphasis',
        boxShadow: 'shadow.small',
        opacity: selected ? 1 : 0
      }
    }
  }, /*#__PURE__*/React__default.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React__default.createElement("rect", {
    x: "2",
    y: "2",
    width: "12",
    height: "12",
    rx: "4"
  }), /*#__PURE__*/React__default.createElement("path", {
    fillRule: "evenodd",
    strokeWidth: "0",
    d: "M4.03231 8.69862C3.84775 8.20646 4.49385 7.77554 4.95539 7.77554C5.41693 7.77554 6.80154 9.85246 6.80154 9.85246C6.80154 9.85246 10.2631 4.314 10.4938 4.08323C10.7246 3.85246 11.8785 4.08323 11.4169 5.00631C11.0081 5.82388 7.26308 11.4678 7.26308 11.4678C7.26308 11.4678 6.80154 12.1602 6.34 11.4678C5.87846 10.7755 4.21687 9.19077 4.03231 8.69862Z"
  })));
};
Selection.displayName = "Selection";

export { Selection };
