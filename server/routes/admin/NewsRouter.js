var express = require('express');
const NewsController = require('../../controller/admin/NewsController');
var NewsRouter = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'public/newsuploads/' })

//涉及文件上传, 普通post不行, 需要加上 multer中间件
NewsRouter.post("/adminapi/news/add",upload.single("file"),NewsController.add)
NewsRouter.get("/adminapi/news/list",NewsController.getList)
NewsRouter.post("/adminapi/news/list",upload.single("file"),NewsController.updateList)
NewsRouter.get("/adminapi/news/list/:id",NewsController.getList)
NewsRouter.delete("/adminapi/news/list/:id",NewsController.delList)
NewsRouter.put("/adminapi/news/publish",NewsController.publish)

module.exports = NewsRouter

// http://localhost:5173/adminapi/news/list/6652f31f2730d93d1d57949b