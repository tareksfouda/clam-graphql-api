import env from '../environment'

export const githubAuthUrl = () => {
  const GITHUB_CLIENT_ID = env('GITHUB_CLIENT_ID')

  console.log('id: ', GITHUB_CLIENT_ID, process.env.GITHUB_CLIENT_ID)

  if (!GITHUB_CLIENT_ID) {
    throw new Error('A github client has not been configured')
  }

  return `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user`
}
