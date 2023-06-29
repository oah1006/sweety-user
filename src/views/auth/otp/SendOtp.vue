<template>
  <div class="z-60 relative overflow-hidden bg-[url('./images/coffee-shop-3.jpg')] w-full flex items-center justify-center min-h-screen bg-no-repeat bg-contain bg-cover bg-right">
    <div class="bg-white lg:w-1/3 mx-10 lg:mx-0 z-50 px-4 py-6 shadow-2xl rounded-3xl my-4">
      <router-link :to="{ name: 'home' }" class="ml-4 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      </router-link>
      <div class="flex items-center justify-center">
        <img src="../../../images/logo.png" class="w-24 h-24 object-cover" />
      </div>
      <p class="text-2xl font-bold text-center mt-4">Gửi OTP</p>
      <p class="text-center text-zinc-600 mt-1 lg:text-base text-sm mx-4">Bạn đã quên mật khẩu? Hãy nhập email để Sweety xác thực và hỗ trợ bạn đổi mật khẩu nhé!</p>
      <div class="text-red-900 mt-2 text-md px-4 py-4 bg-red-100 rounded-md h-26" v-if="errors?.message">
        <p>{{ errors?.message }}</p>
      </div>
      <form class="mt-6 px-4" @submit.prevent="submit">
        <div class="mt-2">
          <p>Địa chỉ e-mail</p>
          <input type="text" name="email" placeholder="Email" v-model="email" class="outline-orange-500/[.55] mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
        </div>
        <button type="submit" class="px-4 py-2 bg-orange-400 w-full mt-8 rounded-md text-white font-bold">Gửi mã OTP</button>
      </form>
    </div>

    <div class="absolute opacity-50 blur-lg bg-black w-full h-full"></div>
  </div>
</template>

<script setup>


import { useToastStore } from "@/stores/toast";
import { useRouter } from "vue-router";
import {ref} from "vue";
import {useSendOtpApi} from "@/repositories/otp";

const router = useRouter()
const email = ref('')
const errors = ref({})

function submit() {
  useSendOtpApi(email.value)
      .then((response) => {
        useToastStore().success('Gửi mã OTP thành công', 3000)
        router.push(`verify-otp?email=${email.value}`)
      })
      .catch((error) => {
        errors.value = error.response.data
      })
}


</script>