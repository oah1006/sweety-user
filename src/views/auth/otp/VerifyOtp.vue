<template>
  <div class="z-60 relative overflow-hidden bg-[url('../../images/coffee-shop-4.jpg')] w-full flex items-center justify-center min-h-screen bg-no-repeat bg-contain bg-cover bg-right">
    <div class="bg-white w-1/3 z-50 px-4 py-4 shadow-2xl rounded-3xl my-4">
      <router-link :to="{ name: 'send-otp' }" class="underline text-orange-500">Quay lại</router-link>
      <div class="flex items-center justify-center">
        <img src="../../../images/logo.png" class="w-24 h-24 object-cover" />
      </div>
      <p class="text-2xl font-bold text-center mt-4">Xác thực mã OTP</p>
      <p class="text-center text-zinc-600 mt-1">Vui lòng nhập mã OTP 6 chữ số đã được gửi đến email của bạn. Mã OTP sẽ có hiệu lực trong 1 phút</p>
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