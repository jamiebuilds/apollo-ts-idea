import gql from "graphql-tag"

export let typeDefs = gql`
  type Author {
    id: ID!
    name: String!
  }

  type Book {
    id: ID!
    title: String!
    description: String!
    author: Author!
  }

  type Color {
    id: ID!
    name: String!
    hue: Int!
    saturation: Int!
    lightness: Int!
  }

  type Query {
    books(count: Int, cursor: ID, reverse: Boolean): [Book!]!
    colors(hue: Int, saturation: Int, lightness: Int): [Color!]!
  }
`
