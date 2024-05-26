const ProductService = require("../../service/web/ProductService")

/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const ProductController = {

    getList:async (req,res)=>{
        const result =await ProductService.getList({_id:req.params.id})
        res.send({
            ActionType:"OK",
            data:result
        })
    }

}

module.exports = ProductController