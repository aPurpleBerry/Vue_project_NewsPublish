var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controller/admin/UserController')
//图片上传
const multer  = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })
//登录
UserRouter.post('/adminapi/user/login',UserController.login)
//登陆成功获取信息
UserRouter.get('/adminapi/user/info',UserController.info)
UserRouter.post('/adminapi/user/upload',upload.single('file'),UserController.upload)
UserRouter.post('/adminapi/user/add',upload.single('file'),UserController.add)
//用户列表增删改查
UserRouter.get('/adminapi/user/list',UserController.getList) //全部用户数据
UserRouter.post('/adminapi/user/findlist',UserController.findlist)
UserRouter.get('/adminapi/user/list/:id',UserController.getList)
UserRouter.put('/adminapi/user/list/:id',UserController.putList)
UserRouter.delete('/adminapi/user/list',UserController.delList)

module.exports = UserRouter;
