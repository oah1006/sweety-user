<template>
  <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '0': {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '1024': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"

  >
    <swiper-slide v-for="product in bestSellerProduct" :key="product.id">
      <div>
        <img :src="product.attachment[0]?.url">
        <p class="text-zinc-600 text-2xl font-medium mt-4">{{ product.name }}</p>
        <p class="text-red-600 font-bold">{{ formatPrice(product.price) }} đồng</p>
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

import '@/style/style.css'

// import required modules
import { Autoplay, Pagination } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    bestSellerProduct: {
      type: Array,
    },
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
      slidesPerView: 4,
    };
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString("vi-VN");
    },
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
