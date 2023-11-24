import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import { useEffect } from 'react'
import { useAppDispatch } from '../../app/store.ts'
import { fetchDecksTC } from './decks-reducer.ts'

export const Decks = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return (
    <div>
      <h1>Decks 🦝</h1>
      <AddNewDeckForm />
      <DecksList />
    </div>
  )
}
