import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import counselors from './data/counselors.json'
import cabins from './data/cabins.json'

/* Importing TypeDefs is a little brittle

   They get cached and slow down our workflow. More on the issue here:
   https://github.com/detrohutt/babel-plugin-import-graphql/issues/47

   We would like to simply import the typeDefs directly and have any changes
   instantly appear. At present, for that we must read the file directly
   until there is a better solution.

   Temporary solution: 

*/
import { readFileSync } from 'fs'
const typeDefs = readFileSync('./src/typeDefs.graphql', 'UTF-8')
// import typeDefs from './typeDefs.graphql'

export const start = async () => {
  const engine = process.env.ENGINE_API_KEY
    ? { apiKey: process.env.ENGINE_API_KEY }
    : null

  const context = { counselors, cabins }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
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
