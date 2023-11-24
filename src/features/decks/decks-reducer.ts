import { DeckType } from "./decks-api"

const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: ActionsType): DecksState => {
  switch (action.type) {
    case 'DECKS/SET-DECKS':
      return { ...state, decks: action.decks }
    case 'DECKS/ADD-DECK':
      return { ...state, decks: [action.deck, ...state.decks] }
    case 'DECKS/DELETE-DECK':
      return { ...state, decks: state.decks.filter(deck => deck.id !== action.id) }
    default:
      return state
  }

}

// actions

export const setDecksAC = (decks: DeckType[]) => {
  return {
    type: 'DECKS/SET-DECKS',
    decks
  } as const
}
export const addDeckAC = (deck: DeckType) => {
  return {
    type: 'DECKS/ADD-DECK',
    deck
  } as const
}
export const removeDeckAC = (id: string) => {
  return {
    type: 'DECKS/DELETE-DECK',
    id
  } as const
}

// types

export type SetDecksType = ReturnType<typeof setDecksAC>
export type AddDeckType = ReturnType<typeof addDeckAC>
export type RemoveDeckType = ReturnType<typeof removeDeckAC>

export type ActionsType =
  | SetDecksType
  | AddDeckType
  | RemoveDeckType
