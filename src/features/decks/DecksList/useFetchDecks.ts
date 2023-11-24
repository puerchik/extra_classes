import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store";
import { fetchDecksTC } from "../decks-thunks";
import { DeckType } from "../decks-api";

export const useFetchDecks = () => {

    const dispatch = useAppDispatch();
    const decks = useAppSelector<DeckType[]>(state => state.decks.decks)
console.log(decks);

    useEffect(() => {
        dispatch(fetchDecksTC())
    }, [])

    return {
        decks
    }
}
