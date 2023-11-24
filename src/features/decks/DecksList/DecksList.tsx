import { useAppDispatch, useAppSelector } from '../../../app/store'
import { DeckType } from '../decks-api'
import { fetchDecksTC } from '../decks-thunks'
import { DeckItem } from './DeckItem/DeckItem'
import s from './DecksList.module.css'
import { useEffect } from 'react'


export const DecksList = () => {

  const dispatch = useAppDispatch();
  const decks = useAppSelector<DeckType[]>(state => state.decks.decks)

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return (
    <>
      <ul className={s.list}>
        {decks.map(deck => <DeckItem key={deck.id} deck={deck} />)}
      </ul>
    </>
  )
}
