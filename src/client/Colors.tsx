import * as React from "react"
import { ColorsQuery } from "../graphql/ColorsQuery"
import { Query } from "react-apollo"

export interface ColorsProps {
  hue?: number
  saturation?: number
  lightness?: number
}

export function Colors(props: ColorsProps) {
  return (
    <Query
      query={ColorsQuery}
      variables={{
        hue: props.hue,
				saturation: props.saturation,
				lightness: props.lightness,
      }}
    >
      {({ loading, error, data, fetchMore }) => {
        // ...
      })}
    </Query>
  )
}
