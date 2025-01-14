'use strict';

var React = require('react');
var styled = require('styled-components');
var useId = require('../hooks/useId.js');
var useRefObjectAsForwardedRef = require('../hooks/useRefObjectAsForwardedRef.js');
var useResponsiveValue = require('../hooks/useResponsiveValue.js');
var useSlots = require('../hooks/useSlots.js');
require('../sx.js');
var environment = require('../utils/environment.js');
var useOverflow = require('../internal/hooks/useOverflow.js');
var warning = require('../utils/warning.js');
var _VisuallyHidden = require('../_VisuallyHidden.js');
var useStickyPaneHeight = require('./useStickyPaneHeight.js');
var Box = require('../Box/Box.js');
var merge = require('deepmerge');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var merge__default = /*#__PURE__*/_interopDefault(merge);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const REGION_ORDER = {
  header: 0,
  paneStart: 1,
  content: 2,
  paneEnd: 3,
  footer: 4
};
const SPACING_MAP = {
  none: 0,
  condensed: 3,
  normal: [3, null, null, 4]
};
const PageLayoutContext = /*#__PURE__*/React__default.default.createContext({
  padding: 'normal',
  rowGap: 'normal',
  columnGap: 'normal'
});

// ----------------------------------------------------------------------------
// PageLayout

const containerWidths = {
  full: '100%',
  medium: '768px',
  large: '1012px',
  xlarge: '1280px'
};

// TODO: refs
const Root = ({
  containerWidth = 'xlarge',
  padding = 'normal',
  rowGap = 'normal',
  columnGap = 'normal',
  children,
  sx = {},
  _slotsConfig: slotsConfig
}) => {
  const {
    rootRef,
    enableStickyPane,
    disableStickyPane,
    contentTopRef,
    contentBottomRef,
    stickyPaneHeight
  } = useStickyPaneHeight.useStickyPaneHeight();
  const [slots, rest] = useSlots.useSlots(children, slotsConfig !== null && slotsConfig !== void 0 ? slotsConfig : {
    header: Header,
    footer: Footer
  });
  return /*#__PURE__*/React__default.default.createElement(PageLayoutContext.Provider, {
    value: {
      padding,
      rowGap,
      columnGap,
      enableStickyPane,
      disableStickyPane,
      contentTopRef,
      contentBottomRef
    }
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    ref: rootRef,
    style: {
      // @ts-ignore TypeScript doesn't know about CSS custom properties
      '--sticky-pane-height': stickyPaneHeight
    },
    sx: merge__default.default({
      padding: SPACING_MAP[padding]
    }, sx)
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      maxWidth: containerWidths[containerWidth],
      marginX: 'auto',
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, slots.header, /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      display: 'flex',
      flex: '1 1 100%',
      flexWrap: 'wrap',
      maxWidth: '100%'
    }
  }, rest), slots.footer)));
};
Root.displayName = "Root";
Root.displayName = 'PageLayout';

// ----------------------------------------------------------------------------
// Divider (internal)

