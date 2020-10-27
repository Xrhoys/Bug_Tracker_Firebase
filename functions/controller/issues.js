const { Issue } = require('./../db')

module.exports = {
  async createIssue(req, res, next) {
    const { issue, projectID } = req.body

    // Validation at the object layer
    const validatedIssue = Issue.validate(issue)

    if (!validatedIssue) {
      return next(new Error('Unvalid object format'))
    }

    // Upload to database
    const id = await Issue.create(issue, projectID)

    return res.status(200).json({
      message: 'Issue uploaded',
      opCode: id,
    })
  },
  async getIssueByID(req, res, next) {
    const { id, projectID } = req.body

    // Validation at the object layer
    const validateIssue = Issue.validate({ id, projectID })

    if (!validateIssue) {
      return next(new Error('Unvalid object format'))
    }

    // Get from database
    const issue = await Issue.get(id, projectID)

    return res.status(200).json({
      message: 'Get issue',
      issue,
    })
  },
}
