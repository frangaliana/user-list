const data = require('./users.json')

const getUuidv4 = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)

const getAge = () => {
  const min = Math.ceil(15)
  const max = Math.floor(100)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = () => {
  const users = data.map((user) => ({
    ...user,
    age: getAge(),
    id: getUuidv4(),
  }))

  return {
    users,
  }
}
