import { Dispatch } from "redux"
import { DeckType, decksAPI } from "./decks-api"

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

// thunks

export const fetchDecksTC = () => {
  return (dispatch: Dispatch<ActionsType>) => {
    decksAPI.getDecks()
      .then((res) => {
        dispatch(setDecksAC(res.data.items))
      })
  }
}

// types

type SetDecksType = ReturnType<typeof setDecksAC>

type ActionsType =
  | SetDecksType


