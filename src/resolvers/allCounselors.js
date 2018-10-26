export const allCounselors = (parent, { rank }, { counselors }) =>
  !rank ? counselors : counselors.filter(c => c.rank === rank)
