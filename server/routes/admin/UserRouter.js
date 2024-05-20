var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controller/admin/UserController')
//图片上传
const multer  = require('multer')
const upload = multer({ dest: 'public/avataruploads/' })

UserRouter.post('/adminapi/user/login',UserController.login)
UserRouter.post('/adminapi/user/upload',upload.single('file'),
UserController.upload)
// UserRouter.get('/adminapi/user/login1',(req,res)=>{
//   res.send('<h1>hi<h1>')
// })

module.exports = UserRouter;
