<template>
  <div class="nav">
    <div class="logo">
      WELLCOME!
    </div>
    <ul>
      <li @click="toHome" class="active">首页</li>
      <li @click="toProduct">产品介绍</li>
      <li @click="toUs">关于我们</li>
      <li @click="toNews">新闻动态</li>
      <li @click="toJoin"> 加入我们</li>
    </ul>
  </div>
  <!-- https://stackoverflow.com/questions/64872840/how-to-use-swiper-slideto-in-vue3-0 -->
  <!-- https://blog.canopas.com/implement-different-types-of-sliders-using-vue-3-and-swiper-7-ab79bd5abe28 -->
  <div id="swiper-container" style="">
    <!-- 小圆点
      :pagination="{
        clickable: true,
      }"
    -->
    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
      :mousewheel="true"

      :modules="modules"
      class="mySwiper"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    > 
      <!-- 1、首页 -->
      <swiper-slide ref="1"><Page1></Page1></swiper-slide>
      <!-- 2 产品介绍 -->
      <swiper-slide> <Page2></Page2> </swiper-slide>
      <!-- 3、关于我们 -->
      <swiper-slide>Slide 2</swiper-slide>
      <!-- 4、新闻动态 -->
      <swiper-slide> <Page3></Page3> </swiper-slide>
      <!-- 加入我们 -->
      <swiper-slide><Page5></Page5></swiper-slide>
    </swiper>
  </div>
</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import Page5 from '../home-page/page5/index.vue'
import Page4 from '../home-page/page4/index.vue'
import Page3 from '../home-page/page4/index.vue'
import Page2 from '../home-page/page2/index.vue'
import Page1 from '../home-page/page1/index.vue'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import {nextTick} from 'vue'
export default {
  data() {
    return {
      swiper: null,
    };
  },
  methods: {
    onSwiper(swiper) {
      // console.log('swiper');
      // console.log(swiper);
      this.swiper = swiper;
    },
    onSlideChange: function (e) {
      //高亮
      const lis = document.querySelectorAll('.nav ul li')
      document.querySelector('.nav .active').classList.remove('active')

      //bgc position
      let realIndex = e.realIndex
      let ele = document.querySelector('#swiper-container')
      // console.log(ele.style['background-position-y']);
      if(realIndex == 0) {
        ele.style['background-position-y'] = '10%, 50%'
      } else if(realIndex == 1) {
        ele.style['background-position-y'] = '20%, 40%'
      } else if(realIndex == 2) {
        ele.style['background-position-y'] = '30%, 30%'
      } else if(realIndex == 3) {
        ele.style['background-position-y'] = '40%, 20%'
      } else if(realIndex == 4) {
        ele.style['background-position-y'] = '50%, 10%'
      }

      //获取高亮
      lis[realIndex].classList.add('active')
    },
    //a标签跳转swipe
    toHome() {
      this.swiper.slideTo(0);
    },
    toProduct() {
      this.swiper.slideTo(1);
    },
    toUs() {
      this.swiper.slideTo(2);
    },
    toNews() {
      this.swiper.slideTo(3);
    },
    toJoin() {
      this.swiper.slideTo(4);
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    Page5,
    Page4,
    Page3,
    Page2,
    Page1
  },
  setup() {
    nextTick(()=>{
      //每个li添加事件
      // 获取li元素
      // let lis = document.querySelectorAll('.nav ul li')
      // console.log(lis);
      // for(let i=0; i<lis.length; i++) {
      //   // console.log(lis[i]);
      //   lis[i].addEventListener('click',()=>{
      //     // 排他思想，干掉别人 移除类active
      //     document.querySelector('.nav .active').classList.remove('active')
      //     // 只剩自己
      //     lis[i].classList.add('active')
      //   })
      // }
      // 1 获取ul父元素
      const ul = document.querySelector('.nav ul')
      // 2 添加事件
      ul.addEventListener('click', (e)=>{
        // e.target点击的对象
        console.log(e.target);
        // 点击对象的标签名
        console.log(e.target.tagName);
        if(e.target.tagName === 'LI') {
          // 排他思想 移除原来的active
          document.querySelector('.nav .active').classList.remove('active')
          //首先，对于纯JS，这里的this指向UL，不是li
          //其次，我是在vue3 setup中写的这个逻辑，没有this了
          e.target.classList.add('active')
        }
      })
    })

    return {
      modules: [Mousewheel, Pagination]
      
    };
  },
};
</script>


<style scoped lang="scss">
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
    width: 100px;
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
#swiper-container {
  width: 100%;
  height: calc(100% - 70px);
  background-image: url('@/assets/common_wave.0dc7181c.png'), url('@/assets/common_papegames.812e0f2f.png');
  /* background-color: yellow; */
  /* background: url('@/assets/common_wave.0dc7181c.png') no-repeat; */
  background-repeat:no-repeat;
  background-position-x: 95%, 90%;
  background-size: 400px, 300px;
  background-position-y: 10%, 50%;
  transition: background-position 0.5s ease-in-out;
  z-index: 100;

  .swiper {
    width: 100%;
    height: 100%;
    // background-color: #fff;
  }

  .swiper-slide {
    font-size: 18px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


</style>