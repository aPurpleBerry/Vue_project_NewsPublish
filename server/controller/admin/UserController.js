// const UserService = require("../../services/admin/UserService")
const UserService = require('../../service/admin/UserService')
const JWT  = require('../../util/JWT') 

const UserController = {
  login: async (req,res)=>{
    let ans = await UserService.login(req.body)
    // console.log('ans=',ans);
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
          token: token,
          code: 200,
        }
      })
    }
  },
  info: async(req,res) =>{
    const token = req.headers['authorization'].split(' ')[1]
    // console.log(token);
    
    let payload = JWT.verify(token)
    if(payload == false) {
      // res.status(404).send('状态码已设置为404');
      console.log('JWT过期');
      
    } else {
      let ans = await UserService.info(payload._id)
      console.log(ans);
      res.send({
        ActionType: 'OK',
        data: {
          code: 200,
          username: ans[0].username,
          name: ans[0].name,
          gender: ans[0].gender?ans[0].gender:0, // 性别 0 1 2
          introduction: ans[0].introduction, //简介
          avatar: ans[0].avatar, 
          role: ans[0].role, //管理员1 编辑2
          routes:  ['Acl','PersonalCenter','User','Permission','Role','News','NewsAdd','NewsList','NewsEdit','Vcomponent','Vform','Vicon','Vlist','Vtable'] 
        }
      })
    }
    console.log('info');
    
  },
  upload: async(req,res)=>{
    // console.log(req.file);
    // console.log(req.body);
    const {username,introduction,gender,name} = req.body
    const avatar = req.file?`/avataruploads/${req.file.filename}`:''
    
    const token = req.headers['authorization'].split(' ')[1]
    let payload = JWT.verify(token)
    console.log(payload._id);

    if(payload._id == '66cc728c6329c503b3102e9e') {
      res.send({
        ActionType:'noPermission',
        data: {
          message: '你不能修改管理员'
        }
      })
    } else {
      //调用service模块更新数据
      await UserService.upload({
        _id: payload._id,
        username,
        name,
        introduction,
        gender: Number(gender),
        avatar
      })
      if(avatar) {
        res.send({
          ActionType:'ok',
          data: {
            username,name,introduction,
            gender: Number(gender),
            avatar
          }
        })
      } else{
        res.send({
          ActionType:'ok',
          data: {
            username,name,introduction,
            gender: Number(gender),//没有avatar
          }
        })
      }
    }
    
    
  },
  add: async(req,res)=>{
    const {username,introduction,gender,role,password} = req.body
    const avatar = req.file?`/avataruploads/${req.file.filename}`:''

    //调用service模块更新数据
    await UserService.add({
      username,
      introduction,
      gender: Number(gender),
      avatar,
      role: Number(role),
      password
    })
  
    res.send({
      ActionType:'ok',
    })

  },
  getList: async(req,res) => {
    const result = await UserService.getList(req.query)
    res.send({
      ActionType: 'ok',
      data: {result}
    })
  },
  findlist: async(req,res) => {
    let ans = await UserService.findlist(req.body)
    res.send({
      ActionType: 'ok',
      data: {
        ans
      }
    })
  },
  delList: async(req,res)=>{
    console.log('==================================')
    console.log(req.query.id)
    try {
      const result = await UserService.delList({_id: req.query.id})
      res.send({
        ActionType: 'ok',
        data: {
          message: result
        }
      })
    } catch(Err) {
      console.log(Err);
    }
  },
  addUser: async(req,res)=>{
    let ans = await UserService.addUser(req.body)
    res.send({
      ActionType: 'ok',
      data: {
        ans
      }
    })
  },
  updateUser: async(req,res)=>{
    if(req.body._id == '66cc728c6329c503b3102e9e') {
      res.send({
        ActionType: 'noPermission',
        data: {
          message: '你没有权限修改管理员'
        }
      })
    } else {
      let ans = await UserService.updateUser(req.body)
      res.send({
        ActionType: 'ok',
        data: {
          ans
        }
      })
    }
  },
  doAssignRole: async(req,res)=>{
    if(req.body.userId == '66cc728c6329c503b3102e9e') {
      res.send({
        ActionType: 'noPermission',
        data: {
          message: '你没有权限分配管理员的角色'
        }
      })
    } else {
      let ans = await UserService.doAssignRole(req.body)
      res.send({
        ActionType: 'ok',
        data: {
          ans
        }
      })
    }
    
  },
  putList: async(req,res)=>{
    const result = await UserService.putList(req.body)
    res.send({
      ActionType: 'ok'
    })
  },
//留言板
  addmessage: async(req,res)=>{
    let ans = await UserService.addmessage(req.body)
    res.send({
      ActionType: 'ok',
      data: {
        ans
      }
    })
  },
  messagelist: async(req,res) => {
    const result = await UserService.messagelist(req.query)
    res.send({
      ActionType: 'ok',
      data: {result}
    })
  },
}

module.exports = UserController