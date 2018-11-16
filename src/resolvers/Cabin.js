const Cabin = {
  photo: parent => ({
    full: `https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/cabins/${
      parent.animal
    }.jpg`,
    thumb: `https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/cabins/${
      parent.animal
    }-thumb.jpg`
  }),
  counselor: (parent, args, { counselors }) =>
    counselors.find(c => parent.animal === c.cabinId)
}

export default Cabin
