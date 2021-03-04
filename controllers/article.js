const Article = require('../models/Article')
const User = require("../models/User");

exports.create = async (req, res) => {

    console.log(req.params);
    console.log(req.body);
    user = req.params;
    id = user.id;
    const { title, subtitle} = req.body;
    const article = await Article.create({
        title,
        subtitle,
        user:id
    });
    await article.save();

    const userById = await User.findById(id);

    userById.articles.push(article);
    await userById.save();

    return res.send(userById);
},

exports.userByArticle = async (req,res) => {
    const { id } = req.params;
    const userByArticle = await Article.findById(id).populate('user');
    res.send(userByArticle);
}

exports.articlesByUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).populate('articles');

    res.send(user.articles);
}

exports.getAll = async (req, res) => {
    const articles = await Article.find()
    return res.json({
        articles: articles
    })
}
