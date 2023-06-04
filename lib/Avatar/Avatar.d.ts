import React from 'react';
import { SxProp } from '../sx';
import { ComponentProps } from '../utils/types';
declare const StyledAvatar: import("styled-components").StyledComponent<"img", any, {
    /** Sets the width and height of the avatar. */
    size?: number | undefined;
    /** Sets the shape of the avatar to a square if true. If false, the avatar will be circular. */
    square?: boolean | undefined;
    /** URL of the avatar image. */
    src: string;
    /** Provide alt text when the Avatar is used without the user's name next to it. */
    alt?: string | undefined;
} & SxProp, never>;
export type AvatarProps = ComponentProps<typeof StyledAvatar>;
declare const Avatar: React.ForwardRefExoticComponent<Omit<{
    key?: React.Key | null | undefined;
    sizes?: string | undefined;
    color?: string | undefined;
    property?: string | undefined;
    height?: string | number | undefined;
    translate?: "yes" | "no" | undefined;
    width?: string | number | undefined;
    hidden?: boolean | undefined;
    children?: React.ReactNode;
    ref?: ((instance: HTMLImageElement | null) => void) | React.RefObject<HTMLImageElement> | null | undefined;
    slot?: string | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    id?: string | undefined;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    tabIndex?: number | undefined;
    radioGroup?: string | undefined;
    role?: React.AriaRole | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "search" | "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | "true" | "false") | undefined;
    'aria-autocomplete'?: "none" | "list" | "inline" | "both" | undefined;
    'aria-busy'?: (boolean | "true" | "false") | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "time" | "true" | "false" | "page" | "step" | "location" | "date" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | "true" | "false") | undefined;
    'aria-dropeffect'?: "link" | "none" | "copy" | "execute" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | "true" | "false") | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | "true" | "false") | undefined;
    'aria-haspopup'?: boolean | "grid" | "dialog" | "menu" | "listbox" | "tree" | "true" | "false" | undefined;
    'aria-hidden'?: (boolean | "true" | "false") | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: (boolean | "true" | "false") | undefined;
    'aria-multiline'?: (boolean | "true" | "false") | undefined;
    'aria-multiselectable'?: (boolean | "true" | "false") | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: (boolean | "true" | "false") | undefined;
    'aria-relevant'?: "all" | "text" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: (boolean | "true" | "false") | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | "true" | "false") | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLImageElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLImageElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLImageElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLImageElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLImageElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLImageElement> | undefined;
    onCompositionEnd?: React.CompositionEventHandler<HTMLImageElement> | undefined;
    onCompositionEndCapture?: React.CompositionEventHandler<HTMLImageElement> | undefined;
    onCompositionStart?: React.CompositionEventHandler<HTMLImageElement> | undefined;
    onCompositionStartCapture?: React.CompositionEventHandler<HTMLImageElement> | undefined;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLImageElement> | undefined;
    onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLImageElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLImageElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLImageElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLImageElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLImageElement> | undefined;
    onChange?: React.FormEventHandler<HTMLImageElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLImageElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLImageElement> | undefined;
    onBeforeInputCapture?: React.FormEventHandler<HTMLImageElement> | undefined;
    onInput?: React.FormEventHandler<HTMLImageElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLImageElement> | undefined;
    onReset?: React.FormEventHandler<HTMLImageElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLImageElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLImageElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLImageElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLImageElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLImageElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onError?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLImageElement> | undefined;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLImageElement> | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLImageElement> | undefined;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLImageElement> | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLImageElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLImageElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onCanPlayThroughCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onDurationChangeCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onEmptied?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onLoadedMetadataCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onRateChangeCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onResize?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onResizeCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onWaiting?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onContextMenuCapture?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onDrag?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLImageElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLImageElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLImageElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLImageElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLImageElement> | undefined;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLImageElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLImageElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLImageElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLImageElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLImageElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLImageElement> | undefined;
    onTouchStartCapture?: React.TouchEventHandler<HTMLImageElement> | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerDownCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerMoveCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerCancelCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerOverCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onLostPointerCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLImageElement> | undefined;
    onScroll?: React.UIEventHandler<HTMLImageElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLImageElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLImageElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLImageElement> | undefined;
    onAnimationStart?: React.AnimationEventHandler<HTMLImageElement> | undefined;
    onAnimationStartCapture?: React.AnimationEventHandler<HTMLImageElement> | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLImageElement> | undefined;
    onAnimationEndCapture?: React.AnimationEventHandler<HTMLImageElement> | undefined;
    onAnimationIteration?: React.AnimationEventHandler<HTMLImageElement> | undefined;
    onAnimationIterationCapture?: React.AnimationEventHandler<HTMLImageElement> | undefined;
    onTransitionEnd?: React.TransitionEventHandler<HTMLImageElement> | undefined;
    onTransitionEndCapture?: React.TransitionEventHandler<HTMLImageElement> | undefined;
    size?: number | undefined;
    square?: boolean | undefined;
    sx?: import("../sx").BetterSystemStyleObject | undefined;
    referrerPolicy?: React.HTMLAttributeReferrerPolicy | undefined;
    crossOrigin?: "" | "anonymous" | "use-credentials" | undefined;
    useMap?: string | undefined;
    alt?: string | undefined;
    src: string;
    loading?: "eager" | "lazy" | undefined;
    decoding?: "auto" | "async" | "sync" | undefined;
    srcSet?: string | undefined;
} & {
    theme?: any;
}, "ref"> & React.RefAttributes<HTMLImageElement>>;
export default Avatar;
