<template>
  <div class="flex min-h-screen">
    <div class="xl:w-2/5 lg:w-3/5 md:w-4/5 flex flex-col">
      <router-link :to="{ name: 'home' }" class="px-4 py-2 underline text-cyan-500 text-lg ">Trang chủ</router-link>
      <div class="mt-10">
        <div class="flex items-center justify-center">
          <img src="../../images/logo.png" class="w-32 h-32 object-cover" />
        </div>
        <form class="mt-10 px-20" @submit.prevent="submit">
          <p class="text-2xl font-bold text-center">Đăng nhập</p>
          <p class="text-center text-zinc-600 mt-1">Chào mừng bạn đã gia nhập với gia đình Sweety!</p>
          <div class="text-red-900 mt-2 text-md px-4 py-4 bg-red-100 rounded-md h-26" v-if="errors?.message">
            <p>{{ errors?.message }}</p>
          </div>
          <div class="mt-2">
            <p>Địa chỉ e-mail</p>
            <input type="text" name="email" v-model="customer.email" placeholder="Email" class="outline-orange-500/[.55] mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
          </div>
          <div class="mt-4">
            <p>Mật khẩu</p>
            <input type="password" name="Mật khẩu" v-model="customer.password" placeholder="Mật khẩu" class="outline-orange-500/[.55] mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
          </div>
          <button type="submit" class="px-4 py-2 bg-orange-400 w-full mt-8 rounded-md text-white font-bold">Đăng nhập</button>
          <div class="lg:flex lg:items-center lg:gap-10 lg:mt-3">
            <div class="mr-auto mt-2">
              <router-link :to="{ name: 'send-otp' }" class="mx-auto underline text-zinc-700">Quên mật khẩu?</router-link>
            </div>
            <div class="flex gap-2 items-center ml-auto mt-2">
              <p>Nếu bạn chưa có tài khoản? </p>
              <router-link :to="{ name: 'register' }" class="text-cyan-500 underline">Đăng ký</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="xl:w-3/5 lg:w-2/5 md:w-2/5 grow relative overflow-hidden hidden md:block lg:block xl:block">
      <img src="../../images/coffee-shop-1.jpg" class="w-full h-full object-cover">
      <div class="absolute -bottom-10 opacity-80 blur-lg bg-black w-full h-56"></div>
    </div>
  </div>
</template>

<script setup>

import { useLoginApi } from "@/repositories/auth";
import { ref } from "vue";
import {useRouter} from "vue-router";
import {useToastStore} from "@/stores/toast";

const router = useRouter();

const customer = ref({
  email: '',
  password: ''
})

const errors = ref({})


function submit() {
  useLoginApi(customer.value)
      .then((response) => {
        $cookies.set('token', response.data.data.token, 60*60*24)
        useToastStore().success('Đăng nhập thành công', 3000)
        router.push({ name: 'home' })
      })
      .catch((error) => {
        errors.value = error.response.data
      })
}

</script>