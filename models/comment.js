const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required: '{PATH} is required!'
    },
    rating: {
        type: Number,
        required: '{PATH} is required!'
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }
},
{ timestamps: true }
)

const Comment = mongoose.model("Comment", CommentSchema)
module.exports = Comment
