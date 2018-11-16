import { allCabins } from './allCabins'

describe(`Query.allCabins`, () => {
  it(`success - returns allCabins`, () => {
    let results = allCabins(null, {}, { cabins: [] })
    expect(results).toEqual([])
  })
})
