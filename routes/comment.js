const express = require('express')
const Router = express.Router()
const {protect} = require('../middleware/auth')

const {
    createComment
} = require('../controllers/comment')

Router.route("create/:user/:article").post(createComment)

module.exports = Router