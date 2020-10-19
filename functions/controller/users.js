const { User } = require('../db')
const { auth } = require('./../firebase')
const UserObject = require('./../utils/User')

module.exports = {
  async signUp(req, res, next) {
    const { email, displayName, password } = req.body

    // Validation at the object layer
    const user = new UserObject(email, displayName, password)

    if (!user) {
      return next(new Error('Unvalid object format.'))
    }

    // Error handled by wrapAsync in routing
    const snapshot = await auth.createUser(user)

    // Success response
    return res.status(200).json({
      message: 'Creation success',
      uid: snapshot.uid,
    })
  },
  async updateUser(req, res, next) {
    const { uid, updateFields } = req.body

    // Validation at object layer
    // TODO: Better fields validation answer
    if (!UserObject.validateFields(...updateFields)) {
      return next(new Error('Unvalid object format.'))
    }

    const snapshot = await auth.updateUser(uid, updateFields)

    //Success response
    return res.status(200).json({
      message: 'Update success',
      uid: snapshot.uid,
    })
  },
}
