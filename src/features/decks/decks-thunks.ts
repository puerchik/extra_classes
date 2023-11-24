import { decksAPI } from "./decks-api"
import { ActionsType, setDecksAC } from "./decks-reducer"
import { Dispatch } from "redux"


export const fetchDecksTC = () => {
    return (dispatch: Dispatch<ActionsType>) => {
      decksAPI.getDecks()
        .then((res) => {
          dispatch(setDecksAC(res.data.items))
        })
    }
  }
  