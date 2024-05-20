// const UserService = require("../../services/admin/UserService")
const UserService = require('../../service/admin/UserService')
const JWT  = require('../../util/JWT') 

const UserController = {
  login: async (req,res)=>{
    let ans = await UserService.login(req.body)
    console.log('ans=',ans);
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
      },'1d')
      res.header('Authorization',token)
      
      res.send({
        ActionType: 'OK',
        data: {
          username: ans[0].username,
          gender: ans[0].gender?ans[0].gender:0, // 性别 0 1 2
          introduction: ans[0].introduction, //简介
          avatar: ans[0].avatar, 
          role: ans[0].role //管理员1 编辑2
        }
      })
    }
  },
  upload: async(req,res)=>{
    // console.log(req.file);
    // console.log(req.body);
    const {username,introduction,gender} = req.body
    const avatar = req.file?`/avataruploads/${req.file.filename}`:''
    
    const token = req.headers['authorization'].split(' ')[1]
    let payload = JWT.verify(token)
    console.log(payload._id);

    //调用service模块更新数据
    await UserService.upload({
      _id: payload._id,
      username,
      introduction,
      gender: Number(gender),
      avatar
    })
    if(avatar) {
      res.send({
        ActionType:'ok',
        data: {
          username,introduction,
          gender: Number(gender),
          avatar
        }
      })
    } else{
      res.send({
        ActionType:'ok',
        data: {
          username,introduction,
          gender: Number(gender),//没有avatar
        }
      })
    }
  }
}

module.exports = UserController