const horizontalDividerVariants = {
  none: {
    display: 'none'
  },
  line: {
    display: 'block',
    height: 1,
    backgroundColor: 'border.default'
  },
  filled: {
    display: 'block',
    height: 8,
    backgroundColor: 'canvas.inset',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    boxShadow: theme => `inset 0 -1px 0 0 ${theme.colors.border.default}, inset 0 1px 0 0 ${theme.colors.border.default}`
  }
};
function negateSpacingValue(value) {
  if (Array.isArray(value)) {
    // Not using recursion to avoid deeply nested arrays
    return value.map(v => v === null ? null : -v);
  }
  return value === null ? null : -value;
}
const HorizontalDivider = ({
  variant = 'none',
  sx = {}
}) => {
  const {
    padding
  } = React__default.default.useContext(PageLayoutContext);
  const responsiveVariant = useResponsiveValue.useResponsiveValue(variant, 'none');
  return /*#__PURE__*/React__default.default.createElement(Box
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  , {
    sx: theme => merge__default.default({
      // Stretch divider to viewport edges on narrow screens
      marginX: negateSpacingValue(SPACING_MAP[padding]),
      ...horizontalDividerVariants[responsiveVariant],
      [`@media screen and (min-width: ${theme.breakpoints[1]})`]: {
        marginX: '0 !important'
      }
    }, sx)
  });
};
HorizontalDivider.displayName = "HorizontalDivider";
const verticalDividerVariants = {
  none: {
    display: 'none'
  },
  line: {
    display: 'block',
    width: 1,
    backgroundColor: 'border.default'
  },
  filled: {
    display: 'block',
    width: 8,
    backgroundColor: 'canvas.inset',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    boxShadow: theme => `inset -1px 0 0 0 ${theme.colors.border.default}, inset 1px 0 0 0 ${theme.colors.border.default}`
  }
};
const DraggingGlobalStyles = styled.createGlobalStyle(["body[data-page-layout-dragging=\"true\"]{cursor:col-resize;}body[data-page-layout-dragging=\"true\"] *{user-select:none;}"]);
const VerticalDivider = ({
  variant = 'none',
  draggable = false,
  onDragStart,
  onDrag,
  onDragEnd,
  onDoubleClick,
  sx = {}
}) => {
  const [isDragging, setIsDragging] = React__default.default.useState(false);
  const responsiveVariant = useResponsiveValue.useResponsiveValue(variant, 'none');
  const stableOnDrag = React__default.default.useRef(onDrag);
  const stableOnDragEnd = React__default.default.useRef(onDragEnd);
  React__default.default.useEffect(() => {
    stableOnDrag.current = onDrag;
  }, [onDrag]);
  React__default.default.useEffect(() => {
    stableOnDragEnd.current = onDragEnd;
  }, [onDragEnd]);
  React__default.default.useEffect(() => {
    function handleDrag(event) {
      var _stableOnDrag$current;
      (_stableOnDrag$current = stableOnDrag.current) === null || _stableOnDrag$current === void 0 ? void 0 : _stableOnDrag$current.call(stableOnDrag, event.movementX);
      event.preventDefault();
    }
    function handleDragEnd(event) {
      var _stableOnDragEnd$curr;
      setIsDragging(false);
      (_stableOnDragEnd$curr = stableOnDragEnd.current) === null || _stableOnDragEnd$curr === void 0 ? void 0 : _stableOnDragEnd$curr.call(stableOnDragEnd);
      event.preventDefault();
    }

    // TODO: Support touch events
    if (isDragging) {
      window.addEventListener('mousemove', handleDrag);
      window.addEventListener('mouseup', handleDragEnd);
      document.body.setAttribute('data-page-layout-dragging', 'true');
    } else {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      document.body.removeAttribute('data-page-layout-dragging');
    }
    return () => {
      window.removeEventListener('mousemove', handleDrag);
      window.removeEventListener('mouseup', handleDragEnd);
      document.body.removeAttribute('data-page-layout-dragging');
    };
  }, [isDragging]);
  return /*#__PURE__*/React__default.default.createElement(Box, {
    sx: merge__default.default({
      height: '100%',
      position: 'relative',
      ...verticalDividerVariants[responsiveVariant]
    }, sx)
  }, draggable ?
  /*#__PURE__*/
  // Drag handle
  React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      position: 'absolute',
      inset: '0 -2px',
      cursor: 'col-resize',
      bg: isDragging ? 'accent.fg' : 'transparent',
      transitionDelay: '0.1s',
      '&:hover': {
        bg: isDragging ? 'accent.fg' : 'neutral.muted'
      }
    },
    role: "separator",
    onMouseDown: () => {
      setIsDragging(true);
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart();
    },
    onDoubleClick: onDoubleClick
  }), /*#__PURE__*/React__default.default.createElement(DraggingGlobalStyles, null)) : null);
};
VerticalDivider.displayName = "VerticalDivider";
const Header = ({
  'aria-label': label,
  'aria-labelledby': labelledBy,
  padding = 'none',
  divider = 'none',
  dividerWhenNarrow = 'inherit',
  hidden = false,
  children,
  sx = {}
}) => {
  // Combine divider and dividerWhenNarrow for backwards compatibility
  const dividerProp = !useResponsiveValue.isResponsiveValue(divider) && dividerWhenNarrow !== 'inherit' ? {
    regular: divider,
    narrow: dividerWhenNarrow
  } : divider;
  const dividerVariant = useResponsiveValue.useResponsiveValue(dividerProp, 'none');
  const isHidden = useResponsiveValue.useResponsiveValue(hidden, false);
  const {
    rowGap
  } = React__default.default.useContext(PageLayoutContext);
  return /*#__PURE__*/React__default.default.createElement(Box, {
    as: "header",
    "aria-label": label,
    "aria-labelledby": labelledBy,
    hidden: isHidden,
    sx: merge__default.default({
      width: '100%',
      marginBottom: SPACING_MAP[rowGap]
    }, sx)
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      padding: SPACING_MAP[padding]
    }
  }, children), /*#__PURE__*/React__default.default.createElement(HorizontalDivider, {
    variant: dividerVariant,
    sx: {
      marginTop: SPACING_MAP[rowGap]
    }
  }));
};
Header.displayName = "Header";
Header.displayName = 'PageLayout.Header';

