const express = require('express')
const Router = express.Router()
const Article = require('../models/Article')
const User = require('../models/User')
const Comment = require('../models/Comment')
const {protect} = require('../middleware/auth')

Router.get("/money/:user", async(req, res) => {
    let body = []
    var avrating = []
    let all = []
    let viewCost = 0.001
    let ratingCost = 0.01
    let net = 0
    let earning = 0
    const user = req.params.user
    const details = await Article.find({user: user}).populate('comments')
    if(details.length != 0){
    details.forEach((detail) => {
        if(detail.status == "Premium"){
        const title = detail.title
        const view = detail.views
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

        net = avr
        avr /= total
        vCost = view*viewCost
        rCost = net*ratingCost
        all.push(avr)

        earning = vCost + rCost

        body.push({
            title: title,
            earning: earning
        })
    }
    })
    res.send(body)
}
})



Router.get("/netEarn/:user", async(req, res) => {
    let body = []
    var avrating = []
    let all = []
    let viewCost = 0.001
    let ratingCost = 0.01
    let net = 0
    let earning = 0
    const user = req.params.user
    const details = await Article.find({user: user}).populate('comments')
    if(details.length != 0){
    details.forEach((detail) => {
        if(detail.status == "Premium"){
        const view = detail.views
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

        net = avr
        avr /= total
        vCost = view*viewCost
        rCost = net*ratingCost
        all.push(avr)

        earning = vCost + rCost

        body.push({
            earning: earning
        })
    }
    })
}
    let abc = body.reduce((a, b) => +a + +b.earning, 0);
    res.json(abc)
})

module.exports = Router