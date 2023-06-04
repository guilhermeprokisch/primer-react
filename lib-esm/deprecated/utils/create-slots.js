import React__default from 'react';
import { useForceUpdate } from '../../utils/use-force-update.js';
import useIsomorphicLayoutEffect from '../../utils/useIsomorphicLayoutEffect.js';

/**
 * @deprecated Use the `useSlots` hook instead.
 *
 * createSlots is a factory that can create a
 *  typesafe Slots + Slot pair to use in a component definition
 *  For example: ActionList.Item uses createSlots to get a Slots wrapper
 *  + Slot component that is used by LeadingVisual, Description
 */
const createSlots = slotNames => {
  const SlotsContext = /*#__PURE__*/React__default.createContext({
    registerSlot: () => null,
    unregisterSlot: () => null,
    context: {}
  });

  // maintain a static reference to avoid infinite render loop
  const defaultContext = Object.freeze({});

  /** Slots uses a Double render strategy inspired by [reach-ui/descendants](https://github.com/reach/reach-ui/tree/develop/packages/descendants)
   *  Slot registers themself with the Slots parent.
   *  When all the children have mounted = registered themselves in slot,
   *  we re-render the parent component to render with slots
   */
  const Slots = ({
    context = defaultContext,
    children
  }) => {
    // initialise slots
    const slotsDefinition = {};
    slotNames.map(name => slotsDefinition[name] = null);
    const slotsRef = React__default.useRef(slotsDefinition);
    const rerenderWithSlots = useForceUpdate();
    const [isMounted, setIsMounted] = React__default.useState(false);

    // fires after all the effects in children
    useIsomorphicLayoutEffect(() => {
      rerenderWithSlots();
      setIsMounted(true);
    }, [rerenderWithSlots]);
    const registerSlot = React__default.useCallback((name, contents) => {
      slotsRef.current[name] = contents;

      // don't render until the component mounts = all slots are registered
      if (isMounted) rerenderWithSlots();
    }, [isMounted, rerenderWithSlots]);

    // Slot can be removed from the tree as well,
    // we need to unregister them from the slot
    const unregisterSlot = React__default.useCallback(name => {
      slotsRef.current[name] = null;
      rerenderWithSlots();
    }, [rerenderWithSlots]);

    /**
     * Slots uses a render prop API so abstract the
     * implementation detail of using a context provider.
     */
    const slots = slotsRef.current;
    return /*#__PURE__*/React__default.createElement(SlotsContext.Provider, {
      value: {
        registerSlot,
        unregisterSlot,
        context
      }
    }, children(slots));
  };
  function Slot(props) {
    const {
      name,
      children
    } = props;
    const {
      registerSlot,
      unregisterSlot,
      context
    } = React__default.useContext(SlotsContext);
    useIsomorphicLayoutEffect(() => {
      registerSlot(name, typeof children === 'function' ? children(context) : children);
      return () => unregisterSlot(name);
    }, [name, children, registerSlot, unregisterSlot, context]);
    return null;
  }
  return {
    Slots,
    Slot
  };
};
var createSlots$1 = createSlots;

export { createSlots$1 as default };