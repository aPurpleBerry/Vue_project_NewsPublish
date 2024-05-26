
var express = require('express');
const NewsController = require('../../controller/web/NewsController');
var NewsRouter = express.Router();



NewsRouter.get("/webapi/news/list",NewsController.getList)
NewsRouter.get("/webapi/news/list/:id",NewsController.getList)
NewsRouter.get("/webapi/news/toplist",NewsController.getTopList)

module.exports = NewsRouter