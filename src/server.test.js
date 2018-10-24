import { start } from './server'

jest.mock('apollo-server', () => ({
  ApolloServer: function() {
    this.listen = jest.fn().mockResolvedValue({
      port: 1111,
      url: 'http://test',
      subscriptionsUrl: 'ws://test',
      subscriptionsPath: '?'
    })
  }
}))

console.log = jest.fn()

describe('./start-apollo-server', () => {
  it('logs correct data', async () => {
    await start()
    expect(console.log).toBeCalledWith(`
        CLAM GraphQL API running
        ========================
        environment: development
        url: http://test
        port: 1111
        subscriptionsPath: ?
        subscriptionsUrl: ws://test
    `)
  })

  it('adds engine key in production', async () => {
    process.env.NODE_ENV = 'production'
    process.env.ENGINE_API_KEY = 'test'
    await start()
  })
})
