const Counselor = {
  photo: parent => ({
    full: `https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/${
      parent.id
    }.jpg`,
    thumb: `https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/${
      parent.id
    }-thumb.jpg`
  }),
  cabin: (parent, args, { cabins }) =>
    cabins.find(c => c.animal === parent.cabinId)
}

export default Counselor
