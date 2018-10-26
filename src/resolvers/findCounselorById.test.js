import { findCounselorById } from './findCounselorById'

describe(`Query.findCounselorById`, () => {
  it(`success - returns filtered findCounselorById`, () => {
    var counselors = [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
      { id: '5' }
    ]
    let results = findCounselorById(null, { id: '1' }, { counselors })
    expect(results).toEqual({ id: '1' })
  })
})
