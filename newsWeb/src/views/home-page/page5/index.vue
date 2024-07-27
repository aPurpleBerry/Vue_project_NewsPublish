<template>
  <div class="career-tab">
    <div class="onecareer" style="background-color: rgb(43,115,175);">校园招聘</div>
    <div class="onecareer" style="color: rgb(43,115,175);;">社会招聘</div>
  </div>
  <div class="scroll-container">
    <div class="scroll-content">
      <div class="box">
        <div class="mask"><h1>技术研发类</h1></div>
        <img src="@/assets/career_7.jpg" alt="">
        <div class="cover"><h2>技术研发类</h2></div>
      </div>
      <div class="box">
        <div class="mask"><h1>美术类</h1></div>
        <img src="@/assets/career_5.jpg" alt="">
        <div class="cover"><h2>美术类</h2></div>
      </div>
      <div class="box">
        <div class="mask"><h1>策划类</h1></div>
        <img src="@/assets/career_2.jpg" alt="">
        <div class="cover"><h2>策划类</h2></div>
      </div>
      <div class="box">
        <div class="mask"><h1>市场运营类</h1></div>
        <img src="@/assets/career_3.jpg" alt="">
        <div class="cover"><h2>市场运营类</h2></div>
      </div>
      <div class="box">
        <div class="mask"><h1>动画CG类</h1></div>
        <img src="@/assets/career_4.jpg" alt="">
        <div class="cover"><h2>动画CG类</h2></div>
      </div>
      <div class="box">
        <div class="mask"><h1>平台类</h1></div>
        <img src="@/assets/career_1.jpg" alt="">
        <div class="cover"><h2>平台类</h2></div>
      </div>
      <div class="box">
        <div class="mask"><h1>音频类</h1></div>
        <img src="@/assets/career_6.jpg" alt="">
        <div class="cover"><h2>音频类</h2></div>
      </div>
      <div class="box">
        <div class="mask"><h1>IP开发类</h1></div>
        <img src="@/assets/career_0.jpg" alt="">
        <div class="cover"><h2>IP开发类</h2></div>
      </div>
    </div>
  </div>
  <div class="careertitle">
    CAREER
  </div>
  <div class="footer">
    <h1>Copyright ©2024 APURPLEBERRY. <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2024264343号</a></h1>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';

nextTick(()=>{
  let boxs = document.querySelectorAll('.box')
  // console.log(boxs);

  for(let i=0; i<boxs.length; i++) {
    boxs[i].addEventListener('mouseenter',()=>{
      let masks = document.querySelectorAll('.mask')
      //@ts-ignore
      masks[i].style.opacity = 0;
    })

    boxs[i].addEventListener('mouseleave',()=>{
      let masks = document.querySelectorAll('.mask')
      //@ts-ignore
      masks[i].style.opacity = 1;
    })
  }
})
</script>

<style scoped>
.careertitle {
  margin: 0px 0px 15px 120px;
  color: rgb(199,199,199);
  font-size: 5rem;
  
}
.career-tab {
  width: 200px;
  height: 25px;
  /* background-color: red; */
  /* margin-left: 120px;
  margin-top: 50px; */
  margin: 50px 0px 15px 120px;
  display: flex;
}
.onecareer {
  width: 100px;
  height: 100%;
  font-size: 14px;
  color: #fff;
  line-height: 25px;
  padding-left: 20px;
  cursor: pointer;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(255, 255, 255, 0.5);  */

  background: rgba(255, 255, 255, 0.5);
  clip-path: polygon(0 0, 600% 0, 0 80%, 0 0); 
}
.mask h1 {
  writing-mode: vertical-lr;
  font-size: 15px;
  font-weight: 600;
  /* color: rgb(102,102,102); */
  color: rgb(43,115,175);
  margin-top: 100px;
  margin-left: 10px;
}
.scroll-container {
  width: 850px;
  height: 400px;
  /* border: 5px solid #fff; */
  /* display: flex; */
  background-color: #fff;
  padding: 12px 10px 12px 10px;
  overflow-x: scroll;
  margin-left: 120px;
}
.scroll-content {
  width: 1000px;
  height: 100%;
  /* background-color: red; */
  display: flex;
  /* overflow-x: scroll; */
}
.box {
  flex: 0 0 auto;
  width: 100px;
  height: 100%;
  margin-right: 5px;
  /* background-color: yellow; */
  transition: .5s;
  position: relative;
}
.cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 100%;
    background-color: rgb(17, 92, 154);
    opacity: 0;
    transform: scale(0);
}
.cover h2 {
  writing-mode: vertical-lr;
  /* background-color: red; */
  width: 30px;
  color: white;
  font-size: 17px;
  font-weight: bolder;
  margin-top: 130px;
  margin-left: 10px;
}

.box:hover .cover {
    opacity: 0.8;
    transform: scale(1);
}

.box>img {
  /* max-height: 100%;
  height: auto; */
  height: 100%;
  width: auto;
  overflow: hidden;
  object-fit: cover;
}
.box:hover{
  width: 250px;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background-color: rgb(204,204,204);
}
::-webkit-scrollbar-thumb {
  background: #2b73af;
  border-radius: 0;
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(151,200,220);

}
.footer {
  width: 100%;
  height: 50px;
  background-color: #fff;
  opacity: 0.8;
  position: fixed;
  bottom: 0;
}
.footer h1 {
    width: 350px;
    line-height: 50px;
    font-size: 12px;
    margin-left: 40%;
    margin: 0 auto;
  }
</style>
