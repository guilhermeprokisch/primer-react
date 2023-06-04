'use strict';

var React = require('react');
var index = require('../ActionList/index.js');
var useFocusZone = require('../hooks/useFocusZone.js');
var useProvidedStateOrCreate = require('../hooks/useProvidedStateOrCreate.js');
var styled = require('styled-components');
var constants = require('../constants.js');
var useProvidedRefOrCreate = require('../hooks/useProvidedRefOrCreate.js');
var useScrollFlash = require('../hooks/useScrollFlash.js');
var behaviors = require('@primer/behaviors');
var useId = require('../hooks/useId.js');
var VisuallyHidden = require('../internal/components/VisuallyHidden.js');
var Box = require('../Box/Box.js');
var TextInput = require('../TextInput/TextInput.js');
var Spinner = require('../Spinner/Spinner.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var styled__default = /*#__PURE__*/_interopDefault(styled);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const menuScrollMargins = {
  startMargin: 0,
  endMargin: 8
};
const StyledHeader = styled__default.default.div.withConfig({
  displayName: "FilteredActionList__StyledHeader",
  componentId: "sc-1oqgb0s-0"
})(["box-shadow:0 1px 0 ", ";z-index:1;"], constants.get('colors.border.default'));
const renderFn = ({
  description,
  descriptionVariant,
  id,
  sx,
  text,
  trailingVisual,
  leadingVisual,
  onSelect,
  selected
}) => {
  return /*#__PURE__*/React__default.default.createElement(index.ActionList.Item, {
    key: id,
    sx: sx,
    role: "option",
    onSelect: onSelect,
    selected: selected
  }, !!leadingVisual && /*#__PURE__*/React__default.default.createElement(index.ActionList.LeadingVisual, null, leadingVisual), /*#__PURE__*/React__default.default.createElement(Box, null, text ? text : null), description ? /*#__PURE__*/React__default.default.createElement(index.ActionList.Description, {
    variant: descriptionVariant
  }, description) : null, !!trailingVisual && /*#__PURE__*/React__default.default.createElement(index.ActionList.TrailingVisual, null, trailingVisual));
};
renderFn.displayName = "renderFn";
function FilteredActionList({
  loading = false,
  placeholderText,
  filterValue: externalFilterValue,
  onFilterChange,
  items,
  textInputProps,
  inputRef: providedInputRef,
  sx,
  ...listProps
}) {
  const [filterValue, setInternalFilterValue] = useProvidedStateOrCreate.useProvidedStateOrCreate(externalFilterValue, undefined, '');
  const onInputChange = React.useCallback(e => {
    const value = e.target.value;
    onFilterChange(value, e);
    setInternalFilterValue(value);
  }, [onFilterChange, setInternalFilterValue]);
  const scrollContainerRef = React.useRef(null);
  const listContainerRef = React.useRef(null);
  const inputRef = useProvidedRefOrCreate.useProvidedRefOrCreate(providedInputRef);
  const activeDescendantRef = React.useRef();
  const listId = useId.useId();
  const inputDescriptionTextId = useId.useId();
  const onInputKeyPress = React.useCallback(event => {
    if (event.key === 'Enter' && activeDescendantRef.current) {
      event.preventDefault();
      event.nativeEvent.stopImmediatePropagation();

      // Forward Enter key press to active descendant so that item gets activated
      const activeDescendantEvent = new KeyboardEvent(event.type, event.nativeEvent);
      activeDescendantRef.current.dispatchEvent(activeDescendantEvent);
    }
  }, [activeDescendantRef]);
  useFocusZone.useFocusZone({
    containerRef: listContainerRef,
    focusOutBehavior: 'wrap',
    focusableElementFilter: element => {
      return !(element instanceof HTMLInputElement);
    },
    activeDescendantFocus: inputRef,
    onActiveDescendantChanged: (current, _previous, directlyActivated) => {
      activeDescendantRef.current = current;
      if (current && scrollContainerRef.current && directlyActivated) {
        behaviors.scrollIntoView(current, scrollContainerRef.current, menuScrollMargins);
      }
    }
  }, [
  // List ref isn't set while loading.  Need to re-bind focus zone when it changes
  loading]);
  React.useEffect(() => {
    // if items changed, we want to instantly move active descendant into view
    if (activeDescendantRef.current && scrollContainerRef.current) {
      behaviors.scrollIntoView(activeDescendantRef.current, scrollContainerRef.current, {
        ...menuScrollMargins,
        behavior: 'auto'
      });
    }
  }, [items]);
  useScrollFlash(scrollContainerRef);
  return /*#__PURE__*/React__default.default.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    sx: sx
  }, /*#__PURE__*/React__default.default.createElement(StyledHeader, null, /*#__PURE__*/React__default.default.createElement(TextInput, _extends({
    ref: inputRef,
    block: true,
    width: "auto",
    color: "fg.default",
    value: filterValue,
    onChange: onInputChange,
    onKeyPress: onInputKeyPress,
    placeholder: placeholderText,
    "aria-label": placeholderText,
    "aria-controls": listId,
    "aria-describedby": inputDescriptionTextId
  }, textInputProps))), /*#__PURE__*/React__default.default.createElement(VisuallyHidden.VisuallyHidden, {
    id: inputDescriptionTextId
  }, "Items will be filtered as you type"), /*#__PURE__*/React__default.default.createElement(Box, {
    ref: scrollContainerRef,
    overflow: "auto"
  }, loading ? /*#__PURE__*/React__default.default.createElement(Box, {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    pt: 6,
    pb: 7
  }, /*#__PURE__*/React__default.default.createElement(Spinner, null)) : /*#__PURE__*/React__default.default.createElement(index.ActionList, _extends({
    ref: listContainerRef
  }, listProps, {
    role: "listbox",
    id: listId,
    "aria-label": `${placeholderText} options`
  }), items.map(i => renderFn(i)))));
}
FilteredActionList.displayName = "FilteredActionList";
FilteredActionList.displayName = 'FilteredActionList';

exports.FilteredActionList = FilteredActionList;
