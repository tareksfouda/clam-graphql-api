export const findCabinByAnimal = (parent, { animal }, { cabins }) =>
  cabins.find(c => c.animal === animal)
