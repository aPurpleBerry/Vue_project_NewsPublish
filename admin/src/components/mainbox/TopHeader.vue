<template>
  <el-header>
    <div class="left">
      <el-icon @click="handleCollapsed"><Menu></Menu></el-icon>
      <span style="margin-left: 10px;">企业门户网站管理系统</span>
    </div>
    <div class="right">
      <span>欢迎回来, admin</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon :size="20"> <User></User> </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
            <el-dropdown-item @click="logOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default { name:'TopHeader' }
</script>

<script setup>
import { Menu, User } from '@element-plus/icons-vue'
import {useStore} from 'vuex'
import { useRouter } from 'vue-router';
const store = useStore()
const $router = useRouter()

const handleCollapsed = () => {
  store.commit('changeCollapsed')
}

//跳转至个人中心
const handleCenter = () => {
  $router.push('/center')
}

const logOut = () => {
  localStorage.removeItem('token')
  $router.push('/login')
}
</script>

<style scoped lang="scss">
.el-header {
  background-color: #2d3a4d;
  color: white;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left,.right {
  display: flex;
}
.left {
  .el-icon {
    margin: auto;
    cursor: pointer;
  }
}
.right{
  .el-dropdown, .el-dropdown * {
    margin: auto;
    outline: none;
  }
}
</style>