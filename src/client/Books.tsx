import * as React from "react"
import { BooksQuery } from "../graphql/BooksQuery"
import { Query } from "react-apollo"

export function Books() {
  return (
    <Query
      query={BooksQuery}
      variables={{
        cursor: null,
				count: 20,
				reverse: false,
      }}
    >
      {({ loading, error, data, fetchMore }) => {
        // ...
      })}
    </Query>
  )
}