// ----------------------------------------------------------------------------
// PageLayout.Content

// TODO: Account for pane width when centering content
const contentWidths = {
  full: '100%',
  medium: '768px',
  large: '1012px',
  xlarge: '1280px'
};
const Content = ({
  'aria-label': label,
  'aria-labelledby': labelledBy,
  width = 'full',
  padding = 'none',
  hidden = false,
  children,
  sx = {}
}) => {
  const isHidden = useResponsiveValue.useResponsiveValue(hidden, false);
  const {
    contentTopRef,
    contentBottomRef
  } = React__default.default.useContext(PageLayoutContext);
  return /*#__PURE__*/React__default.default.createElement(Box, {
    "aria-label": label,
    "aria-labelledby": labelledBy,
    sx: merge__default.default({
      display: isHidden ? 'none' : 'flex',
      flexDirection: 'column',
      order: REGION_ORDER.content,
      // Set flex-basis to 0% to allow flex-grow to control the width of the content region.
      // Without this, the content region could wrap onto a different line
      // than the pane region on wide viewports if its contents are too wide.
      flexBasis: 0,
      flexGrow: 1,
      flexShrink: 1,
      minWidth: 1 // Hack to prevent overflowing content from pushing the pane region to the next line
    }, sx)
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    ref: contentTopRef
  }), /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      width: '100%',
      maxWidth: contentWidths[width],
      marginX: 'auto',
      flexGrow: 1,
      padding: SPACING_MAP[padding]
    }
  }, children), /*#__PURE__*/React__default.default.createElement(Box, {
    ref: contentBottomRef
  }));
};
Content.displayName = "Content";
Content.displayName = 'PageLayout.Content';

// ----------------------------------------------------------------------------
// PageLayout.Pane

