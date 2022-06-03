const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Article = require('../models/articles');
const User= require('../models/user')
const controller ={

    // add new article 
    
addNewArticle: async(req,res,next)=>{
    const {title,content,userID} = req.body;
    const {imgUrl} =req.body;

    let newArticle
    
    if(imgUrl){
        newArticle = new Article({
            title,
            content,
            userID,
            imgUrl,
        })
    }else{
        newArticle = new Article({
            title,
           content,
           userID
        })
    }
    
        let resArticle = await newArticle.save();  
        res.json(resArticle )
            
    
     

},

getArticle: async (req,res)=>{
   
    const {id} = req.query;
    const {uid} =req.cookies;
    if(!id){
        res.status(404).end()
        return;
    }  

    const resArticle = await Article.findById(id);
    const userLiked = await User.find({_id:{$in:resArticle.likeList}})
    const userDisliked = await User.find({_id:{$in:resArticle.dislikeList}})

    
    userLiked.forEach(ele=>{
        if(ele._id == uid){
        
            resArticle.liked = 1;
        }
    })
    userDisliked.forEach(ele=>{
        if(ele._id == uid){
          
            resArticle.liked = -1;
        }
    })


    if(resArticle!==null){
        if(uid){
            const a = await Article({_id:uid})
        }         
        res.json(resArticle)    
    }



},

getAllArticle: async (req,res)=>{
   
    const resArticle = await Article.find();
    res.json(resArticle)
},
articleLikes: async(req,res)=>{
    const userID = req.cookies.uid;
    const{articleID,likes,dislikes} = req.body;

        if(!userID||!articleID){
            res.json('failed');
            return;
        }
    let resArticle = await Article.findById(articleID);

     if(resArticle){
      
        const a = await User.find({_id:{$in:resArticle.dislikeList}})
      
        a.forEach(ele=>{
        if(ele._id == userID){
            resArticle.dislikeList.remove(ele._id)
            
        }
       })
      
      

         resArticle.likes=likes;
       
        resArticle.likeList.push(userID);
         await resArticle.save()
     }
     res.json({likes:resArticle.likes})
},
articleDisikes: async(req,res)=>{
    const userID = req.cookies.uid;
    const{articleID,dislikes} = req.body;
  
        if(!userID||!articleID){
            res.json('failed');
            return;
        }
    let resArticle = await Article.findById(articleID);
     if(resArticle){

        const a = await User.find({_id:{$in:resArticle.likeList}})
      
        a.forEach(ele=>{
        if(ele._id == userID){
            resArticle.likeList.remove(ele._id)
            
        }
       })
  
         resArticle.dislikes=dislikes;
        resArticle.dislikeList.push(userID);
        
         await resArticle.save()
     }
     res.json({dislikes:resArticle.dislikes})
},
getPersonList: async (req,res)=>{ 
     const resArticle = await Article.find({userID:ObjectId(req.query.userId)});
     if(resArticle!==null){
         res.send({
             status:200,
             success:true,
             data:resArticle
         })
     }
}
}

module.exports = controller;