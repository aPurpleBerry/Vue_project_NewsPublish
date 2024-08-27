const {RolesModel, PermissionModel, RolePermissionModel} = require("../../models/AclModel")
const UserModel = require('../../models/UserModel')

let uuid = require('node-uuid')

const AclService = {
  addRole:async({roleName})=>{
    let rid = randomNumber= Math.floor(Math.random() * 100); 
    return RolesModel.create({
      rid, 
      roleName
    })
    // return RolesModel.find({rid:rid})
  },
  getRole:async()=>{
    console.log('getRole');
    return RolesModel.find()
  },
  delRole:async({_id})=>{
    return RolesModel.deleteOne({_id})
  },
  findRole:async({roleName})=>{
    console.log(roleName);
    
    return RolesModel.find({roleName})
  },
  addRolePermission: async({_id, level3}) =>{
    console.log('AclService addRole');
    // console.log(req);
    
    return RolesModel.updateOne({_id:_id},{$set:{level3: level3}})
  },
  updateRole: async({_id, roleName}) =>{
    //角色更新后,用户表格存储的也要相应修改
    console.log('我在测试');
    
    try{
      console.log('我在测试');
      let res = await RolesModel.find({_id:_id})
      // console.log(res[0].rid);
      let res2 = await UserModel.updateMany({role:res[0].rid}, {$set:{roleName:roleName}})
      // console.log(res2);
    } catch(err) { console.log(err); }
    return RolesModel.updateOne({_id:_id},{$set:{roleName: roleName}})
  },
  //树结构 构造需要
  getlevel0: async()=>{
    return PermissionModel.find({level:0})
  },
  getlevel1: async()=>{
    return PermissionModel.find({level:1})
  },
  getlevel2: async()=>{
    return PermissionModel.find({level:2})
  },
  getlevel3: async()=>{
    return PermissionModel.find({level:3})
  },
  getRolePermi: async()=>{
    return RolePermissionModel.find()
  },
  addPerm: async()=>{
    return RolePermissionModel
  }
}
 
module.exports = AclService