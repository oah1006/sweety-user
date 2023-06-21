<template>
  <div class="fixed top-0 left-0 w-full flex h-screen justify-center items-center transition duration-700 ease-in-out">
    <div @click="closeModal" class="absolute opacity-70 bg-black w-full h-screen flex items-center z-10">
    </div>
    <div class="w-1/4 mx-auto rounded-lg shadow-md z-50 bg-white">
      <div class="pb-3 border-b border-zinc-300">
        <svg @click="closeModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-3 mt-2 cursor-pointer">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <p class="text-center">Khuyến mãi</p>
      </div>
      <div class="px-4 py-4">
        <InputSearch />
      </div>
      <div class="py-2 bg-zinc-100 pl-3">
        <p>Mã khuyến mãi của bạn</p>
      </div>
      <slot name="box-coupon"></slot>
    </div>
  </div>
</template>
<script setup>
import InputSearch from "@/components/input/InputSearch.vue";

const emits = defineEmits(['close-modal'])

function closeModal() {
  emits('close')
}

</script>