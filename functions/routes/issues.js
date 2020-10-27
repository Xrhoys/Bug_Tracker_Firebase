/**
 * @description Issue express routes, basic CRUD
 */
const router = require('express').Router()
const wrapAsync = require('./../middleware/wrapAsync')
const { createIssue, getIssueByID } = require('./../controller').Issues

router.get('/', wrapAsync(getIssueByID))
router.post('/', wrapAsync(createIssue))

module.exports = router
