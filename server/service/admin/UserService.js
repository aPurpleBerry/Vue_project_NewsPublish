const UserModel = require('../../models/UserModel')

const UserService = {
  login: async ({username, password}) =>{
    return UserModel.find({
      username,
      password
    })
  },
  upload: async({_id, username, introduction, gender, avatar}) => {
    if(avatar) {
      return UserModel.updateOne({
        _id
      }, {
        username, introduction, gender, avatar
      })
    } else {
      return UserModel.updateOne({
        _id
      }, {
        username, introduction, gender
      })
    }
  } 
}

module.exports = UserService