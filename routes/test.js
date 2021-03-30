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

Router.get("/mean/:user", async(req, res) => {
    let body = []
    var avrating = []
    let all = []
    const user = req.params.user
    const details = await Article.find({user: user}).populate('comments')
    details.forEach((detail) => {
        const title = detail.title
        const comm = detail.comments

        var avr = 0
        var total = 0

        for(var i=0; i<comm.length; i++){
            avrating.push(comm[i].rating)
            if(comm[i].rating != null){
                avr += comm[i].rating
                total++
            }
        }

        avr /= total
        all.push(avr)

        body.push({
            title: title,
            average: avr
        })
    })
    res.send(body)
})

Router.post("/follow/:author/:user", async (req,res) => {
    // let followera = []
    // let following = []
    const author = req.params.author
    const user = req.params.user

    console.log(author);
    console.log(user);

    try {
        // const authorName = await User.findById(author)
        const authorName = await Article.findById(author).populate("user")
        const userName = await User.findById(user)

        const writer = authorName.user

        writer.following.push(writer._id)
        userName.followers.push(userName._id)

        await writer.save()
        await userName.save()

        // const wid = writer._id
        // const wname = writer.username
        // const wlast = writer.last
        // const wemail = writer.email

        // writer.following.push({
        //     id: wid,
        //     name: wname,
        //     last: wlast,
        //     email: wemail
        // })

        // userName.followers.push({
        //     id: userName._id,
        //     name: userName.username,
        //     last: userName.last,
        //     email: userName.email
        // })

        // console.log(authorName);
        // console.log(userName);

        // console.log(authorName);
        // console.log(userName);

        // authorName.following.push(userName._id);
        // await authorName.save()
        // userName.followers.push(authorName._id)
        // await userName.save()

        // res.json({
        //     a: followera,
        //     b: following
        // })
    } catch (error) {
        console.log("Damn, the time constraint");
        console.log(error);
    }

    // if (authorName._id === userName._id) {
    //     return res.status(400).json({ alreadyfollow : "You cannot follow yourself"})
    // } 

    // const userById = await User.findById(id)
    // userById.articles.push(article);
    // await userById.save();
    
})

Router.get("/social/:id", async(req, res) => {
    let body = [];
    let id = req.params.id
    let folling = []
    const data = await User.findById(id).populate("followers").populate("following")
    const followers = data.followers
    const following = data.following
    // const creator = await User.findById(ans.comments._id)
    // console.log(ans.comments);
    // followers.forEach(async (id) => {
    //     const follow = await User.findById(id)
    //     const name = follow.username
    //     console.log(follow.username);
    //     body.push({
    //         name: name,
    //     });
    //     console.log(body);
    // });

    // await console.log(body);

    res.json({
        followers: following,
        following: followers
    })
})

module.exports = Router