import React__default, { forwardRef, useState, useRef, useEffect, useImperativeHandle, useCallback, useLayoutEffect, useMemo } from 'react';
import VisuallyHidden from '../../_VisuallyHidden.js';
import { useId } from '../../hooks/useId.js';
import { useResizeObserver } from '../../hooks/useResizeObserver.js';
import { useSlots } from '../../hooks/useSlots.js';
import MarkdownViewer from '../MarkdownViewer/MarkdownViewer.js';
import { useIgnoreKeyboardActionsWhileComposing } from '../hooks/useIgnoreKeyboardActionsWhileComposing.js';
import { useSafeAsyncCallback } from '../hooks/useSafeAsyncCallback.js';
import { useSyntheticChange } from '../hooks/useSyntheticChange.js';
import { Actions } from './Actions.js';
import { Label } from './Label.js';
import { Toolbar, CoreToolbar, DefaultToolbarButtons } from './Toolbar.js';
import { Footer } from './_Footer.js';
import { FormattingTools } from './_FormattingTools.js';
import { MarkdownEditorContext } from './_MarkdownEditorContext.js';
import { MarkdownInput } from './_MarkdownInput.js';
import { SavedRepliesContext } from './_SavedReplies.js';
import { ViewSwitch } from './_ViewSwitch.js';
import { useFileHandling } from './_useFileHandling.js';
import { useIndenting } from './_useIndenting.js';
import { useListEditing } from './_useListEditing.js';
import { isModifierKey } from './utils.js';
import Box from '../../Box/Box.js';

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const a11yOnlyStyle = {
  clipPath: 'Circle(0)',
  position: 'absolute'
};
const CONDENSED_WIDTH_THRESHOLD = 675;

/**
 * We want to switch editors from preview mode on cmd/ctrl+shift+P. But in preview mode,
 * there's no input to focus so we have to bind the event to the document. If there are
 * multiple editors, we want the most recent one to switch to preview mode to be the one
 * that we switch back to edit mode, so we maintain a LIFO stack of IDs of editors in
 * preview mode.
 */
let editorsInPreviewMode = [];

/**
 * Markdown textarea with controls & keyboard shortcuts.
 */
