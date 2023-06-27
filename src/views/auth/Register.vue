<template>
  <div class="z-60 relative overflow-hidden bg-[url('./images/coffee-shop-2.jpg')] w-full flex items-center justify-center min-h-screen bg-no-repeat bg-contain bg-cover bg-right">
    <div class="bg-white lg:w-1/3 mx-10 lg:mx-0 z-50 px-4 py-10 shadow-2xl rounded-3xl my-4">
      <div class="flex items-center justify-center">
        <img src="../../images/logo.png" class="lg:w-24 lg:h-24 w-16 h-16 object-cover" />
      </div>
      <p class="text-2xl font-bold text-center mt-4">Đăng ký</p>
      <p class="text-center text-zinc-600 lg:text-base text-sm">Hãy đến với Sweety để đón nhận nhiều sự ngọt ngào!</p>

      <form class="mt-6 px-4" @submit.prevent="submit">
        <div class="text-red-900 mt-2 text-md px-4 py-4 bg-red-100 rounded-md h-26" v-if="errors?.message">
          <p>{{ errors?.message }}</p>
        </div>
        <div class="mt-2">
          <p>Địa chỉ e-mail</p>
          <input type="text" name="email" placeholder="Email" v-model="customer.email" class="outline-orange-500/[.55] mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
        </div>
        <div class="mt-2">
          <p>Họ và tên</p>
          <input type="text" name="full_name" v-model="customer.full_name" placeholder="Họ và tên" class="outline-orange-500/[.55] mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
        </div>
        <div class="mt-2">
          <p>Giới tính</p>
          <div class="flex gap-1">
            <div>
              <label for="male" class="flex items-center w-full lg:px-4 px-2 py-1 border border-gray-400 rounded-lg cursor-pointer hover:text-orange-500 hover:bg-orange-100">
                <img src="../../images/male.png" class="lg:w-12 lg:h-12 w-8 h-8 object-cover lg:mr-4 mr-1" />
                <input type="radio" id="male" v-model="customer.gender" value="1" name="gender" class="mr-1"/>
                <p class="lg:text-base text-sm">Nam</p>
              </label>
            </div>
            <div>
              <label for="female" class="flex items-center w-full lg:px-4 px-2 py-1 border border-gray-400 rounded-lg cursor-pointer hover:text-orange-500 hover:bg-orange-100">
                <img src="../../images/female.png" class="lg:w-12 lg:h-12 w-8 h-8 object-cover lg:mr-4 mr-1" />
                <input type="radio" id="female" v-model="customer.gender" value="2" name="gender" class="mr-1"/>
                <p class="lg:text-base text-sm">Nữ</p>
              </label>
            </div>
            <div>
              <label for="others" class="flex items-center w-full lg:px-4 px-2 py-1 border border-gray-400 rounded-lg cursor-pointer hover:text-orange-500 hover:bg-orange-100">
                <img src="../../images/other.png" class="lg:w-12 lg:h-12 w-8 h-8 object-cover lg:mr-4 mr-1"/>
                <input type="radio" id="others" v-model="customer.gender" value="0" name="gender" class="mr-1"/>
                <p class="lg:text-base text-sm">Khác</p>
              </label>
            </div>
          </div>
          <div class="mt-4">
            <p>Mật khẩu</p>
            <input type="text" name="Mật khẩu" placeholder="Mật khẩu" v-model="customer.password" class="outline-orange-500/[.55] mt-1 w-full text-gray-700 bg-white border border-solid border-zinc-300 rounded py-2 px-4">
          </div>
        </div>
        <button type="submit" class="px-4 py-2 bg-orange-400 w-full mt-8 rounded-md text-white font-bold">Đăng nhập</button>
      </form>
      <div class="lg:flex">
        <div class="lg:flex lg:gap-1 lg:items-center mt-4 mx-auto">
          <p class="lg:text-base text-sm">Nếu bạn đã có tài khoản rồi! Vui lòng quay lại </p>
          <router-link :to="{ name: 'login' }" class="text-cyan-500 underline lg:text-base text-sm">Đăng nhập</router-link>
        </div>
      </div>
    </div>

    <div class="absolute opacity-50 blur-lg bg-black w-full h-full"></div>
  </div>
</template>

<script setup>

import { useRegisterApi } from "@/repositories/auth";
import { useToastStore } from "@/stores/toast";
import { useRouter } from "vue-router";
import {ref} from "vue";

const router = useRouter()

const errors = ref({})

const customer = ref({
  full_name: '',
  email: '',
  password: '',
  gender: ''
})

function submit() {
  useRegisterApi(customer.value)
      .then((response) => {
        useToastStore().success('Đăng ký thành công', 3000)
        router.push({ path: '/login' })
      })
      .catch((error) => {
          errors.value = error.response.data
        })
}


</script>