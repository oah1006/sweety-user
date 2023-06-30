<template>
  <div>
    <div class="flex items-center justify-between w-full mt-6">
      <p class="text-3xl font-medium">Danh sách địa chỉ</p>
      <router-link :to="{ name: 'create-delivery-address' }" class="py-2 px-4 hover:bg-cyan-400 bg-cyan-500 rounded-lg text-white font-medium text-lg">
        Tạo mới
      </router-link>
    </div>
    <slot name="delivery-address"></slot>
    <slot name="modal-delete"></slot>
  </div>

</template>

<script setup>

const props = defineProps({
  isLoadingButton: Boolean,
})

</script>
