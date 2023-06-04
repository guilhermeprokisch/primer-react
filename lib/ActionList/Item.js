'use strict';

var React = require('react');
var styled = require('styled-components');
var useId = require('../hooks/useId.js');
var useSlots = require('../hooks/useSlots.js');
var sx = require('../sx.js');
var ThemeProvider = require('../ThemeProvider.js');
var defaultSxProp = require('../utils/defaultSxProp.js');
var ActionListContainerContext = require('./ActionListContainerContext.js');
var Description = require('./Description.js');
var List = require('./List.js');
var Selection = require('./Selection.js');
var shared = require('./shared.js');
var Visuals = require('./Visuals.js');
var Group = require('./Group.js');
var Box = require('../Box/Box.js');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);
var merge__default = /*#__PURE__*/_interopDefault(merge);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const LiBox = styled__default.default.li.withConfig({
  displayName: "Item__LiBox",
  componentId: "sc-yeql7o-0"
})(sx.default);
const Item = /*#__PURE__*/React__default.default.forwardRef(({
  variant = 'default',
  disabled = false,
  selected = undefined,
  active = false,
  onSelect: onSelectUser,
  sx: sxProp = defaultSxProp.defaultSxProp,
  id,
  role,
  _PrivateItemWrapper,
  ...props
}, forwardedRef) => {
  var _slots$description, _slots$description2, _slots$description3;
  const [slots, childrenWithoutSlots] = useSlots.useSlots(props.children, {
    leadingVisual: Visuals.LeadingVisual,
    trailingVisual: Visuals.TrailingVisual,
    description: Description.Description
  });
  const {
    variant: listVariant,
    showDividers,
    selectionVariant: listSelectionVariant
  } = React__default.default.useContext(List.ListContext);
  const {
    container,
    afterSelect,
    selectionAttribute
  } = React__default.default.useContext(ActionListContainerContext.ActionListContainerContext);
  const {
    selectionVariant: groupSelectionVariant
  } = React__default.default.useContext(Group.GroupContext);
  const onSelect = React__default.default.useCallback((event, afterSelect) => {
    if (typeof onSelectUser === 'function') onSelectUser(event);
    if (event.defaultPrevented) return;
    if (typeof afterSelect === 'function') afterSelect();
  }, [onSelectUser]);
  const selectionVariant = groupSelectionVariant ? groupSelectionVariant : listSelectionVariant;

  /** Infer item role based on the container */
  let itemRole;
  if (container === 'ActionMenu' || container === 'DropdownMenu') {
    if (selectionVariant === 'single') itemRole = 'menuitemradio';else if (selectionVariant === 'multiple') itemRole = 'menuitemcheckbox';else itemRole = 'menuitem';
  }
  const {
    theme
  } = ThemeProvider.useTheme();
  const activeStyles = {
    fontWeight: 'bold',
    bg: 'actionListItem.default.selectedBg',
    '&::after': {
      position: 'absolute',
      top: 'calc(50% - 12px)',
      left: -2,
      width: '4px',
      height: '24px',
      content: '""',
      bg: 'accent.fg',
      borderRadius: 2
    }
  };
  const styles = {
    position: 'relative',
    display: 'flex',
    paddingX: 2,
    fontSize: 1,
    paddingY: '6px',
    // custom value off the scale
    lineHeight: shared.TEXT_ROW_HEIGHT,
    minHeight: 5,
    marginX: listVariant === 'inset' ? 2 : 0,
    borderRadius: listVariant === 'inset' ? 2 : 0,
    transition: 'background 33.333ms linear',
    color: shared.getVariantStyles(variant, disabled).color,
    cursor: 'pointer',
    '&[aria-disabled]': {
      cursor: 'not-allowed'
    },
    // Button reset styles (to support as="button")
    appearance: 'none',
    background: 'unset',
    border: 'unset',
    width: 'calc(100% - 16px)',
    fontFamily: 'unset',
    textAlign: 'unset',
    marginY: 'unset',
    '@media (hover: hover) and (pointer: fine)': {
      ':hover:not([aria-disabled])': {
        backgroundColor: `actionListItem.${variant}.hoverBg`,
        color: shared.getVariantStyles(variant, disabled).hoverColor
      },
      '&:focus-visible, > a:focus-visible': {
        outline: 'none',
        border: `2 solid`,
        boxShadow: `0 0 0 2px ${theme === null || theme === void 0 ? void 0 : theme.colors.accent.emphasis}`
      },
      ':active:not([aria-disabled])': {
        backgroundColor: `actionListItem.${variant}.activeBg`,
        color: shared.getVariantStyles(variant, disabled).hoverColor
      }
    },
    '@media (forced-colors: active)': {
      ':focus': {
        // Support for Windows high contrast https://sarahmhigley.com/writing/whcm-quick-tips
        outline: 'solid 1px transparent !important'
      }
    },
    /** Divider styles */
    '[data-component="ActionList.Item--DividerContainer"]': {
      position: 'relative'
    },
    '[data-component="ActionList.Item--DividerContainer"]::before': {
      content: '" "',
      display: 'block',
      position: 'absolute',
      width: '100%',
      top: '-7px',
      border: '0 solid',
      borderTopWidth: showDividers ? `1px` : '0',
      borderColor: 'var(--divider-color, transparent)'
    },
    // show between 2 items
    ':not(:first-of-type)': {
      '--divider-color': theme === null || theme === void 0 ? void 0 : theme.colors.actionListItem.inlineDivider
    },
    // hide divider after dividers & group header, with higher importance!
    '[data-component="ActionList.Divider"] + &': {
      '--divider-color': 'transparent !important'
    },
    // hide border on current and previous item
    '&:hover:not([aria-disabled]), &:focus:not([aria-disabled]), &[data-focus-visible-added]:not([aria-disabled])': {
      '--divider-color': 'transparent'
    },
    '&:hover:not([aria-disabled]) + &, &:focus:not([aria-disabled]) + &, &[data-focus-visible-added] + li': {
      '--divider-color': 'transparent'
    },
    ...(active ? activeStyles : {})
  };
  const clickHandler = React__default.default.useCallback(event => {
    if (disabled) return;
    onSelect(event, afterSelect);
  }, [onSelect, disabled, afterSelect]);
  const keyPressHandler = React__default.default.useCallback(event => {
    if (disabled) return;
    if ([' ', 'Enter'].includes(event.key)) {
      onSelect(event, afterSelect);
    }
  }, [onSelect, disabled, afterSelect]);

  // use props.id if provided, otherwise generate one.
  const labelId = useId.useId(id);
  const inlineDescriptionId = useId.useId(id && `${id}--inline-description`);
  const blockDescriptionId = useId.useId(id && `${id}--block-description`);
  const ItemWrapper = _PrivateItemWrapper || React__default.default.Fragment;
  const menuItemProps = {
    onClick: clickHandler,
    onKeyPress: keyPressHandler,
    'aria-disabled': disabled ? true : undefined,
    tabIndex: disabled ? undefined : 0,
    'aria-labelledby': `${labelId} ${slots.description && slots.description.props.variant !== 'block' ? inlineDescriptionId : ''}`,
    'aria-describedby': ((_slots$description = slots.description) === null || _slots$description === void 0 ? void 0 : _slots$description.props.variant) === 'block' ? blockDescriptionId : undefined,
    ...(selectionAttribute && {
      [selectionAttribute]: selected
    }),
    role: role || itemRole
  };
  const containerProps = _PrivateItemWrapper ? {
    role: role || itemRole ? 'none' : undefined
  } : menuItemProps;
  const wrapperProps = _PrivateItemWrapper ? menuItemProps : {};
  return /*#__PURE__*/React__default.default.createElement(shared.ItemContext.Provider, {
    value: {
      variant,
      disabled,
      inlineDescriptionId,
      blockDescriptionId
    }
  }, /*#__PURE__*/React__default.default.createElement(LiBox, _extends({
    ref: forwardedRef,
    sx: merge__default.default(styles, sxProp)
  }, containerProps, props), /*#__PURE__*/React__default.default.createElement(ItemWrapper, wrapperProps, /*#__PURE__*/React__default.default.createElement(Selection.Selection, {
    selected: selected
  }), slots.leadingVisual, /*#__PURE__*/React__default.default.createElement(Box, {
    "data-component": "ActionList.Item--DividerContainer",
    sx: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React__default.default.createElement(ConditionalBox, {
    if: Boolean(slots.trailingVisual),
    sx: {
      display: 'flex',
      flexGrow: 1
    }
  }, /*#__PURE__*/React__default.default.createElement(ConditionalBox, {
    if: !!slots.description && slots.description.props.variant !== 'block',
    sx: {
      display: 'flex',
      flexGrow: 1,
      alignItems: 'baseline',
      minWidth: 0
    }
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    as: "span",
    id: labelId,
    sx: {
      flexGrow: slots.description && slots.description.props.variant !== 'block' ? 0 : 1,
      fontWeight: slots.description && slots.description.props.variant !== 'block' ? 'bold' : 'normal'
    }
  }, childrenWithoutSlots), ((_slots$description2 = slots.description) === null || _slots$description2 === void 0 ? void 0 : _slots$description2.props.variant) !== 'block' ? slots.description : null), slots.trailingVisual), ((_slots$description3 = slots.description) === null || _slots$description3 === void 0 ? void 0 : _slots$description3.props.variant) === 'block' ? slots.description : null))));
});
Item.displayName = 'ActionList.Item';
const ConditionalBox = props => {
  const {
    if: condition,
    ...rest
  } = props;
  if (condition) return /*#__PURE__*/React__default.default.createElement(Box, rest, props.children);else return /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, props.children);
};

exports.Item = Item;