<template>
  <div class="z-60 relative overflow-hidden bg-[url('../../images/coffee-shop-3.jpg')] w-full flex items-center justify-center min-h-screen bg-no-repeat bg-contain bg-cover bg-right">
    <div class="bg-white w-1/3 z-50 px-4 py-10 shadow-2xl rounded-3xl my-4">
      <div class="flex items-center justify-center">
        <img src="../../images/logo.png" class="w-24 h-24 object-cover" />
      </div>
      <p class="text-2xl font-bold text-center mt-4">Gửi OTP</p>
      <p class="text-center text-zinc-600 mt-1">Bạn đã quên mật khẩu? Hãy nhập email để Sweety xác thực và hỗ trợ bạn đổi mật khẩu nhé!</p>
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