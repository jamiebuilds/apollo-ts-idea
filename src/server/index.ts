import { ApolloServer } from "apollo-server"
import { typeDefs } from "../graphql/_typeDefs"
import { mocks } from "./mocks"
import { resolvers } from "./resolvers"

async function main() {
	let server = new ApolloServer({
    typeDefs,
    mocks,
    resolvers,
  })

  let { url } = await server.listen(1235)

	console.log(`Apollo server running at ${url}`)
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
