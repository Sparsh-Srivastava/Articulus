const express = require('express')
const Router = express.Router()
const Article = require('../models/Article')
const User = require('../models/User')
const Comment = require('../models/Comment')
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

Router.post("/create/:user/:article", async (req, res) => {
    // console.log(req.params);
        user = req.params.user;
        article = req.params.article;
        const { comment, rating } = req.body;
        const comm = await Comment.create({
            comment,
            rating,
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
            comment,
            rating,
            user: userById,
            article: articleById
        })
        // return res.json({
        //     user: user,
        //     article: article
        // })
})

Router.get("/create/:article", async (req, res) => {
        article = req.params.article
        const all = await Article.find()
        res.send(all)
})

Router.get("/user/:id", async(req, res) => {
    id = req.params.id
    const user = await User.findById(id)
    res.send(user)
})

Router.get("/comment/:id", async(req, res) => {
    id = req.params.id
    const ans = await Article.findById(id).populate('comments')
    // const creator = await User.findById(ans.comments._id)
    // console.log(ans.comments);
    res.send(ans)
})

Router.delete("/article/:id", (req, res) => {
    let id = req.params.id
    console.log(id)

    let deleteArticle = Article.deleteOne({_id: id}, (err) => {
        if(err){
            res.json({
                message: "There was an error",
                error: err
            })
        }else{
            res.json({
                message: "Article was deleted"
            })
        }
    })
})

Router.get("/data/:user", async (req, res) => {
    let body = [];
    const user = req.params.user

    const article = await Article.find({user: user})
    
    article.forEach((item) => {
        const dat = item.createdAt
        const itemy = dat.toDateString()
        const datb = itemy.split(' ');
        const month = datb[1]
        const day = Number(datb[2])
        const year = Number(datb[3])

        const d = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(`${month}`) / 3 ;
        body.push({
          title: item.title,
          day: day,
          month: d,
          year: year
        });
      });

    res.json(body)
})

Router.get("/mean/:article", async(req, res) => {
    let ratings = []
    // user = req.params.user
    // const person = await User.findById(user).populate('comments')
    // const comments = person.comments
    // // console.log(person.comments);
    // comments.forEach((item) => {
    //     const rating = item.rating
    //     ratings.push(rating)
    // });
    // res.send(ratings)
    const article = req.params.article
    const art = await Article.findById(article).populate('comments')
    const comments = art.comments
    comments.forEach((item) => {
        const rating = item.rating
        ratings.push(rating)
    });
    res.send(ratings)
})

module.exports = Router