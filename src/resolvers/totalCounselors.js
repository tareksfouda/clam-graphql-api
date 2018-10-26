export const totalCounselors = (parent, { rank }, { counselors }) =>
  !rank ? counselors.length : counselors.filter(c => c.rank === rank).length
