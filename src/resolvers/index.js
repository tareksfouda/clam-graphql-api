import * as Counselor from './Counselor'
import { allCounselors } from './allCounselors'
import { findCounselorById } from './findCounselorById'
import { totalCounselors } from './totalCounselors'
import { githubAuthUrl } from './githubAuthUrl'

export default {
  Query: {
    totalCounselors,
    allCounselors,
    findCounselorById,
    githubAuthUrl
  },
  Counselor
}
