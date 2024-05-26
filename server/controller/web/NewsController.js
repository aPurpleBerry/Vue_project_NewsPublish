const NewsService = require("../../service/web/NewsService")

/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const NewsController = {

    getList:async (req,res)=>{
        const result =await NewsService.getList({_id:req.params.id})
        res.send({
            ActionType:"OK",
            data:result
        })
    },

    getTopList:async (req,res)=>{
        const result =await NewsService.getTopList({limit:req.query.limit})
        res.send({
            ActionType:"OK",
            data:result
        })
    },


}

module.exports = NewsController