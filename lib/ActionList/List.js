'use strict';

var React = require('react');
var styled = require('styled-components');
var sx = require('../sx.js');
var ActionListContainerContext = require('./ActionListContainerContext.js');
var defaultSxProp = require('../utils/defaultSxProp.js');
var Heading = require('./Heading.js');
var useSlots = require('../hooks/useSlots.js');
var useId = require('../hooks/useId.js');
var Box = require('../Box/Box.js');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var merge__default = /*#__PURE__*/_interopDefault(merge);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ListContext = /*#__PURE__*/React__default.default.createContext({});
const ListBox = styled__default.default.ul.withConfig({
  displayName: "List__ListBox",
  componentId: "sc-1x7olzq-0"
})(sx.default);
const List = /*#__PURE__*/React__default.default.forwardRef(({
  variant = 'inset',
  selectionVariant,
  showDividers = false,
  role,
  sx: sxProp = defaultSxProp.defaultSxProp,
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
  } = React__default.default.useContext(ActionListContainerContext.ActionListContainerContext);
  const [slots, rest] = useSlots.useSlots(props.children, {
    heading: Heading.Heading
  });
  const headingId = useId.useId();
  return /*#__PURE__*/React__default.default.createElement(Box, {
    sx: merge__default.default(outerStyles, sxProp)
  }, /*#__PURE__*/React__default.default.createElement(ListContext.Provider, {
    value: {
      variant,
      selectionVariant: selectionVariant || containerSelectionVariant,
      // @ts-ignore showItemDividers may be passed by some components until next major.
      showDividers: showDividers || !!props.showItemDividers,
      role: role || listRole,
      headingId
    }
  }, slots.heading, /*#__PURE__*/React__default.default.createElement(ListBox, _extends({
    sx: innerStyles,
    role: role || listRole,
    "aria-labelledby": slots.heading ? headingId : listLabelledBy
  }, props, {
    ref: forwardedRef
  }), rest)));
});
List.displayName = 'ActionList';

exports.List = List;
exports.ListContext = ListContext;
