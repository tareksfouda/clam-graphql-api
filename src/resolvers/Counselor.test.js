import { photo } from './Counselor'

describe(`Query.Counselor.photo`, () => {
  it(`success - returns photo`, () => {
    const results = photo({ name: 'Eve Porcello' })
    expect(results).toEqual({
      full:
        'https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/eve-porcello.jpg',
      thumb:
        'https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/eve-porcello-thumb.jpg'
    })
  })
})
