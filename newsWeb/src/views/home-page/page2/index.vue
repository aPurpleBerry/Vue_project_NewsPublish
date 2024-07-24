<template>
  <div class="product-box">
    <div class="product-title">
      <h1>热销产品</h1>
    </div>
    <div class="product-list">
      <div class="cake-box">
          <img src="@/assets/cake6.png" alt="">
          <span>童趣蛋糕</span>
          <h3>准备好回忆起童年时的乐趣了吗？那么，就来看看童趣蛋糕吧，这是我们最新的蛋糕产品。</h3>
      </div>
      <div class="cake-box">
        <img src="@/assets/cake7.jpg" alt="">
        <span>马卡龙</span>
        <h3>我们的马卡龙是用爱和关怀精心制作的，以精致的贝壳和奶油馅料为特色，将您带到一个神奇的世界。</h3>
      </div>
      <div class="cake-box">
        <img src="@/assets/cake4.png" alt="">
        <span>纸杯蛋糕</span>
        <h3>用纸杯烘烤的小而独立的蛋糕，也称为纸杯松饼蛋糕或纸杯甜点，采用各种成分调味，如香草、巧克力或水果。</h3>
      </div>
      <div class="cake-box">
        <img src="@/assets/cake5.png" alt="">
        <span>蛋糕卷</span>
        <h3>各种口味的蛋糕卷，独特的味道组合，只使用最新的原料，确保最好的风味。</h3>
      </div>
      <div class="cake-box">
        <img src="@/assets/cake1.jpg" alt="">
        <span>经典组合</span>  
        <h3>6款经典蛋糕組成的特别版蛋糕，包括原味、玫瑰及碧根果仁千层蛋糕，以及经典的草莓海绵蛋糕、栗子蛋糕及朱古力期盼蛋糕。</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.product-box {
  width: 1200px;
  height: 400px;
  // background-color: green;
  margin: 100px auto 0px auto;
  .product-title {
    width: 100%;
    height: 50px;
    h1{
      width: 200px;
      height: 40px;
      line-height: 39px;
      background-color: #2b73af;
      // font-family: FangSong;
      font-weight: bolder;
      color: #fff;
      text-align: center;
      margin: 0 auto;
      font-size: 1.5rem;
    }
  }
  .product-list {
    width: 100%;
    height: 300px;
    // border: 2px solid black;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .cake-box {
      width: 200px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      // background-color: red;
      overflow: hidden;
      position: relative;
      h3 {
        position: absolute;
        top: 55px;
        left: 25px;
        width: 150px;
        height: 150px;
        opacity: 0;
        color: #387cb4;
        font-weight: bolder;
        // font-family: FangSong;
        font-size: 15px;
        text-align: center;
        transition: 0.3s;
      }
    }
    .cake-box img {
      width: 100%;
      height: 200px;
      transition: 0.3s;
    }
    .cake-box:hover img{
      opacity: 0.3;
      transform: scale(1.1);
    }
    .cake-box:hover h3{
      opacity: 1;
    }
    .cake-box span {
      background-color: #fff;
      text-align: center;
      // font-family: FangSong;
      font-size: 14px;
      font-weight: bold;
      color: #2b73af;
      height: 25px;
      line-height: 25px;
    }
  }
}
</style>