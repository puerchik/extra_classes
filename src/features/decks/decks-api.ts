import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es/v1/',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks() {
    return instance.get<ResponseType>('decks')
  }
}

// types

export type DeckType = {
  author: {
    id: string,
    name: string
  },
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

export type ResponseType = {
  items: DeckType[],
  pagination: {
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number
  },
  maxCardsCount: number
}