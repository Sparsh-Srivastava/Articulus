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

module.exports = Router