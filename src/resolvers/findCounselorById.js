export const findCounselorById = (parent, { id }, { counselors }) => {
  var [found] = counselors.filter(c => c.id === id)
  return found
}
