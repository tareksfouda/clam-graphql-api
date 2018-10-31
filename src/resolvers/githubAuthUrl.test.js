import { githubAuthUrl } from './githubAuthUrl'

var m = jest.fn()
jest.mock('../environment', () =>
  jest
    .fn()
    .mockReturnValueOnce('XYZ')
    .mockReturnValueOnce(null)
)

describe(`Query.githubAuthUrl`, () => {
  it(`success - returns github authorization url`, () => {
    m.mockReturnValueOnce({
      GITHUB_CLIENT_ID: 'XYZ'
    })
    expect(githubAuthUrl()).toEqual(
      'https://github.com/login/oauth/authorize?client_id=XYZ&scope=user'
    )
  })
  it(`success - throws an error when GITHUB_CLIENT_ID is not provided`, () => {
    expect(githubAuthUrl).toThrowError()
  })
})
