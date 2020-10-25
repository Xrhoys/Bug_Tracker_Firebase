const UserController = require('./users')
const IssueController = require('./issues')
module.exports = {
  User: UserController,
  Issues: IssueController,
}
