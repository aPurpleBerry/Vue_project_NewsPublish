<template>
  <div>
    <div class="shell">
      <div class="box">
        <img src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="">
        <span>Image</span>
      </div>
      <div class="box">
        <img src="" alt="">
        <span>Image2</span>
      </div>
      <div class="box">
        <img src="" alt="">
        <span>Image3</span>
      </div>
      <div class="box">
        <img src="" alt="">
        <span>Image4</span>
      </div>
      <div class="box">
        <img src="" alt="">
        <span>Image5</span>
      </div>
    </div>
    <div class="footer">
      <h1>Copyright ©2024 APURPLEBERRY. <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2024264343号</a></h1>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.shell {
  width: 40%;
  height: 400px;
  display: flex;
  .box{
    // width: 150px;
    // height: 500px;
    // margin-left: 20px;
    background-color: red;
    flex: 1;
    // box-shadow: 10px 10px 20px rgba(0,0,0,.5);
    // border-radius: 20px;
    border: 5px solid #fff;
    overflow: hidden;
    transition: 1s;

  }
  .box>img {
    width: 200%;
    object-fit: cover;
    transition: 1s;
  }
  .box>span {
    font: 200 45px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box:hover{
    flex-basis: 40%;
  }
  .box:hover>img {
    width: 100%;
    height: 100%;
  }
}
.footer {
  width: 100%;
  height: 50px;
  background-color: #fff;
  opacity: 0.8;
  position: fixed;
  bottom: 0;
  h1 {
    width: 350px;
    line-height: 50px;
    font-size: 12px;
    margin-left: 40%;
    margin: 0 auto;
  }
}
</style>