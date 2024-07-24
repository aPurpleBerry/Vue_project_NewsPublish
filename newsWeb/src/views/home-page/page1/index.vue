<template>
  <div class="home">
    <div class="left">
      <span class="span-left">APURPLE</span>
    </div>
    <div class="right">
      <span class="span-right">BERRY</span>
      <span class="span-small">CAKE SHOP</span>
    </div>
    
    
    <!-- <span>CAKE SHOP</span> -->
     <!-- <h2>CAKE</h2> -->
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  /* background-color: red; */
  background-image: url("@/assets/home-cake.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  .left {
    width:47%;
    height: 100%;
    // display: flex;
    text-align: right;
  } 
  .right {
    width: 53%;
    height: 100%;
    background-color: rgba(255,255,255,0.3);
    backdrop-filter: blur(5px);
    display: flex;
  }
  span {
    width: 600px;
    height: 300px;
    line-height: 400px;
    // background-color: red;
    // display: block;
    font-size: 8rem; 
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: transparent;
    -webkit-text-stroke-color: aliceblue;
    -webkit-text-stroke-width: 3px;
  }
  .span-left {
    display: block;
    float: right;
    // background-color: red;
  }
  .span-right {
    color: white;
    -webkit-text-stroke-width: 0px;
  }
  .span-small {
    position: fixed;
    top: 150px;
    font-size: 4rem; 
    -webkit-text-stroke-width: 0px;
    color: #fff;
    font-family:'Courier New', Courier, monospace;
  }
}
</style>