import { ChevronDownIcon, ChevronRightIcon, FileDirectoryOpenFillIcon, FileDirectoryFillIcon } from '@primer/octicons-react';
import classnames from 'classnames';
import React__default, { useCallback, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { ConfirmationDialog } from '../Dialog/ConfirmationDialog.js';
import VisuallyHidden from '../_VisuallyHidden.js';
import { get } from '../constants.js';
import { useControllableState } from '../hooks/useControllableState.js';
import { useId } from '../hooks/useId.js';
import useSafeTimeout from '../hooks/useSafeTimeout.js';
import { useSlots } from '../hooks/useSlots.js';
import sx from '../sx.js';
import { getAccessibleName } from './shared.js';
import { useRovingTabIndex, getFirstChildElement } from './useRovingTabIndex.js';
import { useTypeahead } from './useTypeahead.js';
import Spinner from '../Spinner/Spinner.js';
import Text from '../Text/Text.js';

// ----------------------------------------------------------------------------
// Context

const RootContext = /*#__PURE__*/React__default.createContext({
  announceUpdate: () => {},
  expandedStateCache: {
    current: new Map()
  }
});
const ItemContext = /*#__PURE__*/React__default.createContext({
  itemId: '',
  level: 1,
  isSubTreeEmpty: false,
  setIsSubTreeEmpty: () => {},
  isExpanded: false,
  setIsExpanded: () => {},
  leadingVisualId: '',
  trailingVisualId: ''
});

// ----------------------------------------------------------------------------
// TreeView

const UlBox = styled.ul.withConfig({
  displayName: "TreeView__UlBox",
  componentId: "sc-4ex6b6-0"
})(["list-style:none;padding:0;margin:0;.PRIVATE_TreeView-item{outline:none;&:focus-visible > div,&.focus-visible > div{box-shadow:inset 0 0 0 2px ", ";@media (forced-colors:active){outline:2px solid HighlightText;outline-offset:-2;}}}.PRIVATE_TreeView-item-container{--level:1;--toggle-width:1rem;position:relative;display:grid;grid-template-columns:calc(calc(var(--level) - 1) * (var(--toggle-width) / 2)) var(--toggle-width) 1fr;grid-template-areas:'spacer toggle content';width:100%;min-height:2rem;font-size:", ";color:", ";border-radius:", ";cursor:pointer;&:hover{background-color:", ";@media (forced-colors:active){outline:2px solid transparent;outline-offset:-2px;}}@media (pointer:coarse){--toggle-width:1.5rem;min-height:2.75rem;}&:has(.PRIVATE_TreeView-item-skeleton):hover{background-color:transparent;cursor:default;@media (forced-colors:active){outline:none;}}}&[data-omit-spacer='true'] .PRIVATE_TreeView-item-container{grid-template-columns:0 0 1fr;}.PRIVATE_TreeView-item[aria-current='true'] > .PRIVATE_TreeView-item-container{background-color:", ";&::after{content:'';position:absolute;top:calc(50% - 0.75rem);left:-", ";width:0.25rem;height:1.5rem;background-color:", ";border-radius:", ";@media (forced-colors:active){background-color:HighlightText;}}}.PRIVATE_TreeView-item-toggle{grid-area:toggle;display:flex;align-items:center;justify-content:center;height:100%;color:", ";}.PRIVATE_TreeView-item-toggle--hover:hover{background-color:", ";}.PRIVATE_TreeView-item-toggle--end{border-top-left-radius:", ";border-bottom-left-radius:", ";}.PRIVATE_TreeView-item-content{grid-area:content;display:flex;align-items:center;height:100%;padding:0 ", ";gap:", ";}.PRIVATE_TreeView-item-content-text{flex:1 1 auto;width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}.PRIVATE_TreeView-item-visual{display:flex;color:", ";}.PRIVATE_TreeView-item-level-line{width:100%;height:100%;border-right:1px solid;border-color:", ";}@media (hover:hover){.PRIVATE_TreeView-item-level-line{border-color:transparent;}&:hover .PRIVATE_TreeView-item-level-line,&:focus-within .PRIVATE_TreeView-item-level-line{border-color:", ";}}.PRIVATE_TreeView-directory-icon{display:grid;color:", ";}.PRIVATE_VisuallyHidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}", ""], get(`colors.accent.fg`), get('fontSizes.1'), get('colors.fg.default'), get('radii.2'), get('colors.actionListItem.default.hoverBg'), get('colors.actionListItem.default.selectedBg'), get('space.2'), get('colors.accent.fg'), get('radii.2'), get('colors.fg.muted'), get('colors.treeViewItem.chevron.hoverBg'), get('radii.2'), get('radii.2'), get('space.2'), get('space.2'), get('colors.fg.muted'), get('colors.border.subtle'), get('colors.border.subtle'), get('colors.treeViewItem.directory.fill'), sx);
const Root = ({
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  children,
  flat
}) => {
  const containerRef = React__default.useRef(null);
  const mouseDownRef = React__default.useRef(false);
  const [ariaLiveMessage, setAriaLiveMessage] = React__default.useState('');
  const announceUpdate = React__default.useCallback(message => {
    setAriaLiveMessage(message);
  }, []);
  const onMouseDown = useCallback(() => {
    mouseDownRef.current = true;
  }, []);
  useEffect(() => {
    function onMouseUp() {
      mouseDownRef.current = false;
    }
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
  useRovingTabIndex({
    containerRef,
    mouseDownRef
  });
  useTypeahead({
    containerRef,
    onFocusChange: element => {
      if (element instanceof HTMLElement) {
        element.focus();
      }
    }
  });
  const expandedStateCache = React__default.useRef(null);
  if (expandedStateCache.current === null) {
    expandedStateCache.current = new Map();
  }
  return /*#__PURE__*/React__default.createElement(RootContext.Provider, {
    value: {
      announceUpdate,
      expandedStateCache
    }
  }, /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(VisuallyHidden, {
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true"
  }, ariaLiveMessage), /*#__PURE__*/React__default.createElement(UlBox, {
    ref: containerRef,
    role: "tree",
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledby,
    "data-omit-spacer": flat,
    onMouseDown: onMouseDown
  }, children)));
};
Root.displayName = "Root";
Root.displayName = 'TreeView';

// ----------------------------------------------------------------------------
// TreeView.Item

const Item = /*#__PURE__*/React__default.forwardRef(({
  id: itemId,
  containIntrinsicSize,
  current: isCurrentItem = false,
  defaultExpanded,
  expanded,
  onExpandedChange,
  onSelect,
  children
}, ref) => {
  const [slots, rest] = useSlots(children, {
    leadingVisual: LeadingVisual,
    trailingVisual: TrailingVisual
  });
  const {
    expandedStateCache
  } = React__default.useContext(RootContext);
  const labelId = useId();
  const leadingVisualId = useId();
  const trailingVisualId = useId();
  const [isExpanded, setIsExpanded] = useControllableState({
    name: itemId,
    // If the item was previously mounted, it's expanded state might be cached.
    // We check the cache first, and then fall back to the defaultExpanded prop.
    // If defaultExpanded is not provided, we default to false unless the item
    // is the current item, in which case we default to true.
    defaultValue: () => {
      var _ref, _expandedStateCache$c, _expandedStateCache$c2;
      return (_ref = (_expandedStateCache$c = (_expandedStateCache$c2 = expandedStateCache.current) === null || _expandedStateCache$c2 === void 0 ? void 0 : _expandedStateCache$c2.get(itemId)) !== null && _expandedStateCache$c !== void 0 ? _expandedStateCache$c : defaultExpanded) !== null && _ref !== void 0 ? _ref : isCurrentItem;
    },
    value: expanded,
    onChange: onExpandedChange
  });
  const {
    level
  } = React__default.useContext(ItemContext);
  const {
    hasSubTree,
    subTree,
    childrenWithoutSubTree
  } = useSubTree(rest);
  const [isSubTreeEmpty, setIsSubTreeEmpty] = React__default.useState(!hasSubTree);
  const [isFocused, setIsFocused] = React__default.useState(false);

  // Set the expanded state and cache it
  const setIsExpandedWithCache = React__default.useCallback(newIsExpanded => {
    var _expandedStateCache$c3;
    setIsExpanded(newIsExpanded);
    (_expandedStateCache$c3 = expandedStateCache.current) === null || _expandedStateCache$c3 === void 0 ? void 0 : _expandedStateCache$c3.set(itemId, newIsExpanded);
  }, [itemId, setIsExpanded, expandedStateCache]);

  // Expand or collapse the subtree
  const toggle = React__default.useCallback(event => {
    setIsExpandedWithCache(!isExpanded);
    event === null || event === void 0 ? void 0 : event.stopPropagation();
  }, [isExpanded, setIsExpandedWithCache]);
  const handleKeyDown = React__default.useCallback(event => {
    switch (event.key) {
      case 'Enter':
        if (onSelect) {
          onSelect(event);
        } else {
          toggle(event);
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        event.stopPropagation();
        setIsExpandedWithCache(true);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        event.stopPropagation();
        setIsExpandedWithCache(false);
        break;
    }
  }, [onSelect, setIsExpandedWithCache, toggle]);
  return /*#__PURE__*/React__default.createElement(ItemContext.Provider, {
    value: {
      itemId,
      level: level + 1,
      isSubTreeEmpty,
      setIsSubTreeEmpty,
      isExpanded,
      setIsExpanded: setIsExpandedWithCache,
      leadingVisualId,
      trailingVisualId
    }
  }, /*#__PURE__*/React__default.createElement("li", {
    className: "PRIVATE_TreeView-item",
    ref: ref,
    tabIndex: 0,
    id: itemId,
    role: "treeitem",
    "aria-labelledby": labelId,
    "aria-describedby": `${leadingVisualId} ${trailingVisualId}`,
    "aria-level": level,
    "aria-expanded": isSubTreeEmpty ? undefined : isExpanded,
    "aria-current": isCurrentItem ? 'true' : undefined,
    "aria-selected": isFocused ? 'true' : 'false',
    onKeyDown: handleKeyDown,
    onFocus: event => {
      var _event$currentTarget$;
      // Scroll the first child into view when the item receives focus
      (_event$currentTarget$ = event.currentTarget.firstElementChild) === null || _event$currentTarget$ === void 0 ? void 0 : _event$currentTarget$.scrollIntoView({
        block: 'nearest',
        inline: 'nearest'
      });

      // Set the focused state
      setIsFocused(true);

      // Prevent focus event from bubbling up to parent items
      event.stopPropagation();
    },
    onBlur: () => setIsFocused(false)
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "PRIVATE_TreeView-item-container",
    style: {
      // @ts-ignore CSS custom property
      '--level': level,
      contentVisibility: containIntrinsicSize ? 'auto' : undefined,
      containIntrinsicSize
    },
    onClick: event => {
      if (onSelect) {
        onSelect(event);
      } else {
        toggle(event);
      }
    },
    onAuxClick: event => {
      if (onSelect && event.button === 1) {
        onSelect(event);
      }
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      gridArea: 'spacer',
      display: 'flex'
    }
  }, /*#__PURE__*/React__default.createElement(LevelIndicatorLines, {
    level: level
  })), hasSubTree ?
  /*#__PURE__*/
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  React__default.createElement("div", {
    className: classnames('PRIVATE_TreeView-item-toggle', onSelect && 'PRIVATE_TreeView-item-toggle--hover', level === 1 && 'PRIVATE_TreeView-item-toggle--end'),
    onClick: event => {
      if (onSelect) {
        toggle(event);
      }
    }
  }, isExpanded ? /*#__PURE__*/React__default.createElement(ChevronDownIcon, {
    size: 12
  }) : /*#__PURE__*/React__default.createElement(ChevronRightIcon, {
    size: 12
  })) : null, /*#__PURE__*/React__default.createElement("div", {
    id: labelId,
    className: "PRIVATE_TreeView-item-content"
  }, slots.leadingVisual, /*#__PURE__*/React__default.createElement("span", {
    className: "PRIVATE_TreeView-item-content-text"
  }, childrenWithoutSubTree), slots.trailingVisual)), subTree));
});

/** Lines to indicate the depth of an item in a TreeView */
const LevelIndicatorLines = ({
  level
}) => {
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: '100%',
      display: 'flex'
    }
  }, Array.from({
    length: level - 1
  }).map((_, index) => /*#__PURE__*/React__default.createElement("div", {
    key: index,
    className: "PRIVATE_TreeView-item-level-line"
  })));
};
LevelIndicatorLines.displayName = "LevelIndicatorLines";
Item.displayName = 'TreeView.Item';