const panePositions = {
  start: REGION_ORDER.paneStart,
  end: REGION_ORDER.paneEnd
};
const paneWidths = {
  small: ['100%', null, '240px', '256px'],
  medium: ['100%', null, '256px', '296px'],
  large: ['100%', null, '256px', '320px', '336px']
};
const defaultPaneWidth = {
  small: 256,
  medium: 296,
  large: 320
};
const Pane = /*#__PURE__*/React__default.default.forwardRef(({
  'aria-label': label,
  'aria-labelledby': labelledBy,
  position: responsivePosition = 'end',
  positionWhenNarrow = 'inherit',
  width = 'medium',
  minWidth = 256,
  padding = 'none',
  resizable = false,
  widthStorageKey = 'paneWidth',
  divider: responsiveDivider = 'none',
  dividerWhenNarrow = 'inherit',
  sticky = false,
  offsetHeader = 0,
  hidden: responsiveHidden = false,
  children,
  id,
  sx = {}
}, forwardRef) => {
  // Combine position and positionWhenNarrow for backwards compatibility
  const positionProp = !useResponsiveValue.isResponsiveValue(responsivePosition) && positionWhenNarrow !== 'inherit' ? {
    regular: responsivePosition,
    narrow: positionWhenNarrow
  } : responsivePosition;
  const position = useResponsiveValue.useResponsiveValue(positionProp, 'end');

  // Combine divider and dividerWhenNarrow for backwards compatibility
  const dividerProp = !useResponsiveValue.isResponsiveValue(responsiveDivider) && dividerWhenNarrow !== 'inherit' ? {
    regular: responsiveDivider,
    narrow: dividerWhenNarrow
  } : responsiveDivider;
  const dividerVariant = useResponsiveValue.useResponsiveValue(dividerProp, 'none');
  const isHidden = useResponsiveValue.useResponsiveValue(responsiveHidden, false);
  const {
    rowGap,
    columnGap,
    enableStickyPane,
    disableStickyPane
  } = React__default.default.useContext(PageLayoutContext);
  React__default.default.useEffect(() => {
    if (sticky) {
      enableStickyPane === null || enableStickyPane === void 0 ? void 0 : enableStickyPane(offsetHeader);
    } else {
      disableStickyPane === null || disableStickyPane === void 0 ? void 0 : disableStickyPane();
    }
  }, [sticky, enableStickyPane, disableStickyPane, offsetHeader]);
  const [paneWidth, setPaneWidth] = React__default.default.useState(() => {
    if (!environment.canUseDOM) {
      return defaultPaneWidth[width];
    }
    let storedWidth;
    try {
      storedWidth = localStorage.getItem(widthStorageKey);
    } catch (error) {
      storedWidth = null;
    }
    return storedWidth && !isNaN(Number(storedWidth)) ? Number(storedWidth) : defaultPaneWidth[width];
  });
  const updatePaneWidth = width => {
    setPaneWidth(width);
    try {
      localStorage.setItem(widthStorageKey, width.toString());
    } catch (error) {
      // Ignore errors
    }
  };
  const paneRef = React__default.default.useRef(null);
  useRefObjectAsForwardedRef.useRefObjectAsForwardedRef(forwardRef, paneRef);
  const [minPercent, setMinPercent] = React__default.default.useState(0);
  const [maxPercent, setMaxPercent] = React__default.default.useState(0);
  const hasOverflow = useOverflow.useOverflow(paneRef);
  const measuredRef = React__default.default.useCallback(() => {
    if (paneRef.current !== null) {
      const maxPaneWidthDiffPixels = getComputedStyle(paneRef.current).getPropertyValue('--pane-max-width-diff');
      const paneWidth = paneRef.current.getBoundingClientRect().width;
      const maxPaneWidthDiff = Number(maxPaneWidthDiffPixels.split('px')[0]);
      const viewportWidth = window.innerWidth;
      const maxPaneWidth = viewportWidth > maxPaneWidthDiff ? viewportWidth - maxPaneWidthDiff : viewportWidth;
      const minPercent = Math.round(100 * minWidth / viewportWidth);
      setMinPercent(minPercent);
      const maxPercent = Math.round(100 * maxPaneWidth / viewportWidth);
      setMaxPercent(maxPercent);
      const widthPercent = Math.round(100 * paneWidth / viewportWidth);
      setWidthPercent(widthPercent.toString());
    }
  }, [paneRef, minWidth]);
  const [widthPercent, setWidthPercent] = React__default.default.useState('');
  const [prevPercent, setPrevPercent] = React__default.default.useState('');
  const handleWidthFormSubmit = event => {
    event.preventDefault();
    let percent = Number(widthPercent);
    if (Number.isNaN(percent)) {
      percent = Number(prevPercent) || minPercent;
    } else if (percent > maxPercent) {
      percent = maxPercent;
    } else if (percent < minPercent) {
      percent = minPercent;
    }
    setWidthPercent(percent.toString());
    // Cache previous valid percent.
    setPrevPercent(percent.toString());
    updatePaneWidth(percent / 100 * window.innerWidth);
  };
  const paneId = useId.useId(id);
  const labelProp = {};
  if (hasOverflow) {
    process.env.NODE_ENV !== "production" ? warning.warning(label === undefined && labelledBy === undefined, 'The <PageLayout.Pane> has overflow and `aria-label` or `aria-labelledby` has not been set. ' + 'Please provide `aria-label` or `aria-labelledby` to <PageLayout.Pane> in order to label this ' + 'region.') : void 0;
    if (labelledBy) {
      labelProp['aria-labelledby'] = labelledBy;
    } else if (label) {
      labelProp['aria-label'] = label;
    }
  }
  return /*#__PURE__*/React__default.default.createElement(Box, {
    ref: measuredRef
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ,
    sx: theme => merge__default.default({
      // Narrow viewports
      display: isHidden ? 'none' : 'flex',
      order: panePositions[position],
      width: '100%',
      marginX: 0,
      ...(position === 'end' ? {
        flexDirection: 'column',
        marginTop: SPACING_MAP[rowGap]
      } : {
        flexDirection: 'column-reverse',
        marginBottom: SPACING_MAP[rowGap]
      }),
      // Regular and wide viewports
      [`@media screen and (min-width: ${theme.breakpoints[1]})`]: {
        width: 'auto',
        marginY: '0 !important',
        ...(sticky ? {
          position: 'sticky',
          // If offsetHeader has value, it will stick the pane to the position where the sticky top ends
          // else top will be 0 as the default value of offsetHeader
          top: typeof offsetHeader === 'number' ? `${offsetHeader}px` : offsetHeader,
          maxHeight: 'var(--sticky-pane-height)'
        } : {}),
        ...(position === 'end' ? {
          flexDirection: 'row',
          marginLeft: SPACING_MAP[columnGap]
        } : {
          flexDirection: 'row-reverse',
          marginRight: SPACING_MAP[columnGap]
        })
      }
    }, sx)
  }, /*#__PURE__*/React__default.default.createElement(HorizontalDivider, {
    variant: {
      narrow: dividerVariant,
      regular: 'none'
    },
    sx: {
      [position === 'end' ? 'marginBottom' : 'marginTop']: SPACING_MAP[rowGap]
    }
  }), /*#__PURE__*/React__default.default.createElement(VerticalDivider, {
    variant: {
      narrow: 'none',
      // If pane is resizable, always show a vertical divider on regular viewports
      regular: resizable ? 'line' : dividerVariant
    }
    // If pane is resizable, the divider should be draggable
    ,
    draggable: resizable,
    sx: {
      [position === 'end' ? 'marginRight' : 'marginLeft']: SPACING_MAP[columnGap]
    },
    onDrag: delta => {
      // Get the number of pixels the divider was dragged
      const deltaWithDirection = position === 'end' ? -delta : delta;
      updatePaneWidth(paneWidth + deltaWithDirection);
    }
    // Ensure `paneWidth` state and actual pane width are in sync when the drag ends
    ,
    onDragEnd: () => {
      var _paneRef$current;
      const paneRect = (_paneRef$current = paneRef.current) === null || _paneRef$current === void 0 ? void 0 : _paneRef$current.getBoundingClientRect();
      if (!paneRect) return;
      updatePaneWidth(paneRect.width);
    }
    // Reset pane width on double click
    ,
    onDoubleClick: () => updatePaneWidth(defaultPaneWidth[width])
  }), /*#__PURE__*/React__default.default.createElement(Box, _extends({
    ref: paneRef,
    style: {
      // @ts-ignore CSS custom properties are not supported by TypeScript
      '--pane-width': `${paneWidth}px`
    },
    sx: theme => ({
      '--pane-min-width': `${minWidth}px`,
      '--pane-max-width-diff': '511px',
      '--pane-max-width': `calc(100vw - var(--pane-max-width-diff))`,
      width: resizable ? ['100%', null, 'clamp(var(--pane-min-width), var(--pane-width), var(--pane-max-width))'] : paneWidths[width],
      padding: SPACING_MAP[padding],
      overflow: [null, null, 'auto'],
      [`@media screen and (min-width: ${theme.breakpoints[3]})`]: {
        '--pane-max-width-diff': '959px'
      }
    })
  }, hasOverflow && {
    tabIndex: 0,
    role: 'region'
  }, labelProp, id && {
    id: paneId
  }), resizable && /*#__PURE__*/React__default.default.createElement(_VisuallyHidden, null, /*#__PURE__*/React__default.default.createElement("form", {
    onSubmit: handleWidthFormSubmit
  }, /*#__PURE__*/React__default.default.createElement("label", {
    htmlFor: `${paneId}-width-input`
  }, "Pane width"), /*#__PURE__*/React__default.default.createElement("p", {
    id: `${paneId}-input-hint`
  }, "Use a value between ", minPercent, "% and ", maxPercent, "%"), /*#__PURE__*/React__default.default.createElement("input", {
    id: `${paneId}-width-input`,
    "aria-describedby": `${paneId}-input-hint`,
    name: "pane-width",
    inputMode: "numeric",
    pattern: "[0-9]*",
    value: widthPercent,
    autoCorrect: "off",
    autoComplete: "off",
    type: "text",
    onChange: event => {
      setWidthPercent(event.target.value);
    }
  }), /*#__PURE__*/React__default.default.createElement("button", {
    type: "submit"
  }, "Change width"))), children));
});
Pane.displayName = 'PageLayout.Pane';

