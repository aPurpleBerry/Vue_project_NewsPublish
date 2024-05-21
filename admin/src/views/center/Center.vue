<template>
  <div>
      <el-page-header
          content="个人中心"
          icon=""
          title="企业门户网站管理系统"
      />

      <el-row
          :gutter="20"
          class="el-row"
      > 
          <el-col :span="8">
              <el-card class="box-card">
                  <el-avatar
                      :size="100"
                      :src="avatarUrl"
                  />
                  <h3>{{store.state.userInfo.username}}</h3>
                  <h5>{{store.state.userInfo.role===1?'管理员':'编辑'}}</h5>
              </el-card>
          </el-col>
          <el-col :span="16">
              <el-card>
                  <template #header>
                      <div class="card-header">
                          <span>个人信息</span>
                      </div>
                  </template>

                  <el-form
                      ref="userFormRef"
                      :model="userForm"
                      :rules="userFormRules"
                      label-width="120px"
                      class="demo-ruleForm"
                  >
                      <el-form-item
                          label="用户名"
                          prop="username"
                      >
                          <el-input v-model="userForm.username" />
                      </el-form-item>
                      <el-form-item
                          label="性别"
                          prop="gender"
                      >
                          <el-select
                              v-model="userForm.gender"
                              class="m-2"
                              placeholder="Select"
                              style="width:100%"
                          >
                              <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                              />
                          </el-select>
                      </el-form-item>
                      <el-form-item
                          label="个人简介"
                          prop="introduction"
                      >
                          <el-input
                              v-model="userForm.introduction"
                              type="textarea"
                          />
                      </el-form-item>

                      <el-form-item
                          label="头像"
                          prop="avatar"
                      >
                         <Upload :avatar="userForm.avatar" @kerwinchange="handleChange"/>
                      </el-form-item>

                      <el-form-item>
                          <el-button
                              type="primary"
                              @click="submitForm()"
                          >更新</el-button>
                      </el-form-item>
                  </el-form>
              </el-card>
          </el-col>
      </el-row>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, reactive } from "vue";

import { ElMessage } from "element-plus";
import upload from "@/util/upload";
import Upload from '@/components/upload/Upload'
const store = useStore();

const avatarUrl = computed(
() =>
  store.state.userInfo.avatar
    ? "http://localhost:3000" + store.state.userInfo.avatar
    : `https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png`
);

//从仓库中取出用户数据
const { username, gender, introduction, avatar } = store.state.userInfo;
const userFormRef = ref();
const userForm = reactive({
  username,
  gender,
  introduction,
  avatar,
  file: null
});

const userFormRules = reactive({
  username: [{ required: true, message: "请输入名字", trigger: "blur" }],
  gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
  introduction: [{ required: true, message: "请输入介绍", trigger: "blur" }],
  avatar: [{ required: true, message: "请上传头像", trigger: "blur" }]
});
//性别选择
const options = [
{
  label: "保密",
  value: 0
},
{
  label: "男",
  value: 1
},
{
  label: "女",
  value: 2
}
];

//每次选择完图片之后的回调
const handleChange = file => {
userForm.avatar = URL.createObjectURL(file);
userForm.file = file;
};
//更新提交
const submitForm = () => {
  userFormRef.value.validate(async valid => {
    if (valid) {
      // console.log("submit",userForm)
      // axios.post("/adminapi/user/upload",userform)
      const res = await upload("/adminapi/user/upload", userForm);
      console.log('center---',res);
      if (res.ActionType === "ok") {
        store.commit("changeUserInfo", res.data);
        ElMessage.success("更新成功");
      }
    }
  });
};
</script>

<style scoped lang="scss">
.el-row {
margin-top: 20px;
.box-card {
  text-align: center;
}
}

</style>
