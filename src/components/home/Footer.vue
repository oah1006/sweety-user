<template>
  <div class="z-20 bg-[url('./images/footer-2.jpg')] brightness-50 bg-cover bg-right w-full lg:h-96 h-full">
    <div class="lg:flex md:flex lg:items-center md:items-center lg:justify-between md:justify-between md:gap-20 py-10 lg:py-20 px-10 lg:px-0">
      <div class="text-white flex flex-col items-center z-50 flex-none lg:w-1/2 pt-8 lg:px-0 lg:pt-0">
        <div>
          <img src="../../images/logo-1.png" class="w-24 h-24 object-cover z-50" />
          <p class="mt-3 text-lg font-bold">Chuỗi cửa hàng trà sữa Sweety</p>
          <p class="mt-3">Địa chỉ: 101 Tây Hòa, Phước Long A, quận 9, TP. Hồ Chí Minh</p>
          <p>Số điện thoại: (0123-456-789)</p>
          <p>Email: sweety.milktea@gmail.com</p>
        </div>
      </div>
      <div class="text-white mt-10 lg:flex lg:flex-col lg:items-center z-50 grow lg:w-1/2">
        <p class="text-2xl font-bold">Giới thiệu</p>
        <div class="lg:flex flex-col lg:gap-4">
          <p class="lg:mt-6 text-lg">Về chúng tôi</p>
          <p @click="directListProduct" class="lg:mt-1 text-lg cursor-pointer">Sản phẩm</p>
          <p class="lg:mt-1 text-lg">Cửa hàng</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";

const router = useRouter();

function directListProduct() {
  router.push({
    name: 'list-product'
  })
}

</script>