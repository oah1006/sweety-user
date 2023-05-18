<template>
  <div class="flex gap-5 py-6">
    <div>
      <div class="px-2">
        <p class="font-medium text-lg">{{ profileStore.profile.profile?.full_name }}</p>
        <p class="text-zinc-400 text-md">{{ profileStore.profile.email }}</p>
      </div>
      <div class="mt-6">
        <router-link :to="{ name: 'profile' }" class="flex items-center gap-3 block px-2 py-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <div class="border-2 border-white h-5 border-dashed"></div>
          <p>Hồ sơ cá nhân</p>
        </router-link>
        <router-link :to="{ name: 'delivery-address' }" class="flex items-center gap-3 block px-2 py-0.5 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
          <div class="border-2 border-white h-5 border-dashed"></div>
          <p>Địa chỉ nhận hàng</p>
        </router-link>
        <router-link :to="{ name: 'order' }" class="flex items-center gap-3 block px-2 py-0.5 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
          </svg>
          <div class="border-2 border-white h-5 border-dashed"></div>
          <p>Quản lý đơn hàng</p>
        </router-link>
        <router-link :to="{ name: 'coupon' }" class="flex items-center gap-3 block px-2 py-0.5 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
          </svg>
          <div class="border-2 border-white h-5 border-dashed"></div>
          <p>Mã khuyến mãi</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useProfileStore } from "@/stores/getMyProfile";

const profileStore = useProfileStore()

</script>

<style>
.vue-active-link {
  padding-top: 5px;
  padding-bottom: 5px;
  background: #faa168;
  color: white !important;
  border-radius: 8px;
}
</style>