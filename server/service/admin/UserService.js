const UserModel = require('../../models/UserModel')

const UserService = {
  login: async ({username, password}) =>{
    return UserModel.find({
      username,
      password
    })
  },
  info: async(_id)=>{
    return UserModel.find({
      _id
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
  },
  add: async({ username, introduction, gender, avatar,password,role})=>{
    return UserModel.create({
      username, introduction, gender, avatar,password,role
    })
  },
  getList: async({id})=>{
    console.log('-------------------------');
    
    console.log(id);
    
    // return id?UserModel.find({_id:id},['username','role','introduction','password'])
    // :UserModel.find({},['username','role','avatar','introduction','gender'])
    return id?UserModel.find({_id:id},['username','role','introduction','password'])
    :UserModel.find()
  },
  findlist: async({username})=>{
    console.log(username);
    
    return UserModel.find({username})
  },
  delList: async({_id}) =>{
    let res = await UserModel.find({_id:_id},['username'])
    // console.log(res.username);
    if(res[0]._id == '66cc728c6329c503b3102e9e'){
      return '你没有删除管理员的权限'
    } else {
      return UserModel.deleteOne({_id})
    }
  },
  putList: async(body)=>{
    return UserModel.updateOne({_id:body._id},body)
  }
}

module.exports = UserService