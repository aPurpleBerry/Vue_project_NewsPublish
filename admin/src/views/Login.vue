<template>
  <div>   
    <Particles id="tsparticles" :options="options" />
    <div class="formContainer">
      <h3>企业门户网站管理系统</h3>
      <el-form
        ref="loginFormRef"
        style="max-width: 600px"
        :model="loginForm"
        status-icon
        :rules="loginRules"
        label-width="100px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default { name:'Login' }
</script>

<script setup>
import { useStore } from "vuex";
// import store from "@/store"
import {reactive, ref} from 'vue'
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ElMessage } from 'element-plus';
const loginForm = reactive({
  username: '',
  password: ''
})
const store = useStore()
const loginFormRef = ref()

const loginRules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ]
})

const $router = useRouter()

//登录按钮
const submitForm = () => {
  loginFormRef.value.validate((valid)=>{
    if(valid) {
      // console.log('Login',loginForm);
      axios.post('/adminapi/user/login',loginForm).then(res=>{
        // console.log(res.data);
        if(res.data.ActionType === 'OK') {
          // console.log(res.data.data);
          store.commit("changeUserInfo",res.data.data)
          store.commit("changeGetterRouter",false)
          $router.push('/index')
          ElMessage({
            type: 'success',
            message: '登陆成功'
          })
          // localStorage.setItem('token','kerwin')
        } else {
          ElMessage({
            type: 'error',
            message: '用户名和密码不匹配'
          })
        }
      })
    }
  })
}

//配置particles
const options = {
    background: {
        color: {
            value: '#0d47a1',
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push',
            },
            onHover: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
            },
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: '#ffffff',
        },
        links: {  
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: 'circle',
        },
        size: {
            random: true,
            value: 5,
        },
    },
    detectRetina: true,
}

</script>

<style scoped lang="scss">
.formContainer {
  width: 500px;
  height: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba($color: #000000, $alpha: 0.5);
  color: white;
  text-align: center;
  // padding: 20px;
  padding-right: 50px;

  h3 {
    font-size: 30px;
    margin: 30px auto;
    text-align: center;
    // background-color: red;
    padding-left: 50px;
  }
}
::v-deep .el-form-item__label{
  color: white;
}
</style>