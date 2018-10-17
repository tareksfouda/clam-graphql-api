import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './typeDefs.graphql'

const start = async () => {

    const server = new ApolloServer({ typeDefs, resolvers })
    await server.listen(4000)
    console.log('CLAM GraphQL API running')

}

start()
