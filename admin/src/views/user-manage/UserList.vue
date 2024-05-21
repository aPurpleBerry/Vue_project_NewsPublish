<template>

  <div>
      <el-card>
          <el-page-header  content="用户列表"  icon=""  title="用户管理" />

          <el-table  :data="tableData" style="width: 100%">
              <el-table-column
                  prop="username"
                  label="用户名"
                  width="180"
              />
              <el-table-column  label="头像"  width="180">
                  <template #default="scope">
                    <!-- {{ scope.row }} -->
                      <div v-if="scope.row.avatar">
                          <el-avatar
                              :size="50"
                              :src="'http://localhost:3000'+scope.row.avatar"
                          ></el-avatar>
                      </div>
                      <div v-else>
                          <el-avatar
                              :size="50"
                              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                          />
                      </div>
                  </template>
              </el-table-column>
              <el-table-column label="角色">
                  <template #default="scope">
                      <!-- {{scope.row.role===1?'管理员':'编辑'}}
                       -->
                      <el-tag
                          v-if="scope.row.role===1"
                          class="ml-2"
                          type="danger"
                      >管理员</el-tag>

                      <el-tag
                          v-else
                          class="ml-2"
                          type="success"
                      >编辑</el-tag>

                  </template>
              </el-table-column>

              <el-table-column label="操作">
                    <template #default="scope">
                        <el-button
                            size="small"
                            @click="handleEdit( scope.row)"
                        >编辑</el-button>
                        <el-popconfirm
                            title="你确定要删除吗?"
                            confirmButtonText="确定"
                            cancelButtonText="取消"
                            @confirm="handleDelete(scope.row)"
                        >
                            <template #reference>
                                <el-button
                                    size="small"
                                    type="danger"
                                >删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
          </el-table>
      </el-card>
      <el-dialog
            v-model="dialogVisible"
            title="编辑用户"
            width="50%"
        >
            <el-form
                ref="userFormRef"
                :model="userForm"
                :rules="userFormRules"
                label-width="80px"
                class="demo-ruleForm"
            >
                <el-form-item
                    label="用户名"
                    prop="username"
                >
                    <el-input v-model="userForm.username" />
                </el-form-item>
                <el-form-item
                    label="密码"
                    prop="password"
                >
                    <el-input
                        v-model="userForm.password"
                        type="password"
                    />
                </el-form-item>

                <el-form-item
                    label="角色"
                    prop="role"
                >
                    <el-select
                        v-model="userForm.role"
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
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button
                        type="primary"
                        @click="handleEditConfirm()"
                    >确认</el-button>
                </span>
            </template>
        </el-dialog>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { ElMessage } from 'element-plus'
const dialogVisible = ref(false);

const tableData = ref([]);
  onMounted(() => {
  getTableData();
});

//编辑
const userFormRef = ref();
let userForm = reactive({
  username: "",
  password: "",
  role: 2, //1 是管理员 ,2编辑
  introduction: ""
});
const userFormRules = reactive({
  username: [{ required: true, message: "请输入名字", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  role: [{ required: true, message: "请选择权限", trigger: "blur" }],
  introduction: [{ required: true, message: "请输入介绍", trigger: "blur" }]
});
const options = [
  {
    label: "管理员",
    value: 1
  },
  {
    label: "编辑",
    value: 2
  }
];

const getTableData = async () => {
  try{
    const res = await axios.get("/adminapi/user/list");
    console.log(res.data)
    tableData.value = res.data.data;
  } catch(err) {
    console.log(err);
  }
};

//编辑回调
const handleEdit = async data => {
  try {
    const res = await axios.get(`/adminapi/user/list/${data._id}`)
    console.log(res.data.data)
    Object.assign(userForm,res.data.data[0])
    dialogVisible.value = true;
  } catch(err) {
    console.log('userlist-',err);
  }
};

//编辑确认回调
const handleEditConfirm = ()=>{
    userFormRef.value.validate(async (valid)=>{
        if(valid){
            // console.log(userForm)
            //1- 更新后端
            await axios.put(`/adminapi/user/list/${userForm._id}`,userForm)
            //2- dialog隐藏
            dialogVisible.value = false
            ElMessage({
              type: 'success',
              message:'修改成功'
            })
            //3-获取table数据
            getTableData()
        }
    })
}

const handleDelete = async data => {
  // console.log(data);
  if(data.username !== 'admin') {
    try{
      //   console.log(data);
      await axios.delete(`/adminapi/user/list/${data._id}`);

      //reload page
      //reload data
      getTableData();
      //tabledata 本地删除
    } catch(err) {
      console.log(err);
    }
  } else {
    ElMessage({
      type: 'error',
      message: '不能删除管理员'
    })
  }
};
</script>
