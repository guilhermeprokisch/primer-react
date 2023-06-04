import React from 'react';
type LiveRegionContext = {
    announce: (message: string) => void;
    message: string;
};
declare const LiveRegionContext: React.Context<LiveRegionContext | null>;
declare function useLiveRegion(): LiveRegionContext;
declare function LiveRegion({ children }: React.PropsWithChildren): JSX.Element;
declare function LiveRegionOutlet(): JSX.Element;
declare function Message({ value }: {
    value: string;
}): null;
export { LiveRegion, LiveRegionOutlet, Message, useLiveRegion };
