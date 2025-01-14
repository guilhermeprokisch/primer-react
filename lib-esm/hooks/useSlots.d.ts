import React from 'react';
export type SlotConfig = Record<string, React.ComponentType<any>>;
type SlotElements<Type extends SlotConfig> = {
    [Property in keyof Type]: React.ReactElement<React.ComponentPropsWithoutRef<Type[Property]>, Type[Property]>;
};
/**
 * Extract components from `children` so we can render them in different places,
 * allowing us to implement components with SSR-compatible slot APIs.
 * Note: We can only extract direct children, not nested ones.
 */
export declare function useSlots<T extends SlotConfig>(children: React.ReactNode, config: T): [Partial<SlotElements<T>>, React.ReactNode[]];
export {};
