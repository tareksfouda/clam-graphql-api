import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './typeDefs.graphql'

export const start = async () => {
  const engine = process.env.ENGINE_API_KEY
    ? { apiKey: process.env.ENGINE_API_KEY }
    : null

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    engine,
    introspection: true
  })

  let { port, url, subscriptionsUrl, subscriptionsPath } = await server.listen(
    process.env.PORT || 4000
  )

  console.log(`
        CLAM GraphQL API running
        ========================
        engine: ${process.env.ENGINE_API_KEY !== undefined}
        url: ${url}
        port: ${port}
        subscriptionsPath: ${subscriptionsPath}
        subscriptionsUrl: ${subscriptionsUrl}
    `)
}
