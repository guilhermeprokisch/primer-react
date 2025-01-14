import React__default from 'react';
import { TriangleDownIcon } from '@primer/octicons-react';
import { Divider } from './ActionList/Divider.js';
import { ActionListContainerContext } from './ActionList/ActionListContainerContext.js';
import { Button } from './Button/index.js';
import { useId } from './hooks/useId.js';
import { useProvidedStateOrCreate } from './hooks/useProvidedStateOrCreate.js';
import { useProvidedRefOrCreate } from './hooks/useProvidedRefOrCreate.js';
import { useMenuKeyboardNavigation } from './hooks/useMenuKeyboardNavigation.js';
import { AnchoredOverlay } from './AnchoredOverlay/AnchoredOverlay.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const MenuContext = /*#__PURE__*/React__default.createContext({
  renderAnchor: null,
  open: false
});
const Menu = ({
  anchorRef: externalAnchorRef,
  open,
  onOpenChange,
  children
}) => {
  const [combinedOpenState, setCombinedOpenState] = useProvidedStateOrCreate(open, onOpenChange, false);
  const onOpen = React__default.useCallback(() => setCombinedOpenState(true), [setCombinedOpenState]);
  const onClose = React__default.useCallback(() => setCombinedOpenState(false), [setCombinedOpenState]);
  const anchorRef = useProvidedRefOrCreate(externalAnchorRef);
  const anchorId = useId();
  let renderAnchor = null;

  // 🚨 Hack for good API!
  // we strip out Anchor from children and pass it to AnchoredOverlay to render
  // with additional props for accessibility
  const contents = React__default.Children.map(children, child => {
    if (child.type === MenuButton || child.type === Anchor) {
      renderAnchor = anchorProps => /*#__PURE__*/React__default.cloneElement(child, anchorProps);
      return null;
    }
    return child;
  });
  return /*#__PURE__*/React__default.createElement(MenuContext.Provider, {
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
const Anchor = /*#__PURE__*/React__default.forwardRef(({
  children,
  ...anchorProps
}, anchorRef) => {
  return /*#__PURE__*/React__default.cloneElement(children, {
    ...anchorProps,
    ref: anchorRef
  });
});

/** this component is syntactical sugar 🍭 */

const MenuButton = /*#__PURE__*/React__default.forwardRef(({
  ...props
}, anchorRef) => {
  return /*#__PURE__*/React__default.createElement(Anchor, {
    ref: anchorRef
  }, /*#__PURE__*/React__default.createElement(Button, _extends({
    type: "button",
    trailingAction: TriangleDownIcon
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
  } = React__default.useContext(MenuContext);
  const containerRef = React__default.useRef(null);
  useMenuKeyboardNavigation(open, onClose, containerRef, anchorRef);
  return /*#__PURE__*/React__default.createElement(AnchoredOverlay, {
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
  }, /*#__PURE__*/React__default.createElement("div", {
    ref: containerRef
  }, /*#__PURE__*/React__default.createElement(ActionListContainerContext.Provider, {
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
  Divider
});

export { ActionMenu };
