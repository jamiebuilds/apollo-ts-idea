// Generated file, do not modify

interface Author {
  id: string
  name: string
}

interface Book {
  id: string
  title: string
  description: string
  author: Author
}

interface Color {
  id: string
  name: string
  hue: number
  saturation: number
  lightness: number
}

interface Query {
  books(vars: { count?: number, cursor: string, reverse: boolean }): Array<Book>
  colors(vars: { hue?: number, saturation?: number, lightness?: number }): Array<Color>
}

interface TypeDefs {
  // ????
}

export declare let typeDefs: TypeDefs
