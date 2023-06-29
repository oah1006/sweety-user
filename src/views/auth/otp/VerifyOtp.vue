<template>
  <div class="z-60 relative overflow-hidden bg-[url('./images/coffee-shop-4.jpg')] w-full flex items-center justify-center min-h-screen bg-no-repeat bg-contain bg-cover bg-right">
    <div class="bg-white lg:w-1/3 mx-10 lg:mx-0 z-50 px-4 py-4 shadow-2xl rounded-3xl my-4">
      <router-link :to="{ name: 'home' }" class="ml-4 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white">
          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
      </router-link>
      <div class="flex items-center justify-center">
        <img src="../../../images/logo.png" class="w-24 h-24 object-cover" />
      </div>
      <p class="text-2xl font-bold text-center mt-4">Xác thực mã OTP</p>
      <p class="text-center text-zinc-600 mt-1  mx-4">Vui lòng nhập mã OTP 6 chữ số đã được gửi đến email của bạn. Mã OTP sẽ có hiệu lực trong 1 phút</p>
      <form class="mt-6 px-4" @submit.prevent="submit">
        <div class="mt-2">
          <p>Mã OTP của bạn</p>
          <input type="text" name="otp" placeholder="OTP của bạn" v-model="formVerifyOtp.otp"
                 class="form-input mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
        </div>
        <input type="hidden" name="email" placeholder="Email" v-model="formVerifyOtp.email" class="outline-orange-500/[.55] mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
        <button type="submit" class="px-4 py-2 bg-orange-400 w-full mt-8 rounded-md text-white font-bold">Xác thực</button>
      </form>
    </div>

    <div class="absolute opacity-50 blur-lg bg-black w-full h-full"></div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import {useVerifyOtpApi} from "@/repositories/otp";
import { useRoute, useRouter } from 'vue-router'
import {useToastStore} from "@/stores/toast";

const route = useRoute()
const router = useRouter()

const formVerifyOtp = ref({
  email: route.query.email,
  otp: ''
})

function submit() {
  useVerifyOtpApi(formVerifyOtp.value)
      .then((response) => {
        $cookies.set('tokenOtp', response.data.token, 60*60*24)

        useToastStore().success('Mã OTP hợp lệ', 3000)

        router.push(`forgot-password?email=${formVerifyOtp.value.email}`)
      })
      .catch((error) => {
        useToastStore().error('Mã OTP của bạn đã hết hạn', 3000)
        router.push('send-otp')
      })
}

</script>