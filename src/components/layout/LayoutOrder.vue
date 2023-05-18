<template>
  <div>
    <p class="pt-6 text-3xl font-medium">Hóa đơn của bạn</p>
    <p class="text-md text-zinc-500">Dưới đây là tất cả những hóa đơn mới và cũ của bạn đã đặt hàng trên hệ thống Sweety</p>
    <slot name="navbar-status-order"></slot>
    <slot name="input-search"></slot>
    <slot name="box-order"></slot>
  </div>
</template>

<script setup>

import {ref} from "vue";

const styleClick = ref(
  'py-3 px-8 cursor-pointer border-b border-zinc-300'
);

 function clickLink() {
  styleClick.value = 'py-3 px-8 cursor-pointer border-b border-zinc-300 border-b-2 border-orange-500 text-orange-500'
 }

</script>