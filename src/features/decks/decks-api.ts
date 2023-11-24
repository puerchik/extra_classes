import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
    return instance.get<ResponseType<DeckType[]>>('decks')
  },
  addDeck(name: string) {
    return instance.post<DeckType>('decks', { name })
  },
  removeDeck(id: string) {
    return instance.delete<DeckInfoType>(`decks/${id}`)
  }
}

// types

export type DeckInfoType = {
  id: string,
  userId: string,
  name: string,
  isPrivate: true,
  shots: number,
  cover: string,
  rating: number,
  created: Date,
  updated: Date,
  cardsCount: number
}

export type DeckType = {
  author: {
    id: string,
    name: string
  }
} & DeckInfoType

export type ResponseType<T> = {
  items: T,
  pagination: {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number
  },
  maxCardsCount: number
}
