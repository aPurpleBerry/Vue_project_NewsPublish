<template>
  <div class="hh" style="width: 100%;height: 80px;background-color: red;"></div>

  <div id="swiper-container">
    
    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :spaceBetween="30"
      :mousewheel="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    > 
      <swiper-slide ref="1">
        Slide 1
      </swiper-slide>
      <swiper-slide ref>
        Slide 2
      </swiper-slide><swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    </swiper>
  </div>
</template>


<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';

  // import required modules
  import { Mousewheel, Pagination } from 'swiper/modules';

 
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      console.log(SwiperSlide);

      return {
        modules: [Mousewheel, Pagination]
        
      };
    },
  };
</script>


<style scoped>
#swiper-container {
  width: 100%;
  height: calc(100% - 80px);
  /* background-color: yellow; */
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  /* background: #fff; */

  /* Center slide text vertically */
  /* display: flex;
  text-align: center;
  justify-content: center;
  align-items: center; */
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>