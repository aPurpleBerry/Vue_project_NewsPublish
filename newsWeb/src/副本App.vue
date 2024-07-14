<template>
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
    <swiper-slide data-id="1">
      Slide 1
    </swiper-slide>
    <swiper-slide data-id="2">
      Slide 2
    </swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import './style.css';

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

<style>
</style>