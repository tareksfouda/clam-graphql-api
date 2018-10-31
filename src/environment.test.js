import env from './environment'

describe('environment', () => {
  it('success - returns vars', () => {
    process.env.GNAR = 'gnarly'
    expect(env('GNAR')).toEqual('gnarly')
  })
})
