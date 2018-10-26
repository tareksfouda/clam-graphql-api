export const photo = parent => ({
  full: `https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/${parent.name
    .replace(/\s+/g, '-')
    .toLowerCase()}.jpg`,
  thumb: `https://res.cloudinary.com/hmaz4q3oh/image/upload/v1540518371/counselors/${parent.name
    .replace(/\s+/g, '-')
    .toLowerCase()}-thumb.jpg`
})
