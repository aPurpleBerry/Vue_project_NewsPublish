let express = require('express');
let AclRouter = express.Router();

const AclController = require('../../controller/admin/AclController');

//角色管理
AclRouter.get("/adminapi/acl/role",AclController.getRole) //全部角色
AclRouter.post("/adminapi/acl/role/updatepermission",AclController.addRolePermission) //角色添加权限
AclRouter.post("/adminapi/acl/updaterole",AclController.updateRole) //角色职位名称
AclRouter.post("/adminapi/acl/addrole", AclController.addRole) //添加角色
AclRouter.delete('/adminapi/acl/role/remove/:id',AclController.delRole) //删除角色
AclRouter.post('/adminapi/acl/findrole',AclController.findRole) //查找角色

//permission
AclRouter.get("/adminapi/acl/permission",AclController.getPermission)
// AclRouter.get("/adminapi/acl/permission/add",AclController.addPermission)


module.exports = AclRouter