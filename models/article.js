const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title:{
        type:String,
        required: '{PATH} is required!'
    },
    subtitle :{
        type: String
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const Article = mongoose.model("Article", ArticleSchema)
module.exports = Article
