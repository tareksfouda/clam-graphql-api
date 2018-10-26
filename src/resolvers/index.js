import * as Counselor from './Counselor'
import { allCounselors } from './allCounselors'
import { findCounselorById } from './findCounselorById'
import { totalCounselors } from './totalCounselors'

export default {
  Query: {
    totalCounselors,
    allCounselors,
    findCounselorById
  },
  Counselor
}
