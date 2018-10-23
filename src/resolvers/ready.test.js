import { ready } from './ready'

describe('Query.ready', () => {

    it('success - returns true', () => 
        expect(ready()).toEqual(true) 
    )

})