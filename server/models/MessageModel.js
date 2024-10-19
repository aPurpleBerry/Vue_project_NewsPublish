const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user模型 ==> users集合

const MessageType = {
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now // 自动生成创建时间
  }
} 

const MessageModel =  mongoose.model('message', new Schema(MessageType))

module.exports = MessageModel 