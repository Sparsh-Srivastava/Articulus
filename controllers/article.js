const Article = require('../models/Article')
const User = require("../models/User");
const Router = require('../routes/article');

exports.create = async (req, res) => {
    user = req.params;
    id = user.id;
    const { title, subtitle, primary, secondary, status } = req.body;
    const article = await Article.create({
        title,
        subtitle,
        primary,
        secondary,
        status,
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

exports.getUser = async (req, res) => {
    const {id} = req.params
    const user = await User.findById(id)
    res.send(user)
}

exports.update = async (req, res) => {
        console.log(req.body)
        let id = req.params.id
    
        let updated = Article.findByIdAndUpdate(id, {$set: {
            title: req.body.title,
            subtitle: req.body.subtitle,
            primary: req.body.primary,
            secondary: req.body.secondary
        }}, (err, article) => {
            if(err){
                res.json({
                    message: "There was an error",
                    error: err
                })
            }else{
                res.json({
                    message: "Article updated",
                    data: article
            })
        }
    })
}

exports.getArticle = async (req, res) => {
    const { id } = req.params;
    const user = await Article.findById(id);
    res.send(user);
}