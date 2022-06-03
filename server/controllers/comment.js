const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Comment = require('../models/comment')
const User = require('../models/user');
const Article = require('../models/articles');
const controller = {

    addComment: async(req,res)=>{
        const {articleID,content} = req.body;
        const{uid} = req.cookies;
     
        if(uid){

            let commentUser = await User.findById(uid)
          
        let newComment = new Comment({
            articleID,
            content,
            userID:uid,
            author:commentUser.username,
            avatar:commentUser.avatar,
        })
        await newComment.save();
       await Article.findOneAndUpdate({_id:articleID},{
           $push:{
               commentList:newComment._id
           },
           $inc:{
               comment:1
           }
       })
        
        res.json('success')}else{
            res.json('please login!')
        }
    },
    getAllComment: async (req,res)=>{
            const {articleID} = req.body;
            console.log(articleID)
            let resComment =await  Comment.find({articleID:articleID})
              
            res.json(resComment)

    }


}

module.exports = controller;