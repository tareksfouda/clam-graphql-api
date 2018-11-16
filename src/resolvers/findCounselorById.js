export const findCounselorById = (parent, { id }, { counselors }) =>
  counselors.find(c => c.id === id)
