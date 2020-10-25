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
}
