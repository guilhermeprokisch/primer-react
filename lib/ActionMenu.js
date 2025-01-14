'use strict';

var React = require('react');
var octiconsReact = require('@primer/octicons-react');
var Divider = require('./ActionList/Divider.js');
var ActionListContainerContext = require('./ActionList/ActionListContainerContext.js');
var index = require('./Button/index.js');
var useId = require('./hooks/useId.js');
var useProvidedStateOrCreate = require('./hooks/useProvidedStateOrCreate.js');
var useProvidedRefOrCreate = require('./hooks/useProvidedRefOrCreate.js');
var useMenuKeyboardNavigation = require('./hooks/useMenuKeyboardNavigation.js');
var AnchoredOverlay = require('./AnchoredOverlay/AnchoredOverlay.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const MenuContext = /*#__PURE__*/React__default.default.createContext({
  renderAnchor: null,
  open: false
});
const Menu = ({
  anchorRef: externalAnchorRef,
  open,
  onOpenChange,
  children
}) => {
  const [combinedOpenState, setCombinedOpenState] = useProvidedStateOrCreate.useProvidedStateOrCreate(open, onOpenChange, false);
  const onOpen = React__default.default.useCallback(() => setCombinedOpenState(true), [setCombinedOpenState]);
  const onClose = React__default.default.useCallback(() => setCombinedOpenState(false), [setCombinedOpenState]);
  const anchorRef = useProvidedRefOrCreate.useProvidedRefOrCreate(externalAnchorRef);
  const anchorId = useId.useId();
  let renderAnchor = null;

  // 🚨 Hack for good API!
  // we strip out Anchor from children and pass it to AnchoredOverlay to render
  // with additional props for accessibility
  const contents = React__default.default.Children.map(children, child => {
    if (child.type === MenuButton || child.type === Anchor) {
      renderAnchor = anchorProps => /*#__PURE__*/React__default.default.cloneElement(child, anchorProps);
      return null;
    }
    return child;
  });
  return /*#__PURE__*/React__default.default.createElement(MenuContext.Provider, {
    value: {
      anchorRef,
      renderAnchor,
      anchorId,
      open: combinedOpenState,
      onOpen,
      onClose
    }
  }, contents);
};
Menu.displayName = "Menu";
const Anchor = /*#__PURE__*/React__default.default.forwardRef(({
  children,
  ...anchorProps
}, anchorRef) => {
  return /*#__PURE__*/React__default.default.cloneElement(children, {
    ...anchorProps,
    ref: anchorRef
  });
});

/** this component is syntactical sugar 🍭 */

const MenuButton = /*#__PURE__*/React__default.default.forwardRef(({
  ...props
}, anchorRef) => {
  return /*#__PURE__*/React__default.default.createElement(Anchor, {
    ref: anchorRef
  }, /*#__PURE__*/React__default.default.createElement(index.Button, _extends({
    type: "button",
    trailingAction: octiconsReact.TriangleDownIcon
  }, props)));
});
const Overlay = ({
  children,
  align = 'start',
  'aria-labelledby': ariaLabelledby,
  ...overlayProps
}) => {
  // we typecast anchorRef as required instead of optional
  // because we know that we're setting it in context in Menu
  const {
    anchorRef,
    renderAnchor,
    anchorId,
    open,
    onOpen,
    onClose
  } = React__default.default.useContext(MenuContext);
  const containerRef = React__default.default.useRef(null);
  useMenuKeyboardNavigation.useMenuKeyboardNavigation(open, onClose, containerRef, anchorRef);
  return /*#__PURE__*/React__default.default.createElement(AnchoredOverlay.AnchoredOverlay, {
    anchorRef: anchorRef,
    renderAnchor: renderAnchor,
    anchorId: anchorId,
    open: open,
    onOpen: onOpen,
    onClose: onClose,
    align: align,
    overlayProps: overlayProps,
    focusZoneSettings: {
      focusOutBehavior: 'wrap'
    }
  }, /*#__PURE__*/React__default.default.createElement("div", {
    ref: containerRef
  }, /*#__PURE__*/React__default.default.createElement(ActionListContainerContext.ActionListContainerContext.Provider, {
    value: {
      container: 'ActionMenu',
      listRole: 'menu',
      listLabelledBy: ariaLabelledby || anchorId,
      selectionAttribute: 'aria-checked',
      // Should this be here?
      afterSelect: onClose
    }
  }, children)));
};
Overlay.displayName = "Overlay";
Menu.displayName = 'ActionMenu';
const ActionMenu = Object.assign(Menu, {
  Button: MenuButton,
  Anchor,
  Overlay,
  Divider: Divider.Divider
});

exports.ActionMenu = ActionMenu;
