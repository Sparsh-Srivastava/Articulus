const User = require('../models/User')
const Article = require('../models/Article')
const Comment = require('../models/Comment')

// exports.articleCreate = async (req, res) => {
//     article = req.params
//     article = localStorage.getItem("id")
// }

exports.createComment = async (req, res) => {
    user = req.params.id;
    article = req.params.article;
    const { comment } = req.body;
    const comm = await Comment.create({
        comment,
        user:user,
        article:article
    });
    await comm.save();

    const userById = await User.findById(user);

    userById.comments.push(comm);
    await userById.save();

    const articleById = await Article.findById(article)

    articleById.comments.push(comm)
    await articleById.save()

    // return res.send(userById);
    return res.json({
        user: userById,
        article: articleById
    })
    // return res.json({
    //     user,
    //     article
    // })
}