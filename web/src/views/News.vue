<template>
    <div class="container">
        <div
            class="news-header" :style="{  backgroundImage:`url(${require('@/assets/newsbg.jpg')})` }">
        </div>

        <div class="search">
            <el-popover
                placement="bottom"
                title="检索结果"
                width="50%"
                :visible="visible"
            >
                <template #reference>
                    <el-input
                        v-model="searchText"
                        class="w-50 m-2"
                        placeholder="请输入新闻关键字"
                        :prefix-icon="Search"
                        type="search"
                        size="large"
                        @input="visible=true"
                        @blur="visible= false"
                    />
                </template>

                <div v-if="searchnewslist.length">
                    <div
                        v-for="data in searchnewslist"
                        :key="data._id"
                        class="search-item"
                        @click="handleChangepage(data._id)"
                    >
                        {{data.title}}
                    </div>
                </div>
                <div v-else>
                    <el-empty
                        description="暂无新闻"
                        :image-size="50"
                    />

                </div>
            </el-popover>
        </div>
        <!-- 新闻 -->
        <div class="topnews">
            <el-row :gutter="20">
                <el-col  :span="6"  v-for="item in topNewsList"   :key="item._id">
                    <el-card
                        :body-style="{ padding: '0px' }"
                        shadow="hover"
                        @click="handleChangepage(item._id)"
                    >
                        <div
                            class="image"
                            :style="{
                            backgroundImage:`url(http://www.apurpleberry.cn:3000${item.cover})`
                        }"
                        >

                        </div>
                        <div style="padding: 14px">
                            <span>{{item.title}}</span>
                            <div class="bottom">
                                <time class="time">{{ whichTime(item.editTime) }}</time>

                            </div>
                        </div>
                    </el-card>
                </el-col>

            </el-row>
        </div>
        <!-- 三个类别新闻 -->
        <el-tabs
            style="margin:20px"
            v-model="whichTab"
            class="demo-tabs"
        >
            <el-tab-pane
                :key="item.name"
                v-for="item in tablist"
                :label="item.label"
                :name="item.name"
            >

                <el-row :gutter="20">
                    <el-col :span="18">
                        <div
                            v-for="data in tabnews[item.name]"
                            :key="data._id"
                            style="padding:10px;"
                        >
                            <el-card
                                :body-style="{ padding: '0px' }"
                                shadow="hover"
                                @click="handleChangepage(data._id)"
                            >
                                <div
                                    class="tab-image"
                                    :style="{
                            backgroundImage:`url(http://localhost:3000${data.cover})`
                        }"
                                >

                                </div>
                                <div style="padding: 14px;float:left;">
                                    <span>{{data.title}}</span>
                                    <div class="bottom">
                                        <time class="tab-time">{{ whichTime(data.editTime) }}</time>

                                    </div>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <el-timeline>
                            <el-timeline-item
                                v-for="(data, index) in tabnews[item.name]"
                                :key="index"
                                :timestamp="whichTime(data.editTime)"
                            >
                                {{ data.title }}
                            </el-timeline-item>
                        </el-timeline>

                    </el-col>
                </el-row>
            </el-tab-pane>

        </el-tabs>

         <el-backtop :visibility-height="100"/>
    </div>
</template>
<script setup>
import { Search } from "@element-plus/icons-vue";
import { ref, onMounted, computed } from "vue";
import {useRouter} from 'vue-router'
import moment from "moment";
import axios from "axios";
import _ from "lodash";
moment.locale("zh-cn");
const searchText = ref("");
const visible = ref(false);
const newlist = ref([]);

const whichTab = ref(1);
onMounted(async () => {
  try{
    var res = await axios.get("/webapi/news/list");
    newlist.value = res.data.data;
  } catch(err) {
    console.log(err);
  }
  
});

const searchnewslist = computed(
  () =>
    searchText.value
      ? newlist.value.filter(item => item.title.includes(searchText.value))
      : []
);

const topNewsList = computed(() => newlist.value.slice(0, 4));

const whichTime = time => {
  return moment(time).format("lll");
};

const tablist = [
  {
    label: "最新动态",
    name: 1
  },
  {
    label: "典型案例",
    name: 2
  },
  {
    label: "通知公告",
    name: 3
  }
];

const tabnews = computed(() => _.groupBy(newlist.value, item => item.category));

const router = useRouter()
const handleChangepage = (id)=>{
    // console.log(id)

    router.push(`/news/${id}`)
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
}

.news-header {
  width: 100%;
  height: 400px;
  background-size: cover;
}
.search {
  position: absolute;
  top: 340px;
  width: 100%;
  text-align: center;
  .el-input {
    width: 50%;
  }
}

.search-item {
  height: 50px;
  line-height: 50px;
  &:hover {
    background: whitesmoke;
    color: red;
  }
}

.topnews {
  margin: 20px;
  .image {
    width: 100%;
    height: 150px;
    background-size: cover;
  }
  .time {
    font-size: 13px;
    color: gray;
  }
}

.tab-image {
  width: 150px;
  height: 100px;
  background-size: cover;
  float: left;
}
.tab-time {
  font-size: 13px;
  color: gray;
}
</style>

