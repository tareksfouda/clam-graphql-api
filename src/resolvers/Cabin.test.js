import Cabin from './Cabin'

describe(`Query.Cabin`, () => {
  it(`success - returns photo`, () => {
    const results = Cabin.photo({ animal: 'owl' })
    expect(results).toEqual({
      full:
        'https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/cabins/owl.jpg',
      thumb:
        'https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/cabins/owl-thumb.jpg'
    })
  }),
    it(`success - returns counselor`, () => {
      const counselors = [
        { cabinId: 'owl', id: 'a' },
        { cabinId: 'fox', id: 'b' },
        { cabinId: 'bear', id: 'c' }
      ]
      const results = Cabin.counselor({ animal: 'fox' }, null, { counselors })
      expect(results).toEqual({ cabinId: 'fox', id: 'b' })
    })
})