// ----------------------------------------------------------------------------
// PageLayout.Footer

const Footer = ({
  'aria-label': label,
  'aria-labelledby': labelledBy,
  padding = 'none',
  divider = 'none',
  dividerWhenNarrow = 'inherit',
  hidden = false,
  children,
  sx = {}
}) => {
  // Combine divider and dividerWhenNarrow for backwards compatibility
  const dividerProp = !useResponsiveValue.isResponsiveValue(divider) && dividerWhenNarrow !== 'inherit' ? {
    regular: divider,
    narrow: dividerWhenNarrow
  } : divider;
  const dividerVariant = useResponsiveValue.useResponsiveValue(dividerProp, 'none');
  const isHidden = useResponsiveValue.useResponsiveValue(hidden, false);
  const {
    rowGap
  } = React__default.default.useContext(PageLayoutContext);
  return /*#__PURE__*/React__default.default.createElement(Box, {
    as: "footer",
    "aria-label": label,
    "aria-labelledby": labelledBy,
    hidden: isHidden,
    sx: merge__default.default({
      order: REGION_ORDER.footer,
      width: '100%',
      marginTop: SPACING_MAP[rowGap]
    }, sx)
  }, /*#__PURE__*/React__default.default.createElement(HorizontalDivider, {
    variant: dividerVariant,
    sx: {
      marginBottom: SPACING_MAP[rowGap]
    }
  }), /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      padding: SPACING_MAP[padding]
    }
  }, children));
};
Footer.displayName = "Footer";
Footer.displayName = 'PageLayout.Footer';

// ----------------------------------------------------------------------------
// Export

const PageLayout = Object.assign(Root, {
  Header,
  Content,
  Pane,
  Footer
});

exports.PageLayout = PageLayout;
