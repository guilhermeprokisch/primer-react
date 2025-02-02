import React__default, { forwardRef, useContext } from 'react';
import { Button } from '../../Button/index.js';
import { MarkdownEditorContext } from './_MarkdownEditorContext.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Actions = ({
  children
}) => /*#__PURE__*/React__default.createElement(React__default.Fragment, null, children);
Actions.displayName = 'MarkdownEditor.Actions';
const ActionButton = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    disabled
  } = useContext(MarkdownEditorContext);
  return /*#__PURE__*/React__default.createElement(Button, _extends({
    ref: ref,
    size: "small",
    disabled: disabled
  }, props));
});
ActionButton.displayName = 'MarkdownEditor.ActionButton';

export { ActionButton, Actions };
