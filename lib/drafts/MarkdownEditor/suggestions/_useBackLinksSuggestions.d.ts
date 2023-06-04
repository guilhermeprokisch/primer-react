import { UseSuggestionsHook } from '.';
export type Backlink = {
    titleHtml: string;
    titleText: string;
    id: string;
    iconHtml?: string;
};
export declare const useBackLinksSuggestions: UseSuggestionsHook<Backlink>;
