import { allCounselors } from './allCounselors'

describe(`Query.allCounselors`, () => {
  it(`success - returns allCounselors`, () => {
    let results = allCounselors(null, {}, { counselors: [] })
    expect(results).toEqual([])
  })
  it(`success - returns filtered allCounselors`, () => {
    var counselors = [
      { rank: 'ALPHA' },
      { rank: 'BETA' },
      { rank: 'RELEASE_CANDIDATE' },
      { rank: 'ALPHA' },
      { rank: 'BETA' }
    ]
    let results = allCounselors(null, { rank: 'ALPHA' }, { counselors })
    expect(results).toEqual([{ rank: 'ALPHA' }, { rank: 'ALPHA' }])
  })
})
