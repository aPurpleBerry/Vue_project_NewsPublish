const UserModel = require('../../models/UserModel')
const MessageModel = require('../../models/MessageModel')

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
  upload: async({_id, username,name, introduction, gender, avatar}) => {
    
    if(avatar) {
      return UserModel.updateOne({
        _id
      }, {
        username,name, introduction, gender, avatar
      })
    } else {
      return UserModel.updateOne({
        _id
      }, {
        username,name, introduction, gender
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
  //新增用户
  addUser: async({username,name,password})=>{
    return UserModel.create({
      username, name, password
    })
  },
  updateUser: async({_id,username,name})=>{
    return UserModel.updateOne({_id:_id},{$set:{username: username,name:name}})
  },
  findlist: async({username})=>{
    console.log(username);
    
    return UserModel.find({username})
  },
  doAssignRole: async({userId, role, roleName})=>{
    return UserModel.updateOne({_id:userId},{$set:{role: role,roleName:roleName}})
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
  },
  addmessage: async({message})=>{
    console.log(message);
    
    return MessageModel.create({
      message
    })
  },
  messagelist: async()=>{
    return MessageModel.find()
  },
}

module.exports = UserService