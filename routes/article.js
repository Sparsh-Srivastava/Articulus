const express = require('express')
const Router = express.Router()
const { protect } = require("../middleware/auth");
 // Article Routes
const {
    userByArticle,
    articlesByUser,
    create,
    getAll,
    getUser,
    update,
    getArticle
} = require("../controllers/article")

//http://localhost:5000/api/private/newarticle/:id
Router.route("/newarticle/:id").post(create)

// http://localhost:5000/api/private/userbyarticle/:id
Router.route("/userbyarticle/:id").post(userByArticle)

//http://localhost:5000/api/auth/articlesbyuser/:id
Router.route("/articlesbyuser/:id").post(articlesByUser)

Router.route("/getall").get(getAll)

Router.route("/getuser/:id").get(protect, getUser)

Router.route("/articleupdate/:id").put( update)

Router.route("/getarticle/:id").get(getArticle)

module.exports = Router