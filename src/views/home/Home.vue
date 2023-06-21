<template>
  <div>
    <Header />
    <div class="mt-14 w-full relative">
      <div class="bg-gradient-to-r from-white via-orange-100 to-cyan-100">
        <div class="z-20 bg-[length:80%] bg-[url('./images/banner2.png')] bg-no-repeat bg-contain bg-cover bg-right w-full h-[580px]">
          <div class="pt-12 lg:ml-32 mx-16 text-zinc-700 text-4xl font-bold">
            <p>Trà sữa tươi ngon</p>
            <p class="lg:px-10">đủ để làm hài lòng mọi tâm hồn!</p>
          </div>
          <div class="lg:ml-32 mx-16 mt-8 lg:w-1/3 z-20 relative">
            <p class="text-zinc-800 text-lg">Hãy ghé thăm tiệm trà sữa của chúng tôi và tận hưởng những phút giây thư giãn tuyệt vời với các loại đồ uống tuyệt vời của chúng tôi!</p>
            <div v-if="!token" class="mt-6 flex gap-10 justify-center items-center">
              <button @click="redirectLogin" class="mx-4 px-6 py-2 bg-orange-500 text-white rounded-lg">Đăng nhập</button>
              <button @click="redirectRegister" class="underline text-xl">Đăng ký</button>
            </div>
          </div>
          <img src="./images/banner10.png" class="absolute object-contain w-80 h-80 bottom-0 -left-10 hidden md:block lg:block xl:block" />
          <div class="hidden xl:block" >
            <img src="./images/banner5.png" class="absolute object-contain w-80 h-80 top-64 left-[500px]" />
            <img src="./images/banner4.png" class="absolute object-contain w-96 h-96 top-32 right-72" />
            <img src="./images/banner3.png" class="absolute object-contain w-80 h-80 top-44 right-10" />
            <img src="./banner7.png" class="absolute object-contain w-36 w-36 top-96 right-[520px]" />
            <img src="./images/banner6.png" class="absolute object-contain w-36 w-36 top-96 right-40" />
            <img src="./images/banner8.png" class="absolute object-contain w-36 w-36 top-[450px] left-[480px]" />
          </div>
        </div>
      </div>
    </div>
    <div class="px-32 py-10">
      <div class="flex flex-col items-center">
        <p class="text-center text-3xl text-orange-600 font-bold mt-3 mb-10">Các sản phẩm bán chạy</p>
      </div>
      <SwiperProduct :bestSellerProduct="bestSellerProduct" />
    </div>
    <div class="mt-10">
      <Swiper class="rounded-2xl" />
    </div>

    <div class="lg:flex py-10">
      <div class="lg:w-1/3 flex justify-center items-center flex-none mb-10 lg:mb-0">
        <div>
          <p class="text-6xl lg:w-56 px-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black mb-10">Cửa hàng hiện tại của Sweety</p>
          <router-link :to="{ name: 'stores' }" class="px-4 py-2 bg-orange-500 rounded-lg text-white text-center font-bold ml-5">Xem thêm</router-link>
        </div>
      </div>
      <SwiperStore class="lg:w-1/2 rounded-2xl grow" />
    </div>
    <div>
      <Footer />
    </div>
  </div>

</template>

<script setup>

import Header from '@/components/home/Header.vue'
import Footer from "@/components/home/Footer.vue";

import { useRouter } from "vue-router";
import Swiper from "@/components/swiper/Swiper.vue";
import SwiperStore from "@/components/swiper/SwiperStore.vue";
import SwiperProduct from "@/components/swiper/SwiperProduct.vue";
import { useGetBestSellerProduct } from "@/repositories/product";
import {ref} from "vue";

const router = useRouter();

const token = $cookies.get('token')

const bestSellerProduct = ref({})

function redirectLogin() {
  router.push({
    name: 'login'
  })
}

function redirectRegister() {
  router.push({
    name: 'register'
  })
}

function getBestSellerProduct() {
  useGetBestSellerProduct()
      .then((response) => {
        bestSellerProduct.value = response.data.data
      })
}

getBestSellerProduct()



</script>

<style>

</style>