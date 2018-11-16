import { findCabinByAnimal } from './findCabinByAnimal'

describe(`Query.findCabinByAnimal`, () => {
  it(`success - returns filtered findCabinByAnimal`, () => {
    var cabins = [
      { animal: 'fox' },
      { animal: 'owl' },
      { animal: 'bird' },
      { animal: 'raccoon' },
      { animal: 'bear' }
    ]
    let results = findCabinByAnimal(null, { animal: 'owl' }, { cabins })
    expect(results).toEqual({ animal: 'owl' })
  })
})
