<template>
  <div class="news">
    <div class="news-text">
      <div class="datebox">
        <div class="date-detail">{{oneNews.month}}/{{oneNews.day}}</div>
        <div class="date-year">{{oneNews.year}}</div>
      </div>
      <div class="contentbox">
        <div class="texttitle" v-html="oneNews.title"></div>
        <div class="textmain">{{ oneNews.content }}</div>
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
      <!-- 图片 -->
      <div class="picbgc"  ref="myDiv">
        <img :src="oneNews.bgcPic" alt="">
        <div class="mask"></div>
      </div>
      <div class="picmore">
        <!-- <img src="@/assets/pic.png" alt=""> -->
        <div class="findmore" @click="toNews">查看更多新闻</div>
      </div>
    </div>
    <div class="picfloat">
      <img :src="oneNews.floatPic" alt="1">
      <!-- <img src="@/assets/home-cake3.jpg" alt=""> -->
    </div>

  </div>
</template>

<script setup>
import { nextTick,onMounted,ref,reactive } from 'vue';
import { useRouter } from 'vue-router';
const $router = useRouter()
let toNews = ()=>{
  $router.push('/news')
}

let oneNews = reactive(
  {
    month: '11',
    day: '06',
    year: '2023',
    title: 'HwiCake荣获“第一届HAOCAKE<br>全球美味奖”3星奖章',
    content: '近日，塔塔星球国际风味评鉴所公布了第一届HAOCAKE全球美味奖的获得者。HwiCake被授予3星奖章。这是继“2022年度MEIWEI空空赏”、“塔塔星球示范单位”...',
    floatPic: new URL('@/assets/news/home-cake3.jpg',import.meta.url).href,
    bgcPic: new URL('@/assets/news/home-cake3.jpg',import.meta.url).href
  }
)

const shownews = [
  {
    month: '11',
    day: '06',
    year: '2023',
    title: 'HwiCake荣获“第一届HAOCAKE<br>全球美味奖”3星奖章',
    content: '近日，塔塔星球国际风味评鉴所公布了第一届HAOCAKE全球美味奖的获得者。HwiCake被授予3星奖章。这是继“2022年度MEIWEI空空赏”、“塔塔星球示范单位”...',
    floatPic: new URL('@/assets/news/home-cake3.jpg',import.meta.url).href,
    bgcPic: new URL('@/assets/news/home-cake3.jpg',import.meta.url).href
  },
  {
    month: '03',
    day: '03',
    year: '2022',
    title: '美味常驻 童心不灭 | HwiCake携手<br>快乐星球成立童心保卫计划',
    content: '2024年，HwiCake与快乐星球共同发起的旨在关注成年人童心快乐的“童心保卫计划”在塔塔星球举行。每个人都能定制童趣，每一层奶油，都藏着童年的欢笑；每一个卡通角色...',
    floatPic: new URL('@/assets/news/home-cake.png',import.meta.url).href,
    bgcPic: new URL('@/assets/news/home-cake.png',import.meta.url).href
  },
  {
    month: '06',
    day: '13',
    year: '2022',
    title: 'JuanJuan 荣获首届JuanJuan大赛<br>宇宙年度大卷',
    content: '近日，由塔塔星球甜品研究院举办的“2023年度首届JuanJuan大赛”公布了最佳创新大卷、最佳创新塔塔星文化奖、最佳创新宇宙价值功能奖等系列获奖名单...',
    floatPic: new URL('@/assets/news/home-cake2.png',import.meta.url).href,
    bgcPic: new URL('@/assets/news/home-cake2.png',import.meta.url).href
  }
]

const myDiv = ref(null);
onMounted(()=>{
  // const picbgc = document.querySelector('.news .news-pic .picbgc')
  const style = window.getComputedStyle(myDiv.value);
  const backgroundImage = style.backgroundImage;
  console.log('1');
  console.log(backgroundImage); // 输出例如 "url('path/to/image.jpg')"
  // backgroundImage = `url('@/assets/home-cake3.png')`
})
nextTick(()=>{
  const btns = document.querySelectorAll('.buttonbox .btn')
  btns[0].classList = 'active'


  for(let i=0; i<btns.length; i++) {
    // document.querySelectorAll('.active').classList.remove('.active')
    btns[i].addEventListener('click',()=>{
      document.querySelector('.buttonbox .active').classList = 'static'
      btns[i].classList = 'active'
      // console.log(shownews[i]);
      Object.assign(oneNews, shownews[i])
      // oneNews.title = shownews[i].title
      
        const style = window.getComputedStyle(myDiv.value);
        let backgroundImage = style.backgroundImage;
        
      console.log(backgroundImage);
      backgroundImage = ''
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
      // background-color: #fff;
      // background-image: url('@/assets/pic.png');
      position: relative;
      overflow: hidden;

    }
    .picbgc img {
      width: auto;
      height: 100%;
    }
    .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // background: url('@/assets/mask.png') repeat center center;
      background-image: url('@/assets/news/mask.png');
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
  .picfloat {
    width: 400px;
    height: 220px;
    // background-color: skyblue;
    position: absolute;
    top: 20%;
    left: 40%;
    // transform: translate(-40%, -60%);
    // position: fixed;
    // flex: none;
    // float: left;
    // top: 180px;
    // left: 40%;
    // background-image: url('@/assets/pic.png');
    // background-repeat: no-repeat;
    // background-size: cover;
    overflow: hidden;
    z-index: 100;
    .picfloat img{
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;
      // transform: scale(1);
      // transition: all 1s linear;
    }
    .picfloat:hover img{
      transform: scale(1.2);
      // transition: all 1s linear;
    }
  }
}

</style>