const MarkdownEditor = /*#__PURE__*/forwardRef(({
  value,
  onChange,
  disabled = false,
  placeholder,
  maxLength,
  'aria-describedby': describedBy,
  fullHeight,
  onRenderPreview,
  sx,
  onPrimaryAction,
  viewMode: controlledViewMode,
  onChangeViewMode: controlledSetViewMode,
  minHeightLines = 5,
  maxHeightLines = 35,
  emojiSuggestions,
  mentionSuggestions,
  referenceSuggestions,
  backlinkSuggestions,
  onUploadFile,
  acceptedFileTypes,
  monospace = false,
  required = false,
  name,
  children,
  savedReplies,
  pasteUrlsAsPlainText = false
}, ref) => {
  var _slots$toolbar, _fileHandler$isDragge, _fileHandler$isDragge2, _fileHandler$clickTar;
  const [slots, childrenWithoutSlots] = useSlots(children, {
    toolbar: Toolbar,
    actions: Actions,
    label: Label
  });
  const [uncontrolledViewMode, uncontrolledSetViewMode] = useState('edit');
  const [view, setView] = controlledViewMode === undefined ? [uncontrolledViewMode, uncontrolledSetViewMode] : [controlledViewMode, controlledSetViewMode];
  const [html, setHtml] = useState(null);
  const safeSetHtml = useSafeAsyncCallback(setHtml);
  const previewStale = useRef(true);
  useEffect(() => {
    previewStale.current = true;
  }, [value]);
  const loadPreview = async () => {
    if (!previewStale.current) return;
    previewStale.current = false; // set to false before the preview is rendered to prevent multiple concurrent calls
    safeSetHtml(null);
    safeSetHtml(await onRenderPreview(value));
  };
  useEffect(() => {
    // we have to be careful here - loading preview sets state which causes a render which can cause an infinite loop,
    // however that should be prevented by previewStale.current being set immediately in loadPreview
    if (view === 'preview' && previewStale.current) loadPreview();
  });
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: opts => {
      var _inputRef$current;
      return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus(opts);
    },
    scrollIntoView: opts => {
      var _containerRef$current;
      return (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.scrollIntoView(opts);
    }
  }));
  const inputHeight = useRef(0);
  if (inputRef.current && inputRef.current.offsetHeight) inputHeight.current = inputRef.current.offsetHeight;
  const onInputChange = useCallback(e => {
    onChange(e.target.value);
  }, [onChange]);
  const emitChange = useSyntheticChange({
    inputRef,
    fallbackEventHandler: onInputChange
  });
  const fileHandler = useFileHandling({
    emitChange,
    value,
    inputRef,
    disabled,
    onUploadFile,
    acceptedFileTypes
  });
  const listEditor = useListEditing({
    emitChange
  });
  const indenter = useIndenting({
    emitChange
  });
  const formattingToolsRef = useRef(null);

  // use state instead of ref since we need to recalculate when the element mounts
  const containerRef = useRef(null);
  const [condensed, setCondensed] = useState(false);
  const onResize = useCallback(
  // it's fine that this isn't debounced because calling setCondensed with the current value will not trigger a render
  () => setCondensed(containerRef.current !== null && containerRef.current.clientWidth < CONDENSED_WIDTH_THRESHOLD), []);
  useResizeObserver(onResize, containerRef);

  // workaround for Safari bug where layout is otherwise not recalculated
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const parent = container.parentElement;
    const nextSibling = containerRef.current.nextSibling;
    parent === null || parent === void 0 ? void 0 : parent.removeChild(container);
    parent === null || parent === void 0 ? void 0 : parent.insertBefore(container, nextSibling);
  }, [condensed]);

  // the ID must be unique for each instance while remaining constant across renders
  const id = useId();
  const descriptionId = `${id}-description`;
  const savedRepliesRef = useRef(null);
  const onSelectSavedReply = reply => {
    // need to wait a tick to run after the selectmenu finishes closing
    requestAnimationFrame(() => emitChange(reply.content));
  };
  const savedRepliesContext = savedReplies ? {
    savedReplies,
    onSelect: onSelectSavedReply,
    ref: savedRepliesRef
  } : null;
  const inputCompositionProps = useIgnoreKeyboardActionsWhileComposing(e => {
    const format = formattingToolsRef.current;
    if (disabled) return;
    if (e.ctrlKey && e.key === '.') {
      var _savedRepliesRef$curr;
      // saved replies are always Control, even on Mac
      (_savedRepliesRef$curr = savedRepliesRef.current) === null || _savedRepliesRef$curr === void 0 ? void 0 : _savedRepliesRef$curr.openMenu();
      e.preventDefault();
      e.stopPropagation();
    } else if (isModifierKey(e)) {
      if (e.key === 'Enter') onPrimaryAction === null || onPrimaryAction === void 0 ? void 0 : onPrimaryAction();else if (e.key === 'b') format === null || format === void 0 ? void 0 : format.bold();else if (e.key === 'i') format === null || format === void 0 ? void 0 : format.italic();else if (e.shiftKey && e.key === '.') format === null || format === void 0 ? void 0 : format.quote();else if (e.key === 'e') format === null || format === void 0 ? void 0 : format.code();else if (e.key === 'k') format === null || format === void 0 ? void 0 : format.link();else if (e.key === '8') format === null || format === void 0 ? void 0 : format.unorderedList();else if (e.shiftKey && e.key === '7') format === null || format === void 0 ? void 0 : format.orderedList();else if (e.shiftKey && e.key === 'l') format === null || format === void 0 ? void 0 : format.taskList();else if (e.shiftKey && e.key === 'p') setView === null || setView === void 0 ? void 0 : setView('preview');else return;
      e.preventDefault();
      e.stopPropagation();
    } else {
      listEditor.onKeyDown(e);
      indenter.onKeyDown(e);
    }
  });
  useEffect(() => {
    if (view === 'preview') {
      editorsInPreviewMode.push(id);
      const handler = e => {
        if (!e.defaultPrevented && editorsInPreviewMode.at(-1) === id && isModifierKey(e) && e.shiftKey && e.key === 'p') {
          setView === null || setView === void 0 ? void 0 : setView('edit');
          setTimeout(() => {
            var _inputRef$current2;
            return (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0 ? void 0 : _inputRef$current2.focus();
          });
          e.preventDefault();
        }
      };
      document.addEventListener('keydown', handler);
      return () => {
        document.removeEventListener('keydown', handler);
        // Performing the filtering in the cleanup callback allows it to happen also when
        // the user clicks the toggle button, not just on keyboard shortcut
        editorsInPreviewMode = editorsInPreviewMode.filter(id_ => id_ !== id);
      };
    }
  }, [view, setView, id]);

  // If we don't memoize the context object, every child will rerender on every render even if memoized
  const context = useMemo(() => ({
    disabled,
    formattingToolsRef,
    condensed,
    required
  }), [disabled, formattingToolsRef, condensed, required]);

  // We are using MarkdownEditorContext instead of the built-in Slots context because Slots' context is not typesafe
  return /*#__PURE__*/React__default.createElement(MarkdownEditorContext.Provider, {
    value: context
  }, /*#__PURE__*/React__default.createElement("fieldset", {
    "aria-disabled": disabled /* if we set disabled={true}, we can't enable the buttons that should be enabled */,
    "aria-describedby": describedBy ? `${descriptionId} ${describedBy}` : descriptionId,
    style: {
      appearance: 'none',
      border: 'none',
      minInlineSize: 'auto'
    }
  }, /*#__PURE__*/React__default.createElement(FormattingTools, {
    ref: formattingToolsRef,
    forInputId: id
  }), /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: 'none'
    }
  }, childrenWithoutSlots), slots.label, /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      borderColor: 'border.default',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 2,
      p: 2,
      height: fullHeight ? '100%' : undefined,
      minInlineSize: 'auto',
      bg: 'canvas.default',
      color: disabled ? 'fg.subtle' : 'fg.default',
      ...sx
    },
    ref: containerRef
  }, /*#__PURE__*/React__default.createElement(VisuallyHidden, {
    id: descriptionId,
    "aria-live": "polite"
  }, "Markdown input:", view === 'preview' ? ' preview mode selected.' : ' edit mode selected.'), /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: 'flex',
      pb: 2,
      gap: 2,
      justifyContent: 'space-between'
    },
    as: "header"
  }, /*#__PURE__*/React__default.createElement(ViewSwitch, {
    selectedView: view,
    onViewSelect: setView,
    disabled: (fileHandler === null || fileHandler === void 0 ? void 0 : fileHandler.uploadProgress) !== undefined,
    onLoadPreview: loadPreview
  }), /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/React__default.createElement(SavedRepliesContext.Provider, {
    value: savedRepliesContext
  }, view === 'edit' && ((_slots$toolbar = slots.toolbar) !== null && _slots$toolbar !== void 0 ? _slots$toolbar : /*#__PURE__*/React__default.createElement(CoreToolbar, null, /*#__PURE__*/React__default.createElement(DefaultToolbarButtons, null)))))), /*#__PURE__*/React__default.createElement(MarkdownInput, _extends({
    value: value,
    onChange: onInputChange,
    emojiSuggestions: emojiSuggestions,
    mentionSuggestions: mentionSuggestions,
    referenceSuggestions: referenceSuggestions,
    backlinkSuggestions: backlinkSuggestions,
    disabled: disabled,
    placeholder: placeholder,
    id: id,
    maxLength: maxLength,
    ref: inputRef,
    fullHeight: fullHeight,
    isDraggedOver: (_fileHandler$isDragge = fileHandler === null || fileHandler === void 0 ? void 0 : fileHandler.isDraggedOver) !== null && _fileHandler$isDragge !== void 0 ? _fileHandler$isDragge : false,
    minHeightLines: minHeightLines,
    maxHeightLines: maxHeightLines,
    visible: view === 'edit',
    monospace: monospace,
    required: required,
    name: name,
    pasteUrlsAsPlainText: pasteUrlsAsPlainText
  }, inputCompositionProps, fileHandler === null || fileHandler === void 0 ? void 0 : fileHandler.pasteTargetProps, fileHandler === null || fileHandler === void 0 ? void 0 : fileHandler.dropTargetProps)), view === 'preview' && /*#__PURE__*/React__default.createElement(Box, {
    sx: {
      p: 1,
      overflow: 'auto',
      height: fullHeight ? '100%' : undefined,
      minHeight: inputHeight.current,
      boxSizing: 'border-box'
    },
    "aria-live": "polite",
    tabIndex: -1
  }, /*#__PURE__*/React__default.createElement("h2", {
    style: a11yOnlyStyle
  }, "Rendered Markdown Preview"), /*#__PURE__*/React__default.createElement(MarkdownViewer, {
    dangerousRenderedHTML: {
      __html: html || 'Nothing to preview'
    },
    loading: html === null,
    openLinksInNewTab: true
  })), /*#__PURE__*/React__default.createElement(Footer, {
    actionButtons: slots.actions,
    fileDraggedOver: (_fileHandler$isDragge2 = fileHandler === null || fileHandler === void 0 ? void 0 : fileHandler.isDraggedOver) !== null && _fileHandler$isDragge2 !== void 0 ? _fileHandler$isDragge2 : false,
    fileUploadProgress: fileHandler === null || fileHandler === void 0 ? void 0 : fileHandler.uploadProgress,
    uploadButtonProps: (_fileHandler$clickTar = fileHandler === null || fileHandler === void 0 ? void 0 : fileHandler.clickTargetProps) !== null && _fileHandler$clickTar !== void 0 ? _fileHandler$clickTar : null,
    errorMessage: fileHandler === null || fileHandler === void 0 ? void 0 : fileHandler.errorMessage,
    previewMode: view === 'preview'
  }))));
});
var _MarkdownEditor = MarkdownEditor;

export { _MarkdownEditor as default };
