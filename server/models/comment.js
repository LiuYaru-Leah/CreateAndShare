const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const Comment = new Schema({
    articleID:{
        type:ObjectId,
        required:true
    },
    userID:{
        type:ObjectId,
        required:true
    },
    content:{
        type:String,
        reqired:true,
    },
    datetime: {
          type: Date,
          default: Date.now()
        
    },author:{
            type:String,
    },avatar:{
        type:String
    }
})

Comment.pre('save', async function(next){

    }
)
   
module.exports= mongoose.model('Comment',Comment)