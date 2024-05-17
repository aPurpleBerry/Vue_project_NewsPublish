var express = require('express');
var UserRouter = express.Router();
const UserController = require('../../controller/admin/UserController')

UserRouter.post('/adminapi/user/login',UserController.login)
// UserRouter.get('/adminapi/user/login1',(req,res)=>{
//   res.send('<h1>hi<h1>')
// })
UserRouter.get('/adminapi/user/home',(req,res)=>{
  res.send('okokok')
})

module.exports = UserRouter;
