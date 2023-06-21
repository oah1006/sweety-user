<template>
  <div class="z-60 relative overflow-hidden bg-[url('./images/coffee-shop-5.jpg')] w-full flex items-center justify-center min-h-screen bg-no-repeat bg-contain bg-cover bg-right">
    <div class="bg-white w-1/3 z-50 px-4 py-4 shadow-2xl rounded-3xl my-4">
      <router-link :to="{ name: 'send-otp' }" class="underline text-orange-500">Quay lại</router-link>
      <div class="flex items-center justify-center">
        <img src="./images/logo.png" class="w-24 h-24 object-cover" />
      </div>
      <p class="text-2xl font-bold text-center mt-4">Khôi phục mật khẩu</p>
      <p class="text-center text-zinc-600 mt-1">Đến bước này, bạn đã có thể lấy lại mật khẩu của mình rồi!</p>
      <div class="text-red-900 mt-2 text-md px-4 py-4 bg-red-100 rounded-md h-26" v-if="errors?.message">
        <p>{{ errors?.message }}</p>
      </div>
      <form class="mt-6 px-4" @submit.prevent="submit">
        <div class="mt-2">
          <p>Mật khẩu mới</p>
          <input type="text" name="otp" placeholder="Mật khẩu mới" v-model="formForgotPassword.new_password"
                 class="form-input mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
        </div>
        <div class="mt-2">
          <p>Xác nhận lại mật khẩu</p>
          <input type="text" name="otp" placeholder="Xác nhận lại mật khẩu" v-model="formForgotPassword.new_password_confirmation"
                 class="form-input mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
        </div>
        <input type="hidden" name="email" placeholder="Email" v-model="formForgotPassword.email" class="outline-orange-500/[.55] mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
        <button type="submit" class="px-4 py-2 bg-orange-400 w-full mt-8 rounded-md text-white font-bold">Xác nhận</button>
      </form>
    </div>

    <div class="absolute opacity-50 blur-lg bg-black w-full h-full"></div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import { useForgotPasswordApi } from "@/repositories/auth";
import {useToastStore} from "@/stores/toast";

const route = useRoute()
const router = useRouter()

const errors = ref({})
const formForgotPassword = ref({
  email: route.query.email,
  new_password: '',
  new_password_confirmation: ''
})

const tokenOtp = $cookies.get('tokenOtp')

function submit() {
  useForgotPasswordApi(formForgotPassword.value, tokenOtp)
      .then((response) => {
        useToastStore().success('Bạn đã thay đổi mật khẩu thành công', 3000)
        router.push('/login')
      })
      .catch((error) => {
        errors.value = error.response.data
      })
}

</script>
