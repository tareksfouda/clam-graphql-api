import Counselor from './Counselor'

describe(`Query.Counselor`, () => {
  it(`success - returns photo`, () => {
    const results = Counselor.photo({ id: 'eveporcello' })
    expect(results).toEqual({
      full:
        'https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/eveporcello.jpg',
      thumb:
        'https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/eveporcello-thumb.jpg'
    })
  }),
    it(`success - returns cabin`, () => {
      const cabins = [{ animal: 'owl' }, { animal: 'fox' }, { animal: 'bird' }]
      const results = Counselor.cabin({ cabinId: 'fox' }, null, { cabins })
      expect(results).toEqual({ animal: 'fox' })
    })
})
