import { useAppSelector } from '../../../app/store'
import { DeckType } from '../decks-api'
import { DeckItem } from './DeckItem/DeckItem'
import s from './DecksList.module.css'

export const DecksList = () => {

  const decks = useAppSelector<DeckType[]>(state => state.decks.decks)
  console.log(decks);

  return (
    <>
      <ul className={s.list}>
        {decks.map(deck => <DeckItem deck={deck} />)}
      </ul>
    </>
  )
}
