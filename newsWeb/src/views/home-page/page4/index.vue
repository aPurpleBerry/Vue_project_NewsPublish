<template>
  <div class="scroll-container">
    <div class="scroll-content">
      <div class="box">
        <div class="mask"></div>
        <img src="@/assets/career_0.8884dce0.png" alt="">
        <div class="cover">HELLO</div>
      </div>
      <div class="box">
        <img src="@/assets/career_1.8f97723a.png" alt="">
        <div class="cover">HELLO</div>
      </div>
      <div class="box">
        <img src="@/assets/career_0.8884dce0.png" alt="">
        <div class="cover">HELLO</div>
      </div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from 'vue';
nextTick(()=>{
  let boxs = document.querySelectorAll('.box')
  console.log(boxs);

  for(let i=0; i<boxs.length; i++) {
    boxs[i].addEventListener('mouseenter',()=>{
      console.log('hhh');
      
    })
  }
})



</script>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .5); /* 使用 rgba 设置半透明背景，最后的参数即为透明度，数值越小越透明 */
}
.scroll-container {
  width: 850px;
  height: 400px;
  border: 2px solid #000;
  /* display: flex; */
  overflow-x: scroll;
  margin: 50px;
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
    background-color: black;
    color: white;
    text-align: center;
    line-height: 200px;
    font-size: 30px;
    opacity: 0;
    transform: scale(0);
}

.box:hover .cover {
    opacity: 0.4;
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
::-webkit-scrollbar-thumb {
  background: #2f90b9;
}
::-webkit-scrollbar-thumb:hover {
  background: #2b73af;
}

</style>