'use strict';

var React = require('react');
var _InputLabel = require('../../_InputLabel.js');
var _MarkdownEditorContext = require('./_MarkdownEditorContext.js');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// ref is not forwarded because InputLabel does not (yet) support it
const Legend = ({
  sx,
  ...props
}) => {
  // using context and definining a Slot in the same component causes an infinite loop, so these must be separate
  const {
    disabled,
    required
  } = React.useContext(_MarkdownEditorContext.MarkdownEditorContext);
  return /*#__PURE__*/React__default.default.createElement(_InputLabel, _extends({
    as: "legend",
    disabled: disabled,
    required: required
  }, props, {
    sx: {
      cursor: 'default',
      mb: 1,
      ...sx
    }
  }));
};
Legend.displayName = "Legend";
Legend.displayName = 'MarkdownEditor.Label';
const Label = props => /*#__PURE__*/React__default.default.createElement(Legend, props);
Label.displayName = "Label";

exports.Label = Label;