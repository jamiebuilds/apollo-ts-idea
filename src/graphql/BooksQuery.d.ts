// Generated file, do not modify

interface BooksQueryI {
  books(vars: { cursor?: string, count?: number, reverse?: boolean }): {
    id: string
    title: string
    description: string
    author: {
      id: string
      name: string
    }
  }
}

export declare let BooksQuery: BooksQueryI
