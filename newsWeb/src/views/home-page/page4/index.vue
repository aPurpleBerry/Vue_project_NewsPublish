<template>
  <div class="news">
    <div class="news-text">
      <div class="datebox">
        <div class="date-detail">11/24</div>
        <div class="date-year">2022</div>
      </div>
      <div class="contentbox">
        <div class="texttitle">你们好见字如面</div>
        <div class="textmain">2022年，米哈游《未定事件簿》携手韬奋基金会，联合开展了「阅见未名」图书捐赠公益活动。在《未定事件簿》各位玩家的热心支持下，目前已向云南省大理白族自治州11所小学、云南省普洱市澜沧拉祜族自治县36所小学...</div>
        <div class="textmore">
          <span class="readme">READ MORE</span> <span class="read">>>></span>
        </div>
      </div>
      <div class="buttonbox">
        <div class="btn">1</div>
        <div class="btn">2</div>
        <div class="btn">3</div>
      </div>
    </div>
    <div class="news-pic">
      <div class="picbgc">
        <div class="mask"></div>
      </div>
      <div class="picmore">
        <div class="findmore" @click="toNews">查看更多新闻</div>
      </div>
    </div>
    <div class="picfloat">
      <img src="@/assets/pic.png" alt="">
    </div>

  </div>
</template>

<script setup>
import { nextTick } from 'vue';
import { useRouter } from 'vue-router';
const $router = useRouter()
let toNews = ()=>{
  $router.push('/news')
}

nextTick(()=>{
  const btns = document.querySelectorAll('.buttonbox .btn')
  btns[0].classList = 'active'

  for(let i=0; i<btns.length; i++) {
    // document.querySelectorAll('.active').classList.remove('.active')
    btns[i].addEventListener('click',()=>{
      document.querySelector('.buttonbox .active').classList = 'static'
      btns[i].classList = 'active'
    })
  }
})

</script>

<style scoped lang="scss">
.static {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-right: 10px;
  border: 1px solid rgb(157, 160, 164);
  color: rgb(157, 160, 164);
  transition: all 1s none;
  cursor: pointer;
}
.active {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-right: 10px;
  border: 1px solid rgb(81, 82, 84);
  color: rgb(81, 82, 84);
  transition: all 1s none;
  cursor: pointer;
}
.picfloat {
  width: 400px;
  height: 220px;
  background-color: skyblue;
  position: fixed;
  top: 180px;
  left: 40%;
  // background-image: url('@/assets/pic.png');
  // background-repeat: no-repeat;
  // background-size: cover;
  overflow: hidden;
  z-index: 100;
}
.picfloat img{
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: all 1s linear;
}
.picfloat img:hover {
  transform: scale(1.1);
  transition: all 1s linear;
}
.news {
  // background-color: red;
  width: 800px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  .news-text {
    width: 340px;
    height: 100%;
    // background-color: #fff;
    display: flex;
    flex-direction: column;
    .datebox {
      width: 100%;
      height: 200px;
      // background-color: red;
      font-family: Georgia, 'Times New Roman', Times, serif;
      color: rgb(222,225,230);
      text-shadow: 5px 5px 5px #fff;
      .date-detail {
        width: 100%;
        height: 160px;
        // background-color: #fff;
        display: flex;
        align-items: end;
        font-size: 3.2rem;
        color: rgb(222,225,230);
        text-shadow: 5px 5px 5px #fff;
      }
      .date-year {
        width: 100%;
        height: 40px;
        // background-color: aqua;
        line-height: 40px;
        font-size: 20px;
      }
    }
    .contentbox {
      width: 100%;
      height: 250px;
      // background-color: blue;
      display: flex;
      flex-direction: column;
      .texttitle {
        width: 100%;
        height: 100px;
        // background-color: blue;
        font-weight: bold;
        font-size: 14px;
        color: rgb(36,41,51);
        display: flex;
        align-items: end;
        padding-bottom: 20px;
      }
      .textmain {
        width: 70%;
        height: 90px;
        line-height: 17px;
        // background-color: red;
        font-size: 11px;
        color: rgb(103,107,115);
      }
      .textmore {
        width: 100%;
        height: 30px;
        // line-height: 30px;
        // background-color: blue;
        display: flex;
        span {
          // background-color: red;
          margin-right: 20px;
          color: rgb(55,120,229);
          display: flex;
          // height: 20px;
          // // line-height: 36px;
          // // text-align: end;
          font-size: 25px;
          font-weight: bolder;
          // font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
        .readme {
          font-size: 10px;
          line-height: 35px;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
      }
    }
    .buttonbox {
      width: 100%;
      height: 100px;
      padding-top: 25px;
      display: flex;
      
      .btn {
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-right: 10px;
        border: 1px solid rgb(157, 160, 164);
        color: rgb(157, 160, 164);
        transition: all 1s none;
        cursor: pointer;
      }
    }
  }
  .news-pic {
    width: 460px;
    height: 100%;
    // background-color: blue;
    // display: flex;
    // flex-direction: column;
    position: relative;

    .picbgc {
      width: 100%;
      height: 450px;
      background-color: #fff;
      background: url('@/assets/pic.png');
      position: relative;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // background: url('@/assets/mask.png') repeat center center;
      background-image: url('@/assets/mask.png');
      background-size: 15px 15px; /* 设置重复的图片块的大小 */
      background-repeat: repeat;
      background-color: rgba(255, 255, 255, .6);
      z-index: 3;
    }
    .picmore {
      width: 100%;
      height: 170px;
      // background-color: red;
      display: flex;
      align-items: center;
      .findmore {
        width: 100px;
        height: 20px;
        line-height: 20px;
        padding-left: 20px;
        color: rgb(157, 160, 164);
        font-size: 10px;
        background-color: #fff;
        border: 1px solid rgb(157, 160, 164);
        border-top-right-radius: 15px;
        cursor: pointer;
      }
    }
  }
}
</style>