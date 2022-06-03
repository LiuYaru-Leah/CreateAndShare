// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const ObjectId = Schema.Types.ObjectId;
// const User = require('./user');

// const Notification = new Schema({

//     type:{
//         type:String,
//         required:true
//     },
//     contentID:{
//         type:String,
//         required:true
//     },
//     userID:{
//         type:ObjectId,
//         required:true
//     },
//     meta:{
//         createdAt:{
//             type:Date,
//             default:Date.now()
//         }
//     }
// });

// Notification.pre('save',async function(next){
//     if(this.isNew){

//     }
// })