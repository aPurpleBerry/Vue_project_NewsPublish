const ProductModel = require("../../models/ProductModel")

/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
const ProductService = {

    getList:async ({_id})=>{
        return _id?ProductModel.find({_id}):ProductModel.find()
    },    
   
}

module.exports = ProductService