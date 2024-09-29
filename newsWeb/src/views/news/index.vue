<template>
  <div class="nav">
    <div class="logo">LOGO</div>
    <ul>
      <li @click="toHome">首页</li>
      <li @click="toHome">产品介绍</li>
      <li @click="toHome">关于我们</li>
      <li @click="toHome" class="active">新闻动态</li>
      <li @click="toHome"> 加入我们</li>
    </ul>
  </div>
  <div class="news-box">
    <div class="tab-buttons">
      <button data-tab="tab1" class="active">全部资讯</button>
      <button data-tab="tab2">产品新闻</button>
      <button data-tab="tab3">公司动态</button>
    </div>

    <div class="tab-content active" id="tab1">
      <div class="one-news" v-for="item in alldata"  :key="alldata._id">
        <div class="one-pic">
          <!-- <img :src="`http://localhost:3000/${item.cover}`" alt=""> -->
          <img :src="`http://www.apurpleberry.cn:3000/${item.cover}`" alt="">
        </div>
        <div class="one-text">
          <div class="one-time">
            <h1>{{item.editTime.substring(5, 7)}}/{{item.editTime.substring(8, 10)}}</h1>
            <h2>{{item.editTime.substring(0, 4)}}</h2>
          </div>
          <div class="one-title">{{item.title}}</div>
          <div class="one-main">{{item.content.substring(0,80).replace(/<\/?p>/g, '')+'......'}}</div>
        </div>
      </div>
      
    </div>
    <div class="tab-content" id="tab2">
      <div class="one-news" v-for="item in onedata"  :key="alldata._id">
        <div class="one-pic">
          <!-- <img :src="`http://localhost:3000/${item.cover}`" alt=""> -->
          <img :src="`http://www.apurpleberry.cn:3000/${item.cover}`" alt="">
        </div>
        <div class="one-text">
          <div class="one-time">
            <h1>{{item.editTime.substring(5, 7)}}/{{item.editTime.substring(8, 10)}}</h1>
            <h2>{{item.editTime.substring(0, 4)}}</h2>
          </div>
          <div class="one-title">{{item.title}}</div>
          <div class="one-main">{{item.content.substring(0,80).replace(/<\/?p>/g, '')+'......'}}</div>
        </div>
      </div>
    </div>
    <div class="tab-content" id="tab3">
      <div class="one-news" v-for="item in twodata"  :key="alldata._id">
        <div class="one-pic">
          <!-- <img :src="`http://localhost:3000/${item.cover}`" alt=""> -->
          <img :src="`http://www.apurpleberry.cn:3000/${item.cover}`" alt="">
        </div>
        <div class="one-text">
          <div class="one-time">
            <h1>{{item.editTime.substring(5, 7)}}/{{item.editTime.substring(8, 10)}}</h1>
            <h2>{{item.editTime.substring(0, 4)}}</h2>
          </div>
          <div class="one-title">{{item.title}}</div>
          <div class="one-main">{{item.content.substring(0,80).replace(/<\/?p>/g, '')+'......'}}</div>
        </div>
      </div>
    </div>
    <!-- "http://www.apurpleberry.cn:3000" -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref,reactive, nextTick } from 'vue';
import request from '../../utils/request';

const $router = useRouter();
let toHome = ()=>{
  $router.push('/home')
}

let alldata = reactive([])
let onedata = reactive([])
let twodata = reactive([])

onMounted(async ()=>{
  getAllData()

   // 获取所有的按钮和内容
  const buttons = document.querySelectorAll('.tab-buttons button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // 移除所有按钮的 active 类
      buttons.forEach(btn => btn.classList.remove('active'));
      // 给当前点击的按钮添加 active 类
      button.classList.add('active');

      // 隐藏所有内容
      contents.forEach(content => content.classList.remove('active'));
      // 根据 data-tab 显示对应的内容
      const targetContent = document.getElementById(button.getAttribute('data-tab'));
      targetContent.classList.add('active');
    });
  });

  
  console.log('alldata');
  
  console.log(alldata);
  
})


const getAllData = async ()=>{
  try {
    const response = await request.get('/news/list');
    alldata.splice(0, alldata.length, ...response.data.data);
    // console.log(response.data.data);

    let filteredArray = alldata.filter(item => item.category === 2);
    onedata.splice(0, onedata.length, ...filteredArray);

    let filteredArray2 = alldata.filter(item => item.category === 1 || item.category === 3);
    twodata.splice(0, twodata.length, ...filteredArray2);

  } catch (error) {
    console.error('Error', error);
  }
}
</script>

<style lang="scss" scoped>
.active {
  font-weight: bold;
  border-bottom: 2px solid $bgc-blue;
  cursor: pointer;
  color: $bgc-blue;
}
.nav {
  width: 100%;
  height: 70px;
  background-color: white;
  opacity: 0.8;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  align-items: center;
  .logo{
    // background-color: red;
    height: 100%;
    line-height: 70px;
    // width: 100px;
    margin-left: 50px;
    font-size: 16px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  ul {
    display: flex;
    height: 27px;
    line-height: 27px;
  }
  ul li {
    // background-color: yellow;
    margin-right: 50px;
  }
  ul > li:hover {
    font-weight: bold;
    border-bottom: 2px solid $bgc-blue;
    cursor: pointer;
    color: $bgc-blue;
  }
  
}

.news-box {
  width: 750px;
  height: 900px;
  // border: 2px solid #000;
  margin: 0 auto;
  // background-color: green;
  

  .tab-buttons {
      display: flex;
      margin: 20px;
    }

    .tab-buttons button {
      padding: 10px 20px;
      cursor: pointer;
      border: none;
      background-color: #fff;
      margin-right: 5px;
      transition: background-color 0.3s;
    }

    .tab-buttons button.active {
      // background-color: #007bff;
      background-color: #2f90b9;
      color: white;
    }

    .tab-content {
      display: none;
      // padding: 20px;
      // background-color: #f9f9f9;
      // border: 1px solid #ddd;
      .one-news {
        cursor: pointer;
        width: 100%;
        height: 180px;
        // margin: 5px 0;
        margin-bottom: 20px;
        // background-color: #fff;
        // border-top: 2px solid blue;
        background: linear-gradient(-45deg, transparent 15px, #fff 0);
        padding: 7px;
        // border: 7px solid #fff;
        display: flex;
        .one-pic {
          width: 250px;
          height: 100%;
          // background-color: red;
        }
        .one-text {
          width: 550px;
          height: 100%;
          // background-color: green;
          display: flex;
          flex-direction: column;
          .one-time {
            width: 100%;
            height: 80px;
            padding-right: 30px;
            color: rgb(222,225,230);
            // background-color: blue;
            font-family:Verdana, Geneva, Tahoma, sans-serif;
            h1{
              height: 50px;
              line-height: 65px;
              font-size: 1.7rem;
              text-align: right;
            }
            h2 {
              height: 20px;
              // background-color: green;
              text-align: right;
              font-size: 14px;
            }
          }
          .one-title {
            width: 100%;
            height: 50px;
            padding-left: 20px;
            line-height: 60px;
            font-size: 14px;
            font-weight: bold;
            background-color: #fff;
          }
          .one-main {
            width: 100%;
            height: 50px;
            padding-top: 5px;
            padding: 5px 20px 0 20px;
            padding-left: 20px;
            color: rgb(103,107,115);
            font-size: 11px;

            // background-color: #000;
          }
        }
        
    }
    }

    .tab-content.active {
      display: block;
    }
}
</style>