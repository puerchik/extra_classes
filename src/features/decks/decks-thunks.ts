import { decksAPI } from "./decks-api"
import { addDeckAC, removeDeckAC, setDecksAC } from "./decks-reducer"
import { Dispatch } from "redux"


export const fetchDecksTC = () => {
    return (dispatch: Dispatch) => {
        decksAPI.getDecks()
            .then((res) => {
                dispatch(setDecksAC(res.data.items))
            })
    }
}

export const addDeckTC = (name: string) => {
    return (dispatch: Dispatch) => {
        decksAPI.addDeck(name)
            .then((res) => {
                dispatch(addDeckAC(res.data))
            })
    }
}

export const removeDeckTC = (id: string) => {
    return (dispatch: Dispatch) => {
        decksAPI.removeDeck(id)
        .then((res)=>{
            dispatch(removeDeckAC(res.data.id))
        })
    }
}
