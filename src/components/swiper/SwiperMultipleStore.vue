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
    <swiper-slide v-for="attachment in attachments" :key="attachment.id">
      <img :src="attachment.url" class="h-full w-full">
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
  props: {
    attachments: {
      type: Array, // Kiểu dữ liệu của props là một mảng
    },
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};


</script>

<style scoped>
.swiper-button-prev {
  color: white;
}

.swiper-button-next {
  color: white;
}
</style>