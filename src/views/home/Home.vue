<template>
  <div>
    <Header class="z-50 relative"/>
    <div class="w-full relative">
      <div class="bg-gradient-to-r from-white via-orange-100 to-cyan-100">
        <div class="z-20 bg-[length:80%] bg-[url('images/banner2.png')] bg-no-repeat bg-contain bg-cover bg-right w-full h-[580px]">
          <div class="pt-12 ml-32 text-zinc-700 text-4xl font-bold">
            <p class="title">Trà sữa tươi ngon</p>
            <p class="px-10">đủ để làm hài lòng mọi tâm hồn!</p>
          </div>
          <div class="ml-32 mt-8 w-1/3 z-40 relative">
            <p class="text-zinc-800 text-lg">Hãy ghé thăm tiệm trà sữa của chúng tôi và tận hưởng những phút giây thư giãn tuyệt vời với các loại đồ uống tuyệt vời của chúng tôi!</p>
            <div v-if="!token" class="mt-6 flex gap-10 justify-center items-center">
              <button @click="redirectLogin" class=" mx-4 px-6 py-2 bg-orange-500 text-white rounded-lg">Đăng nhập</button>
              <button @click="redirectRegister" class="underline text-xl">Đăng ký</button>
            </div>
          </div>
          <img src="images/banner5.png" class="absolute object-contain w-80 h-80 top-44 left-[630px]" />
          <img src="images/banner4.png" class="absolute object-contain w-96 h-96 top-14 right-60" />
          <img src="images/banner3.png" class="absolute object-contain w-80 h-80 top-44 right-0" />
          <img src="images/banner7.png" class="absolute object-contain w-36 w-36 top-96 right-[420px]" />
          <img src="images/banner6.png" class="absolute object-contain w-36 w-36 top-96 right-40" />
          <img src="images/banner8.png" class="absolute object-contain w-36 w-36 top-96 left-[600px]" />
          <img src="images/banner10.png" class="absolute object-contain w-80 h-80 bottom-0 -left-10" />
        </div>
      </div>
    </div>
    <div class="flex py-10 relative">
      <div class="w-1/2 flex flex-col justify-center items-center">
        <div class="w-32">
          <p class="text-6xl">Tại sao lại lựa chọn </p>
          <p class="text-6xl pr-56 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">cửa hàng Sweety</p>
        </div>
      </div>
      <div class="w-1/2">
        <div class="flex items-center gap-10 border-b border-zinc-400">
          <img src="images/service2.png" class="object-contain w-32 h-56" />
          <div>
            <p class="text-2xl font-medium">Đặt trà sữa online</p>
            <p class="mt-3 text-zinc-600">Đây là một trong những dịch vụ cốt lõi nhằm giúp cho khách hàng có thể sử dụng sản phẩm tại nhà chỉ vài thao tác sử dụng điện thoại của mình</p>
          </div>
        </div>
        <div class="flex items-center gap-10 border-b border-zinc-400">
          <img src="images/service3.png" class="object-contain w-24 h-56" />
          <div>
            <p class="text-2xl font-medium">Trà sữa chất lượng</p>
            <p class="mt-3 text-zinc-600">Chúng tôi cung cấp những đồ uống đặc biệt, đa dạng và sử dụng những nguyên liệu tự nhiên và thân thiện với môi trường, giúp bạn thưởng thức đồ uống yêu thích mà không lo về tác động đến môi trường</p>
          </div>
        </div>
        <div class="flex items-center gap-10">
          <img src="images/service4.png" class="object-contain w-32 h-56" />
          <div>
            <p class="text-2xl font-medium">Giao hàng thần tốc</p>
            <p class="mt-3 text-zinc-600">Chỉ sau vài phút đặt hàng và chuẩn bị sản phẩm, chúng tôi sẽ mang sản phẩm đến cho bạn tới tận nhà ngay lập tức</p>
          </div>
        </div>
      </div>
      <div class="z-30 absolute left-[-20%] -top-18 w-[1000px] max-w-full h-[640px] bg-orange-radial-gradient rounded-full opacity-[.15]"></div>
    </div>
    <div>

    </div>
  </div>

</template>

<script setup>

import Header from '@/components/home/Header.vue'
import {useRouter} from "vue-router";

const router = useRouter();

const token = $cookies.get('token')

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

</script>

<style>

</style>