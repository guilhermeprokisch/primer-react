'use strict';

var octiconsReact = require('@primer/octicons-react');
var React = require('react');
var useId = require('../hooks/useId.js');
var useProvidedStateOrCreate = require('../hooks/useProvidedStateOrCreate.js');
var LiveRegion = require('../internal/components/LiveRegion.js');
var useProvidedRefOrCreate = require('../hooks/useProvidedRefOrCreate.js');
var AnchoredOverlay = require('../AnchoredOverlay/AnchoredOverlay.js');
var Box = require('../Box/Box.js');
var Heading = require('../Heading/Heading.js');
var FilteredActionList = require('../FilteredActionList/FilteredActionList.js');
var DropdownButton = require('../deprecated/DropdownMenu/DropdownButton.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function isMultiSelectVariant(selected) {
  return Array.isArray(selected);
}
const focusZoneSettings = {
  // Let FilteredActionList handle focus zone
  disabled: true
};
function SelectPanel({
  open,
  onOpenChange,
  renderAnchor = props => /*#__PURE__*/React__default.default.createElement(DropdownButton.DropdownButton, props),
  anchorRef: externalAnchorRef,
  placeholder,
  placeholderText = 'Filter items',
  inputLabel = placeholderText,
  selected,
  title = isMultiSelectVariant(selected) ? 'Select items' : 'Select an item',
  onSelectedChange,
  filterValue: externalFilterValue,
  onFilterChange: externalOnFilterChange,
  items,
  textInputProps,
  overlayProps,
  sx,
  ...listProps
}) {
  const titleId = useId.useId();
  const [filterValue, setInternalFilterValue] = useProvidedStateOrCreate.useProvidedStateOrCreate(externalFilterValue, undefined, '');
  const onFilterChange = React.useCallback((value, e) => {
    externalOnFilterChange(value, e);
    setInternalFilterValue(value);
  }, [externalOnFilterChange, setInternalFilterValue]);
  const anchorRef = useProvidedRefOrCreate.useProvidedRefOrCreate(externalAnchorRef);
  const onOpen = React.useCallback(gesture => onOpenChange(true, gesture), [onOpenChange]);
  const onClose = React.useCallback(gesture => {
    onOpenChange(false, gesture);
  }, [onOpenChange]);
  const renderMenuAnchor = React.useMemo(() => {
    if (renderAnchor === null) {
      return null;
    }
    const selectedItems = Array.isArray(selected) ? selected : [...(selected ? [selected] : [])];
    return props => {
      return renderAnchor({
        ...props,
        children: selectedItems.length ? selectedItems.map(item => item.text).join(', ') : placeholder
      });
    };
  }, [placeholder, renderAnchor, selected]);
  const itemsToRender = React.useMemo(() => {
    return items.map(item => {
      const isItemSelected = isMultiSelectVariant(selected) ? selected.includes(item) : selected === item;
      return {
        ...item,
        role: 'option',
        selected: 'selected' in item && item.selected === undefined ? undefined : isItemSelected,
        onSelect: event => {
          if (event.defaultPrevented) {
            return;
          }
          if (isMultiSelectVariant(selected)) {
            const otherSelectedItems = selected.filter(selectedItem => selectedItem !== item);
            const newSelectedItems = selected.includes(item) ? otherSelectedItems : [...otherSelectedItems, item];
            const multiSelectOnChange = onSelectedChange;
            multiSelectOnChange(newSelectedItems);
            return;
          }

          // single select
          const singleSelectOnChange = onSelectedChange;
          singleSelectOnChange(item === selected ? undefined : item);
          onClose('selection');
        }
      };
    });
  }, [onClose, onSelectedChange, items, selected]);
  const inputRef = React__default.default.useRef(null);
  const focusTrapSettings = {
    initialFocusRef: inputRef
  };
  const extendedTextInputProps = React.useMemo(() => {
    return {
      sx: {
        m: 2
      },
      contrast: true,
      leadingVisual: octiconsReact.SearchIcon,
      'aria-label': inputLabel,
      ...textInputProps
    };
  }, [inputLabel, textInputProps]);
  return /*#__PURE__*/React__default.default.createElement(LiveRegion.LiveRegion, null, /*#__PURE__*/React__default.default.createElement(AnchoredOverlay.AnchoredOverlay, {
    renderAnchor: renderMenuAnchor,
    anchorRef: anchorRef,
    open: open,
    onOpen: onOpen,
    onClose: onClose,
    overlayProps: {
      role: 'dialog',
      'aria-labelledby': titleId,
      ...overlayProps
    },
    focusTrapSettings: focusTrapSettings,
    focusZoneSettings: focusZoneSettings
  }, /*#__PURE__*/React__default.default.createElement(LiveRegion.LiveRegionOutlet, null), /*#__PURE__*/React__default.default.createElement(LiveRegion.Message, {
    value: filterValue === '' ? 'Showing all items' : items.length <= 0 ? 'No matching items' : `${items.length} matching ${items.length === 1 ? 'item' : 'items'}`
  }), /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      height: 'inherit',
      maxHeight: 'inherit'
    }
  }, /*#__PURE__*/React__default.default.createElement(Box, {
    sx: {
      pt: 2,
      px: 3
    }
  }, /*#__PURE__*/React__default.default.createElement(Heading, {
    as: "h1",
    id: titleId,
    sx: {
      fontSize: 1
    }
  }, title)), /*#__PURE__*/React__default.default.createElement(FilteredActionList.FilteredActionList, _extends({
    filterValue: filterValue,
    onFilterChange: onFilterChange,
    role: "listbox",
    "aria-multiselectable": isMultiSelectVariant(selected) ? 'true' : 'false',
    selectionVariant: isMultiSelectVariant(selected) ? 'multiple' : 'single'
  }, listProps, {
    items: itemsToRender,
    textInputProps: extendedTextInputProps,
    inputRef: inputRef
    // inheriting height and maxHeight ensures that the FilteredActionList is never taller
    // than the Overlay (which would break scrolling the items)
    ,
    sx: {
      ...sx,
      height: 'inherit',
      maxHeight: 'inherit'
    }
  })))));
}
SelectPanel.displayName = "SelectPanel";
SelectPanel.displayName = 'SelectPanel';

exports.SelectPanel = SelectPanel;
