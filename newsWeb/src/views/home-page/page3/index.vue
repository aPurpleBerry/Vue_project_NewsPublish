<template>
  <div class="about-box">
    <div class="about-left">
      <!-- <div class="text">
        <div class="text-ch">关于我们</div>
        <div class="text-en">ABOUT US</div>
      </div> -->
      <div class="text-container">
        <div class="overlay">关于我们</div>
        <div class="text">ABOUT US</div>
      </div>
    </div>
    <div class="about-right">
      <div class="company-about">
        <div class="p-text">我们成立于2024年6月，是一家由数据和技术驱动的O2O电商蛋糕品牌，不仅在逐步完善自己的品牌，还吸引着各地创业者加盟新零售。</div>
        <div class="p-text">我们尊重并了解，蛋糕时尚性的根本驱动力是创意和产品。在配方、口味、形制等任何细节，我们从未停止对新产品和新口味的信仰和研判，已诞生数十种独创品类。同时，我们从全球范围内的材质精选、制作工艺、后期服务等方面为实现创意做出保证。</div>
        <div class="p-text">今后，我们将在童趣蛋糕、马卡龙、纸杯蛋糕、蛋糕卷等各个不同的甜品领域持续深耕，持续创造全新的口味。</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.about-box {
  width: 900px;
  height: 100%;
  // background-color: red;
  display: flex;
  .about-left {
    width: 350px;
    height: 100%;
    padding-right: 50px;
    // background-color: #fff;
    .text-container {
      position: relative;
      width: 100%;
      height: 200px;
      margin-top: 60px;
      // background-color: green;
      // position: relative;
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 25px;
        z-index: 2;
        color: rgb(43,115,175); /* 设置文字颜色 */
        display: flex;
        justify-content: right;
        align-items: center;
        // background: rgba(0, 0, 0, 0.5); 
        /* 半透明背景 */
      }
      
      .text {
        width: 100%;
        height: 50px;
        font-size: 40px;
        font-weight: bolder;
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding-top: 90px;
        // background-color: red;
        position: relative;
        z-index: 1;
        // color: rgb(242,242,242); 
        color: rgb(181,216,231);
        text-align: right;
      }
    }
  }
  .about-right {
    width: 550px;
    height: 100%;
    // background-color: green;
    .company-about {
      width: 530px;
      height: 300px;
      background-color: #fff;
      box-shadow: 0px 0px 10px 5px rgb(167,209,225);
      margin-top: 130px;
      padding: 50px;
      .p-text {
        // background-color: red;
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 20px;
      }
    }
  }
}
</style>