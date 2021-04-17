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
        const h = dat.getHours()
        const m = dat.getMinutes()
        const s = dat.getSeconds()
        const mm = dat.getMilliseconds()

        const d = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(`${month}`) / 3 ;
        body.push({
          title: item.title,
          day: day,
          month: d,
          year: year,
          h: h,
          m: m,
          s: s,
          mm: mm
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

        const writer_id = writer._id
        const genius = await User.findById(writer_id)

        genius.followers.push(userName._id)
        userName.following.push(genius._id)

        await genius.save()
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

        res.json({
            a: genius,
            b: userName
        })
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

Router.get("/values/:id", async (req, res) => {
    let id = req.params.id
    var avrating = []
    let all = []

    const user = await User.findById(id).populate('comments')

    const followers = user.followers.length

    const following = user.following.length

    const articles = user.articles.length

    const comments = user.comments.length

    res.json({
        followers: followers,
        following: following,
        articles: articles,
        comments: comments
    })
})

Router.get('/view/:id', async function(req, res) {
    var postId = req.params.id;
    var ip = req.connection.remoteAddress;
  
//     Hit.find({postId: postId, ip: ip}).then(function(result) {
//       //var newVisitor = false;
//       if (!result) { /* add a new record and newVisitor = true */
  
//       return Post.find({id: postId}).then(function(post) {
//         //if (newVisitor) { /* update the counter on the post */
//         res.send(post);
//       });
//     };
//   });
    // const article = await Article.findById(postId)
    // var views = article.views

    // views += 2

    // const article = await Article.findOneAndUpdate({id: postId}, {
    //     views: 1
    // }, function(err, aff, res) {
    //     console.log(res)
    // })

    const article = await Article.findById(postId)

    article.views = article.views + 1;

    await article.save()

    res.json({
        article: article,
        ip: ip
    })
})

Router.get("/pie/:user", async(req, res) => {
    let body = []
    // var avrating = []
    // let all = []
    let view = []
    const user = req.params.user
    const details = await Article.find({user: user})
    details.forEach((detail) => {
        const title = detail.title
        const comm = detail.views

        body.push({
            title: title,
            views: comm
        })
    })
    res.send(body)
})

Router.get("/line/:user", async(req, res) => {
    // let body = []
    // const user = req.params.user
    // const details = await Article.find({user: user})
    // details.forEach((detail) => {
        // const title = detail.title
        // const comm = detail.views

    //     body.push({
    //         title: title,
    //         views: comm
    //     })
    // })
    // res.send(body)
    let body = []
    var avrating = []
    let all = []
    const user = req.params.user
    const details = await Article.find({user: user}).populate('comments')
    details.forEach((detail) => {
        const title = detail.title
        const comm = detail.comments

        const comm1 = detail.views

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
            average: avr,
            views: comm1
        })
    })
    res.send(body)
})

Router.get("/recent/:id", async (req, res) => {
    const id = req.params.id
    const user = await User.findById(id).populate("followers")
    res.send(user.followers)
})

Router.get("/quantity/:id", async (req, res) => {
    let one = 0
    let two = 0
    let three = 0
    let four = 0
    let five = 0
    let body = []
    let all = []
    const user = req.params.id
    const details = await Article.find({user: user}).populate('comments')
    // const length = details.comments.length
    details.forEach((detail) => {
        const title = detail.title
        const comm = detail.comments

        for(var i=0; i<comm.length; i++){
            if(comm[i].rating == 1){
                one++;
            }else if(comm[i].rating == 2){
                two++;
            }else if(comm[i].rating == 3){
                three++;
            }else if(comm[i].rating == 4){
                four++;
            }else if(comm[i].rating == 5){
                five++;
            }
        }

        body.push({
            "one": one,
            "two": two,
            "three": three,
            "four": four,
            "five": five,
            title: title,
        })
    })
    let a1 = body.slice(-1).pop().one
    let a2 = body.slice(-1).pop().two
    let a3 = body.slice(-1).pop().three
    let a4 = body.slice(-1).pop().four
    let a5 = body.slice(-1).pop().five
    all.push({
        "name": "1",
        "data": a1,
        "fill": "#8884d8"
    },
    {
        "name": "2",
        "data": a2,
        "fill": "#83a6ed"
    },
    {
        "name": "3",
        "data": a3,
        "fill": "#8dd1e1"
    },
    {
        "name": "4",
        "data": a4,
        "fill": "#82ca9d"
    },
    {
        "name": "5",
        "data": a5,
        "fill": "#a4de6c"
    })
    res.send(all)
})

module.exports = Router