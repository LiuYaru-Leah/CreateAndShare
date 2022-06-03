const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


const Article = new Schema({
    title: {
        type:String,
        required:true
    },
    content:{
        type:String,
    },
    imgUrl:{
      type:String
    },
    commentList:[ObjectId],
    likeList:[ObjectId],
    likes:{
        type:Number,
        default:0
    },
    dislikes:{
      type:Number,
      default:0
    },
    dislikeList:[ObjectId],
    comment:{
        type:Number,
        default:0
    },
    ucCount:{
        type:Number,
        default:0
    },
    userID: {
        type: Schema.Types.ObjectId,
        required: true
      },
      liked:{
        type:Number,
        default:0
      },
      meta: {
        createdAt: {
          type: Date,
          default: Date.now()
        },
        updatedAt: {
          type: Date,
          default: Date.now()
        }
    }
})

Article.pre('save', async function(next) {
    if (this.isNew) {
      this.meta.createdAt = this.meta.updatedAt = Date.now();
      // this.commentList = this.likeList = [];
      // let resNotification = await Notification.create({
      //   type: 'article',
      //   contentId: this._id,
      //   userID: this.userID
      // })
      // const notificationId = resNotification._id;
      // const author = await User.findOne({_id: this.userID});
      // author.followerList.forEach(async (id) => {
      //   await User.update({_id: id}, {
      //     $push: {
      //       unCheckedNotifications: {
      //         type: 'article',
      //         id: notificationId
      //       }
      //     }
      //   })
      // })

    } else {
      this.meta.updatedAt = Date.now();
    }
    next();
  })



module.exports = mongoose.model('Article',Article);