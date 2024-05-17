const UserModel = require('../../models/UserModel')

const UserService = {
  login: async ({username, password}) =>{
    return UserModel.find({
      username,
      password
    })
  }
}

module.exports = UserService