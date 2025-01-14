import React__default, { useMemo } from 'react';
import { suggestionsCalculator } from './index.js';
import { ActionList } from '../../../ActionList/index.js';
import { score } from 'fzy.js';
import Text from '../../../Text/Text.js';

const trigger = {
  triggerChar: '[[',
  multiWord: true
};
const backlinkToSuggestion = backlink => ({
  value: `${backlink.titleText}]]`,
  render: props => /*#__PURE__*/React__default.createElement(ActionList.Item, props, backlink.iconHtml && /*#__PURE__*/React__default.createElement(ActionList.LeadingVisual, null, /*#__PURE__*/React__default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: backlink.iconHtml
    }
  })), /*#__PURE__*/React__default.createElement(Text, {
    sx: {
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      display: 'block',
      overflow: 'hidden',
      maxWidth: 400
    }
  }, /*#__PURE__*/React__default.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: backlink.titleHtml
    }
  })), ' ')
});
const scoreSuggestion = (query, backlink) => {
  // fzy unituitively returns Infinity if the length of the item is less than or equal to the length of the query
  const fzyScore = score(query, `${backlink.id} ${backlink.titleText}`);
  // Here, unlike for mentionables, we don't need to check for equality because the user's query
  // can never equal the search string (we don't do filtering if the query is in "#123 some text" form)
  return fzyScore === Infinity ? -Infinity : fzyScore;
};
const useBacklinkSuggestions = backlinks => {
  const calculateSuggestions = useMemo(() => {
    const calculator = suggestionsCalculator(backlinks, scoreSuggestion, backlinkToSuggestion);
    return async query => {
      if (/^\d+\s/.test(query)) return []; // don't return anything if the query is in the form #123 ..., assuming they already have the number they want
      return calculator(query);
    };
  }, [backlinks]);
  return {
    calculateSuggestions,
    trigger
  };
};

export { useBacklinkSuggestions };
