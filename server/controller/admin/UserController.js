// const UserService = require("../../services/admin/UserService")
const UserService = require('../../service/admin/UserService')
const JWT  = require('../../util/JWT') 

const UserController = {
  login: async (req,res)=>{
    let ans = await UserService.login(req.body)
    if(ans.length === 0) {
      res.send({
        code: '-1',
        error: '用户名密码不匹配'
      })
    } else {
      //生成token，设置在header里面
      const token = JWT.generate({
        _id: ans[0]._id,
        username: ans[0].username
      },'10s')
      res.header('Authorization',token)
      
      res.send({
        ActionType: 'OK' 
      })
    }
  }
}

module.exports = UserController