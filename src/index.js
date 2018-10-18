import { ApolloServer } from 'apollo-server'
import resolvers from './resolvers'
import typeDefs from './typeDefs.graphql'

const start = async () => {

    const engine = process.env.NODE_ENV === 'production' ? 
        { apiKey: process.env.APOLLO_ENGINE_KEY } : 
        null

    const server = new ApolloServer({ 
        typeDefs, 
        resolvers,
        subscriptions: {
            lazy: true
        }
    })

    await server.listen(process.env.PORT || 4000)
    console.log(`CLAM GraphQL API running in ${process.env.NODE_ENV} environment`)

}

start()
