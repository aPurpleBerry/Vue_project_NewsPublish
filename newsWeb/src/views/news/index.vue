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
      <button data-tab="tab3">公司资讯</button>
    </div>

    <div class="tab-content active" id="tab1">
      <p>Content of Tab 1</p>
    </div>
    <div class="tab-content" id="tab2">
      <p>Content of Tab 2</p>
    </div>
    <div class="tab-content" id="tab3">
      <p>Content of Tab 3</p>
    </div>

    <!-- <div class="news-nav"></div>
    <div class="news-content">
      <div class="one-news">
        <div class="one-pic">
          tupian
        </div>
        <div class="one-text">
          <div class="one-time">
            <h1>11/24</h1>
            <h2>2022</h2>
          </div>
          <div class="one-title">“你们好，见字如面! ”———阅见未名:图书捐赠公益活动</div>
          <div class="one-main">2022年，米哈游《未定事件簿》携手韬奋基金会，联合开展了「阅见未名」图书捐赠公益活动。在《未定事件簿》各位玩家的热心支持下，目前已向云南省大理白族自治州11所小学...</div>
        </div>
      </div>
      <div class="one-news">
        <div class="one-pic">
          tupian
        </div>
        <div class="one-text">
          <div class="one-time">
            <h1>11/24</h1>
            <h2>2022</h2>
          </div>
          <div class="one-title">HwiCake荣获“第一届HAOCAKE全球美味奖”3星奖章</div>
          <div class="one-main">近日，塔塔星球国际风味评鉴所公布了第一届HAOCAKE全球美味奖的获得者。HwiCake被授予3星奖章。这是继“2022年度MEIWEI空空赏”、“塔塔星球示范单位”...</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';

const $router = useRouter();
let toHome = ()=>{
  $router.push('/home')
}
onMounted(()=>{
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
})
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
  border: 2px solid #000;
  margin: 0 auto;
  .news-nav {
    width: 100%;
    height: 140px;
    background-color: red;
  }
  .news-content {
    width: 100%;
    height: 100%;
    // background-color: yellow;

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
        background-color: red;
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
          background-color: blue;
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

  .tab-buttons {
      display: flex;
      margin-bottom: 10px;
    }

    .tab-buttons button {
      padding: 10px 20px;
      cursor: pointer;
      border: none;
      background-color: #f0f0f0;
      margin-right: 5px;
      transition: background-color 0.3s;
    }

    .tab-buttons button.active {
      background-color: #007bff;
      color: white;
    }

    .tab-content {
      display: none;
      padding: 20px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
    }

    .tab-content.active {
      display: block;
    }
}
</style>