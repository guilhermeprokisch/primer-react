import React__default, { forwardRef, useRef, useState, useEffect, useCallback } from 'react';
import sx from '../sx.js';
import { UnderlineNavContext } from './UnderlineNavContext.js';
import { useResizeObserver } from '../hooks/useResizeObserver.js';
import { useTheme } from '../ThemeProvider.js';
import VisuallyHidden from '../_VisuallyHidden.js';
import { getNavStyles, ulStyles, getDividerStyle, moreBtnStyles, menuStyles, menuItemStyles, GAP } from './styles.js';
import styled from 'styled-components';
import { LoadingCounter } from './LoadingCounter.js';
import { Button } from '../Button/index.js';
import { TriangleDownIcon } from '@primer/octicons-react';
import { useOnEscapePress } from '../hooks/useOnEscapePress.js';
import { useOnOutsideClick } from '../hooks/useOnOutsideClick.js';
import { useId } from '../hooks/useId.js';
import { ActionList } from '../ActionList/index.js';
import { defaultSxProp } from '../utils/defaultSxProp.js';
import Box from '../Box/Box.js';
import CounterLabel from '../CounterLabel/CounterLabel.js';
import merge from 'deepmerge';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// When page is loaded, we don't have ref for the more button as it is not on the DOM yet.
// However, we need to calculate number of possible items when the more button present as well. So using the width of the more button as a constant.
const MORE_BTN_WIDTH = 86;
// The height is needed to make sure we don't have a layout shift when the more button is the only item in the nav.
const MORE_BTN_HEIGHT = 45;

