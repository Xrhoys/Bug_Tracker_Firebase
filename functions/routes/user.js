/**
 * @description User express routes, basic CRUD
 */
const router = require('express').Router()
const wrapAsync = require('./../middleware/wrapAsync')
const { signUp, updateUser } = require('./../controller').User

router.post('/', wrapAsync(signUp))
router.put('/', wrapAsync(updateUser))

module.exports = router
