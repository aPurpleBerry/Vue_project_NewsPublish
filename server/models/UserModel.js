const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user模型 ==> users集合

const UserType = {
  // id会自动生成
  username: String,
  password: String,
  name: String,
  gender: {type:Number, default: 0}, // 性别 0 1 2
  introduction: {type:String, default:""}, //简介
  avatar: {type:String, default:""}, //头像
  role: {type:Number, default: -1}, //管理员1 编辑2
  roleName: {type:String, default:""},
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
  // token: String
} 

const UserModel =  mongoose.model('user', new Schema(UserType))

module.exports = UserModel