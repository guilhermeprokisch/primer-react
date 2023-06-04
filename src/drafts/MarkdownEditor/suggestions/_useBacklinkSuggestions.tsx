import React, { useMemo } from 'react'
import { suggestionsCalculator, UseSuggestionsHook } from '.'
import { ActionList } from '../../../ActionList'
import { Suggestion, Trigger } from '../../InlineAutocomplete'
import Text from '../../../Text'
import { score } from 'fzy.js'

export type Backlink = {
  titleHtml: string
  titleText: string
  id: string
  iconHtml?: string
}

const trigger: Trigger = {
  triggerChar: '[[',
  multiWord: true,
}

const backlinkToSuggestion = (backlink: Backlink): Suggestion => ({
  value: ` ${backlink.titleText} ]]`,
  render: props => (
    <ActionList.Item {...props}>
      {backlink.iconHtml && (
        <ActionList.LeadingVisual>
          <span dangerouslySetInnerHTML={{ __html: backlink.iconHtml }} />
        </ActionList.LeadingVisual>
      )}
      <Text
        sx={{
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          display: 'block',
          overflow: 'hidden',
          maxWidth: 400,
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: backlink.titleHtml }} />
      </Text>{' '}
      <ActionList.Description>[[{backlink.id}</ActionList.Description>
    </ActionList.Item>
  ),
})

const scoreSuggestion = (query: string, backlink: Backlink): number => {
  // fzy unituitively returns Infinity if the length of the item is less than or equal to the length of the query
  const fzyScore = score(query, `${backlink.id} ${backlink.titleText}`)
  // Here, unlike for mentionables, we don't need to check for equality because the user's query
  // can never equal the search string (we don't do filtering if the query is in "#123 some text" form)
  return fzyScore === Infinity ? -Infinity : fzyScore
}

export const useBacklinkSuggestions: UseSuggestionsHook<Backlink> = backlinks => {
  const calculateSuggestions = useMemo(() => {
    const calculator = suggestionsCalculator(backlinks, scoreSuggestion, backlinkToSuggestion)
    return async (query: string) => {
      if (/^\d+\s/.test(query)) return [] // don't return anything if the query is in the form #123 ..., assuming they already have the number they want
      return calculator(query)
    }
  }, [backlinks])
  return {
    calculateSuggestions,
    trigger,
  }
}
