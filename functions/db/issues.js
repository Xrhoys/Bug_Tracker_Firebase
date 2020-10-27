const { get } = require('../routes/user')
const Issue = require('../utils/Issue')
const { database } = require('./../firebase')

module.exports = {
  async create(issue, projectID) {
    const snapshot = await database
      .ref(`/projects/${projectID}/issues`)
      .push(issue)
    return snapshot.key
  },
  async get(id, projectID) {
    let issue
    await database
      .ref(`/projects/${projectID}/issues/${id}`)
      .on('value', (snapshot) => (issue = snapshot.val()))

    return issue
  },
}
