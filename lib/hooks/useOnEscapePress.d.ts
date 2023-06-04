/// <reference types="react" />
/**
 * Sets up a `keydown` listener on `window.document`. If
 * 1) The pressed key is "Escape", and
 * 2) The event has not had `.preventDefault()` called
 * The given callback will be executed.
 *
 * Note: If multiple `useOnEscapePress` hooks are active simultaneously, the
 * callbacks will occur in reverse order. In other words, if a parent component
 * and a child component both call `useOnEscapePress`, when the user presses
 * Escape, the child component's callback will execute, followed by the parent's
 * callback. Each callback has the chance to call `.preventDefault()` on the
 * event to prevent further callbacks.
 *
 * @param callback {(e: KeyboardEvent) => void} The callback that gets executed
 * when the Escape key is pressed. The KeyboardEvent generated by the Escape
 * keypress is passed as the only argument.
 *
 * @param callbackDependencies {React.DependencyList} The dependencies of the given
 * `onEscape` callback for memoization. Omit this param if the callback is already
 * memoized. See `React.useCallback` for more info on memoization.
 */
export declare const useOnEscapePress: (onEscape: (e: KeyboardEvent) => void, callbackDependencies?: import("react").DependencyList) => void;
