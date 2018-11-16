import Counselor from './Counselor'
import { allCounselors } from './allCounselors'
import { findCounselorById } from './findCounselorById'
import { totalCounselors } from './totalCounselors'
import { githubAuthUrl } from './githubAuthUrl'
import { allCabins } from './allCabins'
import { findCabinByAnimal } from './findCabinByAnimal'
import Cabin from './Cabin'

export default {
  Query: {
    totalCounselors,
    allCounselors,
    findCounselorById,
    allCabins,
    findCabinByAnimal,
    githubAuthUrl
  },
  Cabin,
  Counselor
}
