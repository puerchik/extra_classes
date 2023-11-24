import { decksAPI } from "./decks-api"
import { addDeckAC, setDecksAC } from "./decks-reducer"
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
                console.log('res.data.items:', res.data);
                
                dispatch(addDeckAC(res.data))
            })
    }
}
