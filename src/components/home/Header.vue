<template>
  <div class="flex items-center justify-between px-32 py-2 shadow-sm shadow-orange-500/50">
    <img src="../../../public/images/logo.png" class="w-12 h-12 object-cover hidden lg:block" />
    <div>
      <ul class="flex items-center text-zinc-600 gap-7 text-lg cursor-pointer">
        <li class="hover:underline">Trang chủ</li>
        <li class="relative group">
          <p class="hover:underline">Thực đơn</p>
          <div class="subnav hidden bg-white group-hover:block rounded-2xl py-2 px-4 absolute top-8 -left-56 border-t border-zinc-600 border-solid w-[800px] gap-8">
            <div class="flex items-center justify-between px-10">
              <p class="underline text-orange-500">Cà phê</p>
              <p class="underline text-orange-500">Trà sữa</p>
              <p class="underline text-orange-500">Trà trái cây</p>
              <p class="underline text-orange-500">Đá xây</p>
              <p class="underline text-orange-500">Bánh</p>
            </div>
          </div>
        </li>
        <li class="hover:underline">Chúng tôi</li>
        <li class="hover:underline">Liên hệ</li>
        <li class="hover:underline">Chi nhánh cửa hàng</li>
      </ul>
    </div>
    <div class="flex items-center gap-4">
      <div v-if="token">
        <div @click="showPopup">
          <span class="cursor-pointer text-orange-500 text-lg font-medium"> {{ profileStore.profile.profile?.full_name }}</span>
        </div>
        <div v-if="isPopup" class="absolute w-60 py-3 bg-white rounded-lg shadow-lg shadow-orange-400/50 top-14 right-36 px-4">
          <router-link :to="{ name: 'profile' }" class="flex items-center gap-2 hover:bg-zinc-50 hover:text-orange-500 hover:rounded-lg px-2 py-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p class="font-medium text-lg">Thông tin cá nhân</p>
          </router-link>
          <a @click="logout" class="flex items-center gap-2 hover:bg-zinc-50 hover:text-orange-500 hover:rounded-lg px-2 py-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p class="font-medium text-lg">Đăng xuất</p>
          </a>
        </div>
      </div>
      <div v-else>
        <router-link :to="{ name: 'login' }">
          <svg @click="showPopup" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </router-link>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-orange-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";

import {useRouter} from "vue-router";
import { useLogoutApi } from "@/repositories/auth";
import {useToastStore} from "@/stores/toast";
import { useProfileStore } from "@/stores/getMyProfile";

const profileStore = useProfileStore()

const isPopup = ref(false)

const router = useRouter();

function showPopup() {
  isPopup.value = !isPopup.value
}

const token = $cookies.get('token')

async function logout() {
  await useLogoutApi()
      .then((response) => {
        $cookies.remove('token')
        useToastStore().success('Đăng xuất thành công', 3000)
        router.push('/login')
      })
}

</script>

<style>
  .subnav::before {
    content: "";
    border: 30px solid;
    border-color: transparent transparent transparent transparent;
    position: absolute;
    left: 230px;
    top: -10px;
  }
</style>