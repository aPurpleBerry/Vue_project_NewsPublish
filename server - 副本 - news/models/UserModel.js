const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user模型 ==> users集合

const UserType = {
  // id会自动生成
  username: String,
  password: String,
  gender: Number, // 性别 0 1 2
  introduction: String, //简介
  avatar: String, //头像
  role: Number, //管理员1 编辑2
  // token: String
} 

const UserModel =  mongoose.model('user', new Schema(UserType))

module.exports = UserModel