// ----------------------------------------------------------------------------
// TreeView.SubTree

const SubTree = ({
  count,
  state,
  children
}) => {
  const {
    announceUpdate
  } = React__default.useContext(RootContext);
  const {
    itemId,
    isExpanded,
    isSubTreeEmpty,
    setIsSubTreeEmpty
  } = React__default.useContext(ItemContext);
  const loadingItemRef = React__default.useRef(null);
  const ref = React__default.useRef(null);
  const [loadingFocused, setLoadingFocused] = React__default.useState(false);
  const previousState = usePreviousValue(state);
  const {
    safeSetTimeout
  } = useSafeTimeout();
  React__default.useEffect(() => {
    // If `state` is undefined, we're working in a synchronous context and need
    // to detect if the sub-tree has content. If `state === 'done` then we're
    // working in an asynchronous context and need to see if there is content
    // that has been loaded in.
    if (state === undefined || state === 'done') {
      if (!isSubTreeEmpty && !children) {
        setIsSubTreeEmpty(true);
      } else if (isSubTreeEmpty && children) {
        setIsSubTreeEmpty(false);
      }
    }
  }, [state, isSubTreeEmpty, setIsSubTreeEmpty, children]);

  // Handle transition from loading to done state
  React__default.useEffect(() => {
    if (previousState === 'loading' && state === 'done') {
      var _ref$current;
      const parentElement = document.getElementById(itemId);
      if (!parentElement) return;

      // Announce update to screen readers
      const parentName = getAccessibleName(parentElement);
      if ((_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.childElementCount) {
        announceUpdate(`${parentName} content loaded`);
      } else {
        announceUpdate(`${parentName} is empty`);
      }

      // Move focus to the first child if the loading indicator
      // was focused when the async items finished loading
      if (loadingFocused) {
        const firstChild = getFirstChildElement(parentElement);
        if (firstChild) {
          safeSetTimeout(() => {
            firstChild.focus();
          });
        } else {
          safeSetTimeout(() => {
            parentElement.focus();
          });
        }
        setLoadingFocused(false);
      }
    }
  }, [loadingFocused, previousState, state, itemId, announceUpdate, ref, safeSetTimeout]);

  // Track focus on the loading indicator
  React__default.useEffect(() => {
    function handleFocus() {
      setLoadingFocused(true);
    }
    function handleBlur(event) {
      // Skip blur events that are caused by the element being removed from the DOM.
      // This can happen when the loading indicator is focused when async items are
      // done loading and the loading indicator is removed from the DOM.
      // If `loadingFocused` is `true` when `state` is `"done"` then the loading indicator
      // was focused when the async items finished loading and we need to move focus to the
      // first child.
      if (!event.relatedTarget) return;
      setLoadingFocused(false);
    }
    const loadingElement = loadingItemRef.current;
    if (!loadingElement) return;
    loadingElement.addEventListener('focus', handleFocus);
    loadingElement.addEventListener('blur', handleBlur);
    return () => {
      loadingElement.removeEventListener('focus', handleFocus);
      loadingElement.removeEventListener('blur', handleBlur);
    };
  }, [loadingItemRef, state]);
  if (!isExpanded) {
    return null;
  }
  return /*#__PURE__*/React__default.createElement("ul", {
    role: "group",
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
    // @ts-ignore Box doesn't have type support for `ref` used in combination with `as`
    ,
    ref: ref
  }, state === 'loading' ? /*#__PURE__*/React__default.createElement(LoadingItem, {
    ref: loadingItemRef,
    count: count
  }) : children);
};
SubTree.displayName = "SubTree";
SubTree.displayName = 'TreeView.SubTree';
function usePreviousValue(value) {
  const ref = React__default.useRef(value);
  React__default.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
const shimmer = keyframes(["from{mask-position:200%;}to{mask-position:0%;}"]);
const SkeletonItem = styled.span.attrs({
  className: 'PRIVATE_TreeView-item-skeleton'
}).withConfig({
  displayName: "TreeView__SkeletonItem",
  componentId: "sc-4ex6b6-1"
})(["display:flex;align-items:center;column-gap:0.5rem;height:2rem;@media (pointer:coarse){height:2.75rem;}@media (prefers-reduced-motion:no-preference){mask-image:linear-gradient(75deg,#000 30%,rgba(0,0,0,0.65) 80%);mask-size:200%;animation:", ";animation-duration:1s;animation-iteration-count:infinite;}&::before{content:'';display:block;width:1rem;height:1rem;background-color:", ";border-radius:3px;@media (forced-colors:active){outline:1px solid transparent;outline-offset:-1px;}}&::after{content:'';display:block;width:var(--tree-item-loading-width,67%);height:1rem;background-color:", ";border-radius:3px;@media (forced-colors:active){outline:1px solid transparent;outline-offset:-1px;}}&:nth-of-type(5n + 1){--tree-item-loading-width:67%;}&:nth-of-type(5n + 2){--tree-item-loading-width:47%;}&:nth-of-type(5n + 3){--tree-item-loading-width:73%;}&:nth-of-type(5n + 4){--tree-item-loading-width:64%;}&:nth-of-type(5n + 5){--tree-item-loading-width:50%;}"], shimmer, get('colors.neutral.subtle'), get('colors.neutral.subtle'));
const LoadingItem = /*#__PURE__*/React__default.forwardRef(({
  count
}, ref) => {
  const itemId = useId();
  if (count) {
    return /*#__PURE__*/React__default.createElement(Item, {
      id: itemId,
      ref: ref
    }, Array.from({
      length: count
    }).map((_, i) => {
      return /*#__PURE__*/React__default.createElement(SkeletonItem, {
        "aria-hidden": true,
        key: i
      });
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "PRIVATE_VisuallyHidden"
    }, "Loading ", count, " items"));
  }
  return /*#__PURE__*/React__default.createElement(Item, {
    id: itemId,
    ref: ref
  }, /*#__PURE__*/React__default.createElement(LeadingVisual, null, /*#__PURE__*/React__default.createElement(Spinner, {
    size: "small"
  })), /*#__PURE__*/React__default.createElement(Text, {
    sx: {
      color: 'fg.muted'
    }
  }, "Loading..."));
});
function useSubTree(children) {
  return React__default.useMemo(() => {
    const subTree = React__default.Children.toArray(children).find(child => /*#__PURE__*/React__default.isValidElement(child) && child.type === SubTree);
    const childrenWithoutSubTree = React__default.Children.toArray(children).filter(child => !( /*#__PURE__*/React__default.isValidElement(child) && child.type === SubTree));
    return {
      subTree,
      childrenWithoutSubTree,
      hasSubTree: Boolean(subTree)
    };
  }, [children]);
}

// ----------------------------------------------------------------------------
// TreeView.LeadingVisual and TreeView.TrailingVisual

const LeadingVisual = props => {
  const {
    isExpanded,
    leadingVisualId
  } = React__default.useContext(ItemContext);
  const children = typeof props.children === 'function' ? props.children({
    isExpanded
  }) : props.children;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "PRIVATE_VisuallyHidden",
    "aria-hidden": true,
    id: leadingVisualId
  }, props.label), /*#__PURE__*/React__default.createElement("div", {
    className: "PRIVATE_TreeView-item-visual",
    "aria-hidden": true
  }, children));
};
LeadingVisual.displayName = 'TreeView.LeadingVisual';
const TrailingVisual = props => {
  const {
    isExpanded,
    trailingVisualId
  } = React__default.useContext(ItemContext);
  const children = typeof props.children === 'function' ? props.children({
    isExpanded
  }) : props.children;
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "PRIVATE_VisuallyHidden",
    "aria-hidden": true,
    id: trailingVisualId
  }, props.label), /*#__PURE__*/React__default.createElement("div", {
    className: "PRIVATE_TreeView-item-visual",
    "aria-hidden": true
  }, children));
};
TrailingVisual.displayName = 'TreeView.TrailingVisual';

