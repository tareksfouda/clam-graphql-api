import { start } from './server' 
import './index.js'
jest.mock('./server')

describe('API entry point', () => {

    it('Starts the Apollo Server', () => {
        expect(start).toHaveBeenCalledTimes(1)
    })

})