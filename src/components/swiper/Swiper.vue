<template>
  <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide>
      <img src="../../images/slider_1.png" class="h-full w-full object-contain">
    </swiper-slide>
    <swiper-slide>
      <img src="../../images/slider_2.png" class="h-full w-full object-contain">
    </swiper-slide>
    <swiper-slide>
      <img src="../../images/slider_3.png" class="h-full w-full object-contain">
    </swiper-slide>
  </swiper>
</template>


<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/style/style.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};


</script>

<style>
.swiper-button-prev {
  color: white;
}

.swiper-button-next {
  color: white;
}
</style>