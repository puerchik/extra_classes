import { DeckItem } from './DeckItem/DeckItem'
import s from './DecksList.module.css'
import { useFetchDecks } from './useFetchDecks'

export const DecksList = () => {

  const { decks } = useFetchDecks();

  return (
    <>
      <ul className={s.list}>
        {decks.map(deck => <DeckItem key={deck.id} deck={deck} />)}
      </ul>
    </>
  )
}
