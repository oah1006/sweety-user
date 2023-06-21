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
      <img src="./public/images/store_1.jpg" class="h-full w-full">
    </swiper-slide>
    <swiper-slide>
      <img src="./public/images/store_2.jpg" class="h-full w-full">
    </swiper-slide>
    <swiper-slide>
      <img src="./public/images/store_3.jpg" class="h-full w-full">
    </swiper-slide>
    <swiper-slide>
      <img src="./public/images/store_4.jpg" class="h-full w-full">
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
.swiper-pagination {
  margin-top: 50px;
}

.swiper-button-prev {
  color: orange !important;
}

.swiper-button-next {
  color: orange !important;
}
</style>