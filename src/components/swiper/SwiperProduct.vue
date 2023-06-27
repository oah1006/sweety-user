<template>
  <swiper
      :slidesPerView="slidesPerView"
      :spaceBetween="30"
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
    <swiper-slide v-for="product in bestSellerProduct" :key="product.id">
      <div>
        <img :src="product.attachment[0]?.url" :class="{
            'h-full': slidesPerView === 1,
            'w-full': slidesPerView === 1,
            'object-cover': slidesPerView === 1,
            'rounded-2xl': slidesPerView === 1,
          }">
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
      type: Array, // Kiểu dữ liệu của props là một mảng
    },
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
      slidesPerView: 4,
    };
  },
  mounted() {
    this.updateSlidesPerView(); // Initial call to set slidesPerView
  },
  methods: {
    formatPrice(price) {
      return price.toLocaleString("vi-VN");
    },
    updateSlidesPerView() {
      // Update slidesPerView based on screen size
      if (window.innerWidth < 768) {
        this.slidesPerView = 1;
      } else {
        this.slidesPerView = 4;
      }
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