// Needed this because passing a ref using HTMLULListElement to `Box` causes a type error
const NavigationList = styled.ul.withConfig({
  displayName: "UnderlineNav__NavigationList",
  componentId: "sc-3wwkh2-0"
})(["", ";"], sx);
const MoreMenuListItem = styled.li.withConfig({
  displayName: "UnderlineNav__MoreMenuListItem",
  componentId: "sc-3wwkh2-1"
})(["display:flex;align-items:center;height:", "px;"], MORE_BTN_HEIGHT);
const overflowEffect = (navWidth, moreMenuWidth, childArray, childWidthArray, noIconChildWidthArray, updateListAndMenu) => {
  let iconsVisible = true;
  if (childWidthArray.length === 0) {
    updateListAndMenu({
      items: childArray,
      actions: []
    }, iconsVisible);
  }
  const numberOfItemsPossible = calculatePossibleItems(childWidthArray, navWidth);
  const numberOfItemsWithoutIconPossible = calculatePossibleItems(noIconChildWidthArray, navWidth);
  // We need to take more menu width into account when calculating the number of items possible
  const numberOfItemsPossibleWithMoreMenu = calculatePossibleItems(noIconChildWidthArray, navWidth, moreMenuWidth || MORE_BTN_WIDTH);
  const items = [];
  const actions = [];

  // First, we check if we can fit all the items with their icons
  if (childArray.length <= numberOfItemsPossible) {
    items.push(...childArray);
  } else if (childArray.length <= numberOfItemsWithoutIconPossible) {
    // if we can't fit all the items with their icons, we check if we can fit all the items without their icons
    iconsVisible = false;
    items.push(...childArray);
  } else {
    // if we can't fit all the items without their icons, we keep the icons hidden and show the ones that doesn't fit into the list in the overflow menu
    iconsVisible = false;

    /* Below is an accessibiility requirement. Never show only one item in the overflow menu.
     * If there is only one item left to display in the overflow menu according to the calculation,
     * we need to pull another item from the list into the overflow menu.
     */
    const numberOfItemsInMenu = childArray.length - numberOfItemsPossibleWithMoreMenu;
    const numberOfListItems = numberOfItemsInMenu === 1 ? numberOfItemsPossibleWithMoreMenu - 1 : numberOfItemsPossibleWithMoreMenu;
    for (const [index, child] of childArray.entries()) {
      if (index < numberOfListItems) {
        items.push(child);
      } else {
        const ariaCurrent = child.props['aria-current'];
        const isCurrent = Boolean(ariaCurrent) && ariaCurrent !== 'false';
        // We need to make sure to keep the selected item always visible.
        // To do that, we swap the selected item with the last item in the list to make it visible. (When there is at least 1 item in the list to swap.)
        if (isCurrent && numberOfListItems > 0) {
          // If selected item couldn't make in to the list, we swap it with the last item in the list.
          const indexToReplaceAt = numberOfListItems - 1; // because we are replacing the last item in the list
          // splice method modifies the array by removing 1 item here at the given index and replace it with the "child" element then returns the removed item.
          const propsectiveAction = items.splice(indexToReplaceAt, 1, child)[0];
          actions.push(propsectiveAction);
        } else {
          actions.push(child);
        }
      }
    }
  }
  updateListAndMenu({
    items,
    actions
  }, iconsVisible);
};
const getValidChildren = children => {
  return React__default.Children.toArray(children).filter(child => /*#__PURE__*/React__default.isValidElement(child));
};
const calculatePossibleItems = (childWidthArray, navWidth, moreMenuWidth = 0) => {
  const widthToFit = navWidth - moreMenuWidth;
  let breakpoint = childWidthArray.length - 1;
  let sumsOfChildWidth = 0;
  for (const [index, childWidth] of childWidthArray.entries()) {
    if (sumsOfChildWidth > widthToFit) {
      breakpoint = index - 1;
      break;
    } else {
      // The the gap between items into account when calculating the number of items possible
      sumsOfChildWidth = sumsOfChildWidth + childWidth.width + GAP;
    }
  }
  return breakpoint;
};
const UnderlineNav = /*#__PURE__*/forwardRef(({
  as = 'nav',
  align,
  'aria-label': ariaLabel,
  sx: sxProp = defaultSxProp,
  afterSelect,
  variant = 'default',
  loadingCounters = false,
  children
}, forwardedRef) => {
  const backupRef = useRef(null);
  const navRef = forwardedRef !== null && forwardedRef !== void 0 ? forwardedRef : backupRef;
  const listRef = useRef(null);
  const moreMenuRef = useRef(null);
  const moreMenuBtnRef = useRef(null);
  const containerRef = React__default.useRef(null);
  const disclosureWidgetId = useId();
  const {
    theme
  } = useTheme();
  function getItemsWidth(itemText) {
    var _noIconChildWidthArra;
    return ((_noIconChildWidthArra = noIconChildWidthArray.find(item => item.text === itemText)) === null || _noIconChildWidthArra === void 0 ? void 0 : _noIconChildWidthArra.width) || 0;
  }
  const swapMenuItemWithListItem = (prospectiveListItem, indexOfProspectiveListItem, event, callback) => {
    var _listRef$current;
    // get the selected menu item's width
    const widthToFitIntoList = getItemsWidth(prospectiveListItem.props.children);
    // Check if there is any empty space on the right side of the list
    const availableSpace = navRef.current.getBoundingClientRect().width - (((_listRef$current = listRef.current) === null || _listRef$current === void 0 ? void 0 : _listRef$current.getBoundingClientRect().width) || 0);

    // Calculate how many items need to be pulled in to the menu to make room for the selected menu item
    // I.e. if we need to pull 2 items in (index 0 and index 1), breakpoint (index) will return 1.
    const index = getBreakpointForItemSwapping(widthToFitIntoList, availableSpace);
    const indexToSliceAt = responsiveProps.items.length - 1 - index;
    // Form the new list of items
    const itemsLeftInList = [...responsiveProps.items].slice(0, indexToSliceAt);
    const updatedItemList = [...itemsLeftInList, prospectiveListItem];
    // Form the new menu items
    const itemsToAddToMenu = [...responsiveProps.items].slice(indexToSliceAt);
    const updatedMenuItems = [...actions];
    // Add itemsToAddToMenu array's items to the menu at the index of the prospectiveListItem and remove 1 count of items (prospectiveListItem)
    updatedMenuItems.splice(indexOfProspectiveListItem, 1, ...itemsToAddToMenu);
    setSelectedLinkText(prospectiveListItem.props.children);
    callback({
      items: updatedItemList,
      actions: updatedMenuItems
    }, false);
  };
  // How many items do we need to pull in to the menu to make room for the selected menu item.
  function getBreakpointForItemSwapping(widthToFitIntoList, availableSpace) {
    let widthToSwap = 0;
    let breakpoint = 0;
    for (const [index, item] of [...responsiveProps.items].reverse().entries()) {
      widthToSwap += getItemsWidth(item.props.children);
      if (widthToFitIntoList < widthToSwap + availableSpace) {
        breakpoint = index;
        break;
      }
    }
    return breakpoint;
  }
  const [selectedLink, setSelectedLink] = useState(undefined);

  // selectedLinkText is needed to be able set the selected menu item as selectedLink.
  // This is needed because setSelectedLink only accepts ref but at the time of setting selected menu item as selectedLink, its ref as a list item is not available
  const [selectedLinkText, setSelectedLinkText] = useState('');
  // Capture the mouse/keyboard event when a menu item is selected so that we can use it to fire the onSelect callback after the menu item is swapped with the list item
  const [selectEvent, setSelectEvent] = useState(null);
  const [iconsVisible, setIconsVisible] = useState(true);
  const afterSelectHandler = event => {
    if (!event.defaultPrevented) {
      if (typeof afterSelect === 'function') afterSelect(event);
      closeOverlay();
    }
  };
  const [responsiveProps, setResponsiveProps] = useState({
    items: getValidChildren(children),
    actions: []
  });

  /*
   * This is needed to make sure responsiveProps.items and ResponsiveProps.actions are updated when children are changed
   * Particually when an item is selected. It adds 'aria-current="page"' attribute to the child and we need to make sure
   * responsiveProps.items and ResponsiveProps.actions are updated with that attribute
   */
  useEffect(() => {
    const childArray = getValidChildren(children);
    const updatedItems = responsiveProps.items.map(item => {
      return childArray.find(child => child.key === item.key) || item;
    });
    const updatedActions = responsiveProps.actions.map(action => {
      return childArray.find(child => child.key === action.key) || action;
    });
    setResponsiveProps({
      items: updatedItems,
      actions: updatedActions
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  const updateListAndMenu = useCallback((props, displayIcons) => {
    setResponsiveProps(props);
    setIconsVisible(displayIcons);
  }, []);
  const actions = responsiveProps.actions;
  // This is the case where the viewport is too narrow to show any list item with the more menu. In this case, we only show the dropdown
  const onlyMenuVisible = responsiveProps.items.length === 0;
  const [childWidthArray, setChildWidthArray] = useState([]);
  const setChildrenWidth = useCallback(size => {
    setChildWidthArray(arr => {
      const newArr = [...arr, size];
      return newArr;
    });
  }, []);
  const [noIconChildWidthArray, setNoIconChildWidthArray] = useState([]);
  const setNoIconChildrenWidth = useCallback(size => {
    setNoIconChildWidthArray(arr => {
      const newArr = [...arr, size];
      return newArr;
    });
  }, []);
  useResizeObserver(resizeObserverEntries => {
    var _moreMenuRef$current$, _moreMenuRef$current;
    const childArray = getValidChildren(children);
    const navWidth = resizeObserverEntries[0].contentRect.width;
    const moreMenuWidth = (_moreMenuRef$current$ = (_moreMenuRef$current = moreMenuRef.current) === null || _moreMenuRef$current === void 0 ? void 0 : _moreMenuRef$current.getBoundingClientRect().width) !== null && _moreMenuRef$current$ !== void 0 ? _moreMenuRef$current$ : 0;
    navWidth !== 0 && overflowEffect(navWidth, moreMenuWidth, childArray, childWidthArray, noIconChildWidthArray, updateListAndMenu);
  }, navRef);
  if (!ariaLabel) {
    // eslint-disable-next-line no-console
    console.warn('Use the `aria-label` prop to provide an accessible label for assistive technology');
  }
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const closeOverlay = React__default.useCallback(() => {
    setIsWidgetOpen(false);
  }, [setIsWidgetOpen]);
  const focusOnMoreMenuBtn = React__default.useCallback(() => {
    var _moreMenuBtnRef$curre;
    (_moreMenuBtnRef$curre = moreMenuBtnRef.current) === null || _moreMenuBtnRef$curre === void 0 ? void 0 : _moreMenuBtnRef$curre.focus();
  }, []);
  useOnEscapePress(event => {
    if (isWidgetOpen) {
      event.preventDefault();
      closeOverlay();
      focusOnMoreMenuBtn();
    }
  }, [isWidgetOpen]);
  useOnOutsideClick({
    onClickOutside: closeOverlay,
    containerRef,
    ignoreClickRefs: [moreMenuBtnRef]
  });
  const onAnchorClick = useCallback(event => {
    if (event.defaultPrevented || event.button !== 0) {
      return;
    }
    setIsWidgetOpen(isWidgetOpen => !isWidgetOpen);
  }, []);
  return /*#__PURE__*/React__default.createElement(UnderlineNavContext.Provider, {
    value: {
      theme,
      setChildrenWidth,
      setNoIconChildrenWidth,
      selectedLink,
      setSelectedLink,
      selectedLinkText,
      setSelectedLinkText,
      selectEvent,
      afterSelect: afterSelectHandler,
      variant,
      loadingCounters,
      iconsVisible
    }
  }, ariaLabel && /*#__PURE__*/React__default.createElement(VisuallyHidden, {
    as: "h2"
  }, `${ariaLabel} navigation`), /*#__PURE__*/React__default.createElement(Box, {
    as: as,
    sx: merge(getNavStyles(theme, {
      align
    }), sxProp),
    "aria-label": ariaLabel,
    ref: navRef
  }, /*#__PURE__*/React__default.createElement(NavigationList, {
    sx: ulStyles,
    ref: listRef,
    role: "list"
  }, responsiveProps.items, actions.length > 0 && /*#__PURE__*/React__default.createElement(MoreMenuListItem, {
    ref: moreMenuRef
  }, !onlyMenuVisible && /*#__PURE__*/React__default.createElement(Box, {
    sx: getDividerStyle(theme)
  }), /*#__PURE__*/React__default.createElement(Button, {
    ref: moreMenuBtnRef,
    sx: moreBtnStyles,
    "aria-controls": disclosureWidgetId,
    "aria-expanded": isWidgetOpen,
    onClick: onAnchorClick,
    trailingAction: TriangleDownIcon
  }, /*#__PURE__*/React__default.createElement(Box, {
    as: "span"
  }, onlyMenuVisible ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(VisuallyHidden, {
    as: "span"
  }, `${ariaLabel}`, "\xA0"), "Menu") : /*#__PURE__*/React__default.createElement(React__default.Fragment, null, "More", /*#__PURE__*/React__default.createElement(VisuallyHidden, {
    as: "span"
  }, "\xA0", `${ariaLabel} items`)))), /*#__PURE__*/React__default.createElement(ActionList, {
    selectionVariant: "single",
    ref: containerRef,
    id: disclosureWidgetId,
    sx: merge({
      display: isWidgetOpen ? 'block' : 'none'
    }, menuStyles)
  }, actions.map((action, index) => {
    const {
      children: actionElementChildren,
      ...actionElementProps
    } = action.props;
    return /*#__PURE__*/React__default.createElement(ActionList.Item, _extends({}, actionElementProps, {
      key: actionElementChildren,
      as: action.props.as || 'a',
      sx: menuItemStyles,
      onSelect: event => {
        // When there are no items in the list, do not run the swap function as we want to keep everything in the menu.
        !onlyMenuVisible && swapMenuItemWithListItem(action, index, event, updateListAndMenu);
        setSelectEvent(event);
        closeOverlay();
        focusOnMoreMenuBtn();
      }
    }), /*#__PURE__*/React__default.createElement(Box, {
      as: "span",
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, actionElementChildren, loadingCounters ? /*#__PURE__*/React__default.createElement(LoadingCounter, null) : actionElementProps.counter !== undefined && /*#__PURE__*/React__default.createElement(Box, {
      as: "span",
      "data-component": "counter"
    }, /*#__PURE__*/React__default.createElement(CounterLabel, null, actionElementProps.counter))));
  }))))));
});
UnderlineNav.displayName = 'UnderlineNav';

export { UnderlineNav };
