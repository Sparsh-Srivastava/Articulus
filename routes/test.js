const express = require('express')
const Router = express.Router()
const Article = require('../models/Article')
const User = require('../models/User')
const {protect} = require('../middleware/auth')

Router.post("/test/:id", async (req, res) => {
    user = req.params;
    id = user.id;
    const {title, subtitle} = req.body
    console.log(title, subtitle);
    const article = await Article.create({
        title,
        subtitle,
        user:id
    })
    await article.save()

    const userById = await User.findById(id)
    userById.articles.push(article);
    await userById.save();

    return res.send(userById);
})

Router.get("/article/:id", async (req, res) => {
    id = req.params.id
    const article = await Article.findById(id)
    const creator = await User.findById(article.user)
    return res.json({
        article: article,
        user: creator
    })
})

module.exports = Router