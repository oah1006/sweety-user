<template>
  <div class="flex items-center justify-between px-6 sm:px-6 md:px-6 lg:px-10 xl:px-20 py-2 z-40 fixed top-0 w-full bg-white">
    <img @click="redirectHome" src="../../images/logo.png" class="w-12 h-12 object-cover" />
    <div class="hidden lg:block">
      <ul id="hello" class="flex items-center text-zinc-500 gap-7 text-lg cursor-pointer">
        <router-link :to="{ name: 'home' }" class="hover:underline hover:text-orange-500">Trang chủ</router-link>
        <router-link :to="{ name: 'list-product' }"
                     class="hover:underline hover:text-orange-500">
          Trà sữa
        </router-link>
        <router-link :to="{ name: 'AboutUs' }" class="hover:underline hover:text-orange-500">Chúng tôi</router-link>
        <router-link :to="{ name: 'stores' }" class="hover:underline hover:text-orange-500">Chi nhánh</router-link>
      </ul>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-3">
        <div v-if="token">
          <div @click="showPopupProfile">
            <span class="cursor-pointer text-zinc-700 text-lg hover:text-orange-600"> Chào {{ profileStore.profile.profile?.full_name }}</span>
          </div>
          <div v-if="isPopupProfile" class="absolute w-64 py-3 bg-white rounded-lg shadow-lg shadow-orange-400/50 top-14 right-36 px-4">
            <router-link :to="{ name: 'profile' }" class="flex items-center gap-2 hover:bg-zinc-50 hover:text-orange-500 hover:rounded-lg px-2 py-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="font-medium text-lg">Thông tin cá nhân</p>
            </router-link>
            <a @click="redirectDeliveryAddress" class="flex items-center gap-2 hover:bg-zinc-50 hover:text-orange-500 hover:rounded-lg px-2 py-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p class="font-medium text-lg">Địa chỉ đơn hàng</p>
            </a>
            <a @click="redirectOrder" class="flex items-center gap-2 hover:bg-zinc-50 hover:text-orange-500 hover:rounded-lg px-2 py-3 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
              </svg>

              <p class="font-medium text-lg">Xem lịch sử đơn hàng</p>
            </a>
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
            <svg @click="isPopupProfile" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-zinc-700">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </router-link>
        </div>
        <div class="relative">
          <svg @click="redirectCheckout" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-zinc-700 cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <div v-if="productCarts.cart_items && productCarts.cart_items.length > 0" class="w-6 h-6 bg-orange-500 absolute top-5 -right-4 !rounded-full">
            <p class="text-white px-0 py-0 text-center">{{ productCarts.cart_items.length }}</p>
          </div>
        </div>
      </div>
      <div class="border-l border-zinc-500 px-4 relative">
        <svg @click="showPopupHeader" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-zinc-600 cursor-pointer block lg:hidden">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div v-if="isPopupHeader" class="absolute block lg:hidden w-80 -left-64 top-10 bg-white z-50 border border-zinc-200 rounded-lg shadow-2xl">
          <div class="text-zinc-500 gap-7 text-lg cursor-pointer">
            <p @click="redirectListProduct" class="px-10 py-3 text-2xl font-medium hover:bg-orange-50">
              Trà sữa
            </p>
            <p class="px-10 py-3 text-2xl font-medium hover:bg-orange-50">Chúng tôi</p>
            <p class="px-10 py-3 text-2xl font-medium hover:bg-orange-50">Liên hệ</p>
            <p class="px-10 py-3 text-2xl font-medium hover:bg-orange-50">Chi nhánh cửa hàng</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <LoadingPage />
</template>

<script setup>

import {ref} from "vue";

import {useRouter} from "vue-router";
import { useLogoutApi } from "@/repositories/auth";
import {useToastStore} from "@/stores/toast";
import { useProfileStore } from "@/stores/getMyProfile";
import LoadingPage from "@/App.vue";
import {useIndexAddToCartApi} from "@/repositories/cart";

const router = useRouter()

const profileStore = useProfileStore()

const isPopupProfile = ref(false)
const isPopupHeader = ref(false)
const isPopupCart = ref(false)

function showPopupProfile() {
  isPopupProfile.value = !isPopupProfile.value
}

function showPopupHeader() {
  isPopupHeader.value = !isPopupHeader.value
}

function showPopupCart() {
  isPopupCart.value = !isPopupCart.value
}

function redirectHome() {
  router.push({
    name: 'home'
  })
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

function redirectListProduct() {
  router.push({
    name: 'list-product'
  })
}

function redirectCheckout() {
  router.push({
    name: 'checkout'
  })
}

function redirectDeliveryAddress() {
  router.push({
    name: 'delivery-address'
  })
}

function redirectOrder() {
    router.push({
      name: 'order'
    })
}

const productCarts = ref('')

function getIndexAddToCart() {
  useIndexAddToCartApi()
      .then((response) => {
        productCarts.value = response.data.data
      })
}

getIndexAddToCart()

</script>

<style>
.router-link-exact-active {
  padding: 2px 10px;
  background: #ec8a45;
  color: white !important;
  border-radius: 10px;
}
</style>