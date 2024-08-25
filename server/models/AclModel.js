const mongoose  = require('mongoose')
const Schema = mongoose.Schema
// user模型===>users集合

//角色
const roles = {
  rid: Number,
  roleName: String,
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
  level3: { type:Array, default: []}
}

//权限
const permission = {
  aid: Number,
  pid: Number,
  aname: String,
  code: String,
  level: Number,
  updatetime: { type: Date, default: Date.now },
  children: { type:Array, default: []}
}

const rolepermission = {
  rid: Number,
  level3: { type:Array, default: []}
}

const RolesModel = mongoose.model('roles',new Schema(roles))
const PermissionModel = mongoose.model('permissions',new Schema(permission))
const RolePermissionModel = mongoose.model('rolepermissions',new Schema(rolepermission))

module.exports = {
  RolesModel,
  PermissionModel,
  RolePermissionModel
}