// ----------------------------------------------------------------------------
// TreeView.DirectoryIcon

const DirectoryIcon = () => {
  const {
    isExpanded
  } = React__default.useContext(ItemContext);
  const Icon = isExpanded ? FileDirectoryOpenFillIcon : FileDirectoryFillIcon;
  return /*#__PURE__*/React__default.createElement("div", {
    className: "PRIVATE_TreeView-directory-icon"
  }, /*#__PURE__*/React__default.createElement(Icon, null));
};
DirectoryIcon.displayName = "DirectoryIcon";
const ErrorDialog = ({
  title = 'Error',
  children,
  onRetry,
  onDismiss
}) => {
  const {
    itemId,
    setIsExpanded
  } = React__default.useContext(ItemContext);
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    React__default.createElement("div", {
      onKeyDown: event => {
        if (['Backspace', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter'].includes(event.key)) {
          // Prevent keyboard events from bubbling up to the TreeView
          // and interfering with keyboard navigation
          event.stopPropagation();
        }
      }
    }, /*#__PURE__*/React__default.createElement(ConfirmationDialog, {
      title: title,
      onClose: gesture => {
        // Focus parent item after the dialog is closed
        setTimeout(() => {
          const parentElement = document.getElementById(itemId);
          parentElement === null || parentElement === void 0 ? void 0 : parentElement.focus();
        });
        if (gesture === 'confirm') {
          onRetry === null || onRetry === void 0 ? void 0 : onRetry();
        } else {
          setIsExpanded(false);
          onDismiss === null || onDismiss === void 0 ? void 0 : onDismiss();
        }
      },
      confirmButtonContent: "Retry",
      cancelButtonContent: "Dismiss"
    }, children))
  );
};
ErrorDialog.displayName = "ErrorDialog";
ErrorDialog.displayName = 'TreeView.ErrorDialog';

// ----------------------------------------------------------------------------
// Export

const TreeView = Object.assign(Root, {
  Item,
  SubTree,
  LeadingVisual,
  TrailingVisual,
  DirectoryIcon,
  ErrorDialog
});

export { TreeView };
