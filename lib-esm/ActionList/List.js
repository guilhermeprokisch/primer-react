import React__default from 'react';
import styled from 'styled-components';
import sx from '../sx.js';
import { ActionListContainerContext } from './ActionListContainerContext.js';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import { Heading } from './Heading.js';
import { useSlots } from '../hooks/useSlots.js';
import { useId } from '../hooks/useId.js';
import Box from '../Box/Box.js';
import merge from 'deepmerge';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ListContext = /*#__PURE__*/React__default.createContext({});
const ListBox = styled.ul.withConfig({
  displayName: "List__ListBox",
  componentId: "sc-1x7olzq-0"
})(sx);
const List = /*#__PURE__*/React__default.forwardRef(({
  variant = 'inset',
  selectionVariant,
  showDividers = false,
  role,
  sx: sxProp = defaultSxProp,
  ...props
}, forwardedRef) => {
  const outerStyles = {
    paddingY: variant === 'inset' ? 2 : 0
  };
  const innerStyles = {
    margin: 0,
    paddingInlineStart: 0 // reset ul styles
  };

  /** if list is inside a Menu, it will get a role from the Menu */
  const {
    listRole,
    listLabelledBy,
    selectionVariant: containerSelectionVariant // TODO: Remove after DropdownMenu2 deprecation
  } = React__default.useContext(ActionListContainerContext);
  const [slots, rest] = useSlots(props.children, {
    heading: Heading
  });
  const headingId = useId();
  return /*#__PURE__*/React__default.createElement(Box, {
    sx: merge(outerStyles, sxProp)
  }, /*#__PURE__*/React__default.createElement(ListContext.Provider, {
    value: {
      variant,
      selectionVariant: selectionVariant || containerSelectionVariant,
      // @ts-ignore showItemDividers may be passed by some components until next major.
      showDividers: showDividers || !!props.showItemDividers,
      role: role || listRole,
      headingId
    }
  }, slots.heading, /*#__PURE__*/React__default.createElement(ListBox, _extends({
    sx: innerStyles,
    role: role || listRole,
    "aria-labelledby": slots.heading ? headingId : listLabelledBy
  }, props, {
    ref: forwardedRef
  }), rest)));
});
List.displayName = 'ActionList';

export { List, ListContext };
