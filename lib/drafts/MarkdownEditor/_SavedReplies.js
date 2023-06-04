'use strict';

var octiconsReact = require('@primer/octicons-react');
var React = require('react');
var Toolbar = require('./Toolbar.js');
var Truncate = require('../../Truncate/Truncate.js');
var SelectPanel = require('../../SelectPanel/SelectPanel.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// SavedRepliesContext is separate from MarkdownEditorContext because the saved replies array is practically guarunteed to change
// on every render. If it was provided in the MarkdownEditorContext, it would cause the whole editor to rerender on every render.
const SavedRepliesContext = /*#__PURE__*/React.createContext(null);
const SavedRepliesButton = () => {
  const context = React.useContext(SavedRepliesContext);
  React.useImperativeHandle(context === null || context === void 0 ? void 0 : context.ref, () => ({
    openMenu: () => {
      setOpen(true);
    }
  }));
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => setFilter(''), [open]);
  const [filter, setFilter] = React.useState('');

  // there's not much point in memoizing this since the savedReplies array is likely to change on every render
  const items = context === null || context === void 0 ? void 0 : context.savedReplies.filter(({
    name
  }) => name.toLowerCase().includes(filter.toLowerCase())).map((reply, i) => ({
    text: reply.name,
    description: /*#__PURE__*/React__default.default.createElement(Truncate, {
      maxWidth: "100%",
      title: reply.content
    }, reply.content),
    descriptionVariant: 'block',
    trailingVisual: i < 9 ? `Ctrl + ${i + 1}` : undefined,
    sx: {
      // hide the leading visual container since we don't use the checkboxes
      '& [class*=BaseVisualContainer]:first-child': {
        display: 'none'
      },
      '& [class*=DescriptionContainer]': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%'
      }
    },
    id: i.toString()
  }));
  const onSelectItem = item => {
    setOpen(false);
    const reply = context === null || context === void 0 ? void 0 : context.savedReplies.find(({
      name
    }) => name === (item === null || item === void 0 ? void 0 : item.text));
    if (reply) context === null || context === void 0 ? void 0 : context.onSelect(reply);
  };
  const onKeyDown = event => {
    const keyInt = parseInt(event.key, 10);
    if (items && event.ctrlKey && !Number.isNaN(keyInt) && keyInt >= 1 && keyInt <= 9) {
      event.stopPropagation();
      event.preventDefault();
      onSelectItem(items[keyInt - 1]);
    }
  };
  return items ? /*#__PURE__*/React__default.default.createElement(SelectPanel.SelectPanel, {
    renderAnchor: props => /*#__PURE__*/React__default.default.createElement(Toolbar.ToolbarButton, _extends({}, props, {
      icon: octiconsReact.ReplyIcon,
      "aria-label": "Add saved reply (Ctrl + .)",
      "aria-labelledby": undefined
    })),
    open: open,
    onOpenChange: setOpen,
    items: items,
    filterValue: filter,
    onFilterChange: setFilter,
    placeholderText: "Search saved replies",
    selected: undefined,
    onSelectedChange: selection => {
      onSelectItem(Array.isArray(selection) ? selection[0] : selection);
    },
    overlayProps: {
      width: 'small',
      maxHeight: 'small',
      anchorSide: 'outside-right',
      onKeyDown
    }
    // @ts-ignore this is bad because SelectPanel does not accept selectionVariant in the public API
    // but it does pass it down to FilteredActionList underneath.
    // SavedReplies should not use SelectPanel and override it's semantics, it should instead
    // use the building blocks of SelectPanel to build a new component
    ,
    selectionVariant: undefined,
    "aria-multiselectable": undefined
  }) : /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null);
};

exports.SavedRepliesButton = SavedRepliesButton;
exports.SavedRepliesContext = SavedRepliesContext;