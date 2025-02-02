import { ChevronDownIcon } from '@primer/octicons-react';
import React__default, { isValidElement } from 'react';
import styled from 'styled-components';
import { ActionList } from '../ActionList/index.js';
import sx from '../sx.js';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import { useId } from '../hooks/useId.js';
import useIsomorphicLayoutEffect from '../utils/useIsomorphicLayoutEffect.js';
import Box from '../Box/Box.js';
import Octicon from '../Octicon/Octicon.js';
import merge from 'deepmerge';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// ----------------------------------------------------------------------------
// NavList

const NavBox = styled.nav.withConfig({
  displayName: "NavList__NavBox",
  componentId: "sc-1c8ygf7-0"
})(sx);
const Root = /*#__PURE__*/React__default.forwardRef(({
  children,
  ...props
}, ref) => {
  return /*#__PURE__*/React__default.createElement(NavBox, _extends({}, props, {
    ref: ref
  }), /*#__PURE__*/React__default.createElement(ActionList, null, children));
});
Root.displayName = 'NavList';

// ----------------------------------------------------------------------------
// NavList.Item

const Item = /*#__PURE__*/React__default.forwardRef(({
  'aria-current': ariaCurrent,
  children,
  sx: sxProp = defaultSxProp,
  ...props
}, ref) => {
  const {
    depth
  } = React__default.useContext(SubNavContext);

  // Get SubNav from children
  const subNav = React__default.Children.toArray(children).find(child => /*#__PURE__*/isValidElement(child) && child.type === SubNav);

  // Get children without SubNav
  const childrenWithoutSubNav = React__default.Children.toArray(children).filter(child => /*#__PURE__*/isValidElement(child) ? child.type !== SubNav : true);

  // Render ItemWithSubNav if SubNav is present
  if (subNav && /*#__PURE__*/isValidElement(subNav) && depth < 1) {
    return /*#__PURE__*/React__default.createElement(ItemWithSubNav, {
      subNav: subNav,
      sx: sxProp
    }, childrenWithoutSubNav);
  }
  return /*#__PURE__*/React__default.createElement(ActionList.LinkItem, _extends({
    ref: ref,
    "aria-current": ariaCurrent,
    active: Boolean(ariaCurrent) && ariaCurrent !== 'false',
    sx: merge({
      paddingLeft: depth > 0 ? 5 : null,
      // Indent sub-items
      fontSize: depth > 0 ? 0 : null,
      // Reduce font size of sub-items
      fontWeight: depth > 0 ? 'normal' : null // Sub-items don't get bolded
    }, sxProp)
  }, props), children);
});
Item.displayName = 'NavList.Item';

// ----------------------------------------------------------------------------
// ItemWithSubNav (internal)

const ItemWithSubNavContext = /*#__PURE__*/React__default.createContext({
  buttonId: '',
  subNavId: '',
  isOpen: false
});

// TODO: ref prop
// TODO: Animate open/close transition
function ItemWithSubNav({
  children,
  subNav,
  sx: sxProp = defaultSxProp
}) {
  const buttonId = useId();
  const subNavId = useId();
  const [isOpen, setIsOpen] = React__default.useState(false);
  const subNavRef = React__default.useRef(null);
  const [containsCurrentItem, setContainsCurrentItem] = React__default.useState(false);
  useIsomorphicLayoutEffect(() => {
    if (subNavRef.current) {
      // Check if SubNav contains current item
      const currentItem = subNavRef.current.querySelector('[aria-current]');
      if (currentItem && currentItem.getAttribute('aria-current') !== 'false') {
        setContainsCurrentItem(true);
        setIsOpen(true);
      }
    }
  }, [subNav]);
  return /*#__PURE__*/React__default.createElement(ItemWithSubNavContext.Provider, {
    value: {
      buttonId,
      subNavId,
      isOpen
    }
  }, /*#__PURE__*/React__default.createElement(Box, {
    as: "li",
    "aria-labelledby": buttonId,
    sx: {
      listStyle: 'none'
    }
  }, /*#__PURE__*/React__default.createElement(ActionList.Item, {
    as: "button",
    id: buttonId,
    "aria-expanded": isOpen,
    "aria-controls": subNavId
    // When the subNav is closed, how should we indicated that the subNav contains the current item?
    ,
    active: !isOpen && containsCurrentItem,
    onClick: () => setIsOpen(open => !open),
    sx: merge({
      fontWeight: containsCurrentItem ? 'bold' : null // Parent item is bold if any of it's sub-items are current
    }, sxProp)
  }, children, /*#__PURE__*/React__default.createElement(ActionList.TrailingVisual, null, /*#__PURE__*/React__default.createElement(Octicon, {
    icon: ChevronDownIcon,
    sx: {
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
    }
  }))), /*#__PURE__*/React__default.createElement("div", {
    ref: subNavRef
  }, subNav)));
}
ItemWithSubNav.displayName = "ItemWithSubNav";
const SubNavContext = /*#__PURE__*/React__default.createContext({
  depth: 0
});

// TODO: ref prop
// NOTE: SubNav must be a direct child of an Item
const SubNav = ({
  children,
  sx: sxProp = defaultSxProp
}) => {
  const {
    buttonId,
    subNavId,
    isOpen
  } = React__default.useContext(ItemWithSubNavContext);
  const {
    depth
  } = React__default.useContext(SubNavContext);
  if (!buttonId || !subNavId) {
    // eslint-disable-next-line no-console
    console.error('NavList.SubNav must be a child of a NavList.Item');
  }
  if (depth > 0) {
    // eslint-disable-next-line no-console
    console.error('NavList.SubNav only supports one level of nesting');
    return null;
  }
  return /*#__PURE__*/React__default.createElement(SubNavContext.Provider, {
    value: {
      depth: depth + 1
    }
  }, /*#__PURE__*/React__default.createElement(Box, {
    as: "ul",
    id: subNavId,
    "aria-labelledby": buttonId,
    sx: merge({
      padding: 0,
      margin: 0,
      display: isOpen ? 'block' : 'none'
    }, sxProp)
  }, children));
};
SubNav.displayName = "SubNav";
SubNav.displayName = 'NavList.SubNav';

// ----------------------------------------------------------------------------
// NavList.LeadingVisual

const LeadingVisual = ActionList.LeadingVisual;
LeadingVisual.displayName = 'NavList.LeadingVisual';

// ----------------------------------------------------------------------------
// NavList.TrailingVisual

const TrailingVisual = ActionList.TrailingVisual;
TrailingVisual.displayName = 'NavList.TrailingVisual';

// ----------------------------------------------------------------------------
// NavList.Divider

const Divider = ActionList.Divider;
Divider.displayName = 'NavList.Divider';

// ----------------------------------------------------------------------------
// NavList.Group

const defaultSx = {};
// TODO: ref prop
const Group = ({
  title,
  children,
  sx: sxProp = defaultSx,
  ...props
}) => {
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ActionList.Divider, {
    sx: {
      '&:first-of-type': {
        display: 'none'
      }
    }
  }), /*#__PURE__*/React__default.createElement(Box, _extends({
    as: "li",
    sx: sxProp
  }, props), title && /*#__PURE__*/React__default.createElement(ActionList.Heading, {
    title: title
  }), /*#__PURE__*/React__default.createElement(Box, {
    as: "ul",
    sx: {
      paddingInlineStart: 0
    }
  }, children)));
};
Group.displayName = 'NavList.Group';

// ----------------------------------------------------------------------------
// Export

const NavList = Object.assign(Root, {
  Item,
  SubNav,
  LeadingVisual,
  TrailingVisual,
  Divider,
  Group
});

export { NavList };
