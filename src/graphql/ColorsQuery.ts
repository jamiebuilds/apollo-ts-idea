import gql from "graphql-tag"

export let ColorsQuery = gql`
  query ColorsQuery($hue: Int, $saturation: Int, $lightness: Int) {
    colors(hue: $hue, saturation: $saturation, lightness: $lightness) {
      id
      name
      hue
      saturation
      lightness
    }
  }
`
