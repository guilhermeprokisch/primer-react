import React__default from 'react';
import { warning } from '../utils/warning.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any

/**
 * Extract components from `children` so we can render them in different places,
 * allowing us to implement components with SSR-compatible slot APIs.
 * Note: We can only extract direct children, not nested ones.
 */
function useSlots(children, config) {
  // Object mapping slot names to their elements
  const slots = mapValues(config, () => undefined);

  // Array of elements that are not slots
  const rest = [];
  const keys = Object.keys(config);
  const values = Object.values(config);

  // eslint-disable-next-line github/array-foreach
  React__default.Children.forEach(children, child => {
    if (! /*#__PURE__*/React__default.isValidElement(child)) {
      rest.push(child);
      return;
    }
    const index = values.findIndex(value => {
      return child.type === value;
    });

    // If the child is not a slot, add it to the `rest` array
    if (index === -1) {
      rest.push(child);
      return;
    }
    const slotKey = keys[index];

    // If slot is already filled, ignore duplicates
    if (slots[slotKey]) {
      process.env.NODE_ENV !== "production" ? warning(true, `Found duplicate "${String(slotKey)}" slot. Only the first will be rendered.`) : void 0;
      return;
    }

    // If the child is a slot, add it to the `slots` object
    slots[slotKey] = child;
  });
  return [slots, rest];
}

/** Map the values of an object */
function mapValues(obj, fn) {
  return Object.keys(obj).reduce((result, key) => {
    result[key] = fn(obj[key]);
    return result;
  }, {});
}

export { useSlots };
