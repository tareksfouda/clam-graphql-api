import resolvers from './'

describe('Query Resolvers', () => {

    it('are being exported', () => {
        expect(resolvers.Query).toBeDefined()
    })

})