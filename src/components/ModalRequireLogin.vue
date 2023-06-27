<template>
  <div class="fixed top-0 left-0 w-full flex h-screen justify-center items-center transition duration-700 ease-in-out z-50">
    <div @click="closeModal" class="absolute opacity-80 bg-black w-full h-screen flex items-center z-50">
    </div>
    <div class="lg:w-1/3 mx-auto rounded-2xl shadow-md z-50 lg:px-0 px-2">
      <div class="flex flex-col items-center gap-1 bg-white px-8 py-8 justify-center rounded-t-lg shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-14 h-14 text-zinc-300">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
        </svg>
        <p class="text-zinc-600 text-md font-bold">Bạn cần phải đăng nhập để có thể đặt giỏ hàng!</p>
        <p class="text-center text-sm text-zinc-500">Nếu bạn chưa có tài khoản, bạn có thể tạo tài khoản ngay. Nếu bạn có rồi, hãy nhấn nút đăng nhập phía dưới!</p>
      </div>
      <div class="bg-zinc-50 w-full h-full flex justify-center items-center gap-8 px-8 py-4 rounded-b-lg shadow-md">
        <router-link :to="{ name: 'register' }" class="bg-white text-zinc-500 px-6 py-2 rounded-md font-bold border border-zinc-300">Tạo tài khoản</router-link>
        <router-link :to="{ name: 'login' }" class="bg-cyan-400 text-white px-6 py-2 rounded-md font-bold">Đăng nhập ngay</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useRouter} from "vue-router";

const emits = defineEmits(['close'])

const router = useRouter()

function closeModal() {
  emits('close')
}

function redirectLogin() {
  router.push({
    name: 'login'
  })

  closeModal()
}


</script>