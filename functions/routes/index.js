const User = require('./user')
const Issue = require('./issues')

module.exports = (app) => {
  app.use('/user', User)
  app.use('/issue', Issue)
}
