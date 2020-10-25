/**
 * @description Issue express routes, basic CRUD
 */
const router = require('express').Router()
const wrapAsync = require('./../middleware/wrapAsync')
const { createIssue } = require('./../controller').Issues

router.post('/', wrapAsync(create))

module.exports = router
