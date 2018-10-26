import { totalCounselors } from './totalCounselors'

describe(`Query.totalCounselors`, () => {
  it(`success - returns totalCounselors`, () => {
    let results = totalCounselors(null, {}, { counselors: [] })
    expect(results).toEqual(0)
  })
  it(`success - returns filtered totalCounselors`, () => {
    var counselors = [
      { rank: 'ALPHA' },
      { rank: 'BETA' },
      { rank: 'RELEASE_CANDIDATE' },
      { rank: 'ALPHA' },
      { rank: 'BETA' }
    ]
    let results = totalCounselors(null, { rank: 'ALPHA' }, { counselors })
    expect(results).toEqual(2)
  })
})
