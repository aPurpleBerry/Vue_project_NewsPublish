const NewsModel = require("../../models/NewsModel")

const NewsService = {
    add:async ({title,content,category,cover,isPublish,editTime})=>{
        return NewsModel.create({
            title,content,category,cover,isPublish,editTime
        })
    },

    updateList:async({_id,title,content,category,isPublish,cover,editTime})=>{
        if(cover){
            return NewsModel.updateOne({_id},{
                title,content,category,isPublish,cover,editTime
            })
        }else{
            return NewsModel.updateOne({_id},{
                title,content,category,isPublish,editTime
            })
        }
    },

    getList:async ({_id})=>{
        return _id?NewsModel.find({_id}):NewsModel.find({})
    },
    delList:async ({_id})=>{
        return NewsModel.deleteOne({
            _id
        })
    },

    publish:async ({_id,isPublish,editTime})=>{
        return NewsModel.updateOne({
            _id
        },{
            isPublish,
            editTime
        })
    }
}

module.exports = NewsService