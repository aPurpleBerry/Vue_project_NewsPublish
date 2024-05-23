<template>
  <div>
      <el-card>
          <el-page-header
              content="产品列表"
              icon=""
              title="产品管理"
          />

          <el-table
              :data="tableData"
              style="width: 100%"
          >
              <el-table-column
                  prop="title"
                  label="产品名称"
                  width="180"
              />
                <el-table-column
                  prop="introduction"
                  label="简要描述"
                  width="180"
              />
            

              <el-table-column label="更新时间">
                  <template #default="scope">
                      {{formatTime.getTime(scope.row.editTime)}}
                  </template>
              </el-table-column>
              

              <el-table-column label="操作">
                  <template #default="scope">
                    
                      <el-button
                          circle
                          :icon="Edit"
                           @click="handleEdit(scope.row)"
                      ></el-button>

                      <el-popconfirm
                          title="你确定要删除吗?"
                          confirmButtonText="确定"
                          cancelButtonText="取消"
                          @confirm="handleDelete(scope.row)"
                      >
                          <template #reference>
                              <el-button
                                  circle
                                  :icon="Delete"
                                  type="danger"
                              ></el-button>
                          </template>
                      </el-popconfirm>
                  </template>
              </el-table-column>
          </el-table>
      </el-card>

     
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import formatTime from "@/util/formatTime";
import {  Edit, Delete } from "@element-plus/icons-vue";
import {useRouter} from 'vue-router'
const router = useRouter()
const tableData = ref([]);
onMounted(() => {
  getTableData();
});

const getTableData = async () => {
  const res = await axios.get(`/adminapi/product/list`);
  //    console.log(res.data.data)
  tableData.value = res.data.data;
};


//删除回调
const handleDelete =async (item)=>{
  // console.log(item)
  await axios.delete(`/adminapi/product/list/${item._id}`)
  await getTableData()
}

//编辑回调
const handleEdit = (item)=>{
  //跳转到/news-manage/editnews/:id

  router.push(`/product-manage/editproduct/${item._id}`)
}
</script>
<style lang="scss" scoped>
.el-table {
margin-top: 50px;
}

::v-deep .htmlcontent {
  img {
    max-width: 100%;
  }
}
</style>
