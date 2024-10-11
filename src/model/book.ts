export interface BookListResponse {
  data: Book[]
}

export interface BookDetail {
  data: Book
}

export interface Book {
  id: number
  Year: number
  Title: string
  handle: string
  Publisher: string
  ISBN: string
  Pages: number
  Notes: string[]
  created_at: string
  villains: Villain[]
}

export interface Villain {
  name: string
  url: string
}