import gql from "graphql-tag"

export let BooksQuery = gql`
  query BooksQuery($cursor: ID, $count: Int = 20, $reverse: Boolean = false) {
    books(cursor: $cursor, count: $count, reverse: $reverse) {
      id
      title
      description
      author {
        id
        name
      }
    }
  }
`
