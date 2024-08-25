const AclService = require("../../service/admin/AclService")

function removeNonExistingElements(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}

const AclController = {
  //角色管理
  addRole: async(req,res)=>{
    let ans = await AclService.addRole(req.body)
    res.send({
      ActionType: 'ok',
      data: {
        message: '添加成功',
        ans
      }
    })
  },
  getRole: async(req,res)=>{
    console.log('AclController');
    
    let ans = await AclService.getRole()
    try {
      let allevel3 = await AclService.getlevel3()
      let allaid = allevel3.map(item=>item.aid)
      console.log(allaid);
      
      let testans = await AclService.getRolePermi()
      // console.log(allevel3);
      console.log('====');
      // console.log(testans[0].level3);
      testans[0].level3 = removeNonExistingElements(allaid, testans[0].level3)
      console.log(testans[0].level3);

    } catch(err) {
      console.log(err);
      
    }

    if(ans.length == 0) {
      res.send({
        code: "-1",
        error: '出错'
      })
    } else{ 
      res.send({
        ActionType: 'ok',
        data: {
          ans
        }
      })
    }
  },
  delRole: async(req,res)=>{
    // console.log(req.params.id)
    console.log(req.params.id);
    
    const result = await AclService.delRole({_id: req.params.id})
    res.send({
      ActionType: 'ok'
    })
  },
  findRole:async(req,res)=>{
    let ans = await AclService.findRole(req.body)
    res.send({
      ActionType: 'ok',
      data: {
        ans
      }
    })
  },
  addRolePermission: async(req,res)=>{
    console.log('AclController addrole');
    let ans = await AclService.addRolePermission(req.body)
    
    res.send ({
      ActionType: 'ok',
      data: {
        ans
      }
    })
  },
  updateRole:async(req,res)=>{
    await AclService.updateRole(req.body)
    res.send ({
      ActionType: 'ok',
      data: {
        message: '更新成功'
      }
    })
  },
  //菜单管理
  getPermission: async(req, res) => {
    let ans2 = {}
    try {
      //四个都是数组
      let level0 = await AclService.getlevel0()
      let level1 = await AclService.getlevel1()
      let level2 = await AclService.getlevel2()
      let level3 = await AclService.getlevel3()
      // console.log(level2);
      level0[0].children = level1
      ans2 = level0[0]
      // console.log(ans2);
      

      ans2.children.forEach(function(value, index) {   
        let arr = level2.filter(item => {
          return item.pid == value.aid
        })
        value.children = arr    
      });

      // level0  ans2                  
      // level1  ans2.children
      // level2  

      ans2.children.forEach((value, index)=>{
        value.children.forEach((v2, index)=>{
          // console.log(v2);
          let arr = level3.filter(item => {
            return item.pid == v2.aid
          })
          v2.children = arr    
        })      
      })
      
      
      // for(let i=0; i<level1.length; i++) {
      //   console.log(level1[i].aid);
      // }
    }catch(err) {
      console.log(err);
    }

    res.send ({
      ActionType: 'ok',
      data: {
        ans2
      }
    })
  },
  // addPermission: async(req, res) => {
  //   let ans = await AclService.addPerm()
    
  //   res.send ({
  //     ActionType: 'ok',
  //     data: {
  //       ans
  //     }
  //   })
  // }
}
 
module.exports = AclController