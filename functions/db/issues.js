const Issue = require('../utils/Issue')
const { database } = require('./../firebase')

module.exports = {
  async create(issue, projectID) {
    const snapshot = await database
      .ref(`/projects/${projectID}/issues`)
      .push(issue)
    return snapshot.key
  },
}
