<template>
  <form>
    <p class="text-3xl font-medium my-6">{{ props.text }} địa chỉ giao hàng</p>
    <slot name="box-delivery-address-layout"></slot>
    <div class="flex">
      <button class="ml-auto flex items-center gap-2 py-2 px-4 hover:bg-cyan-400 bg-cyan-500 rounded-lg text-white font-medium text-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        Xác nhận
      </button>
    </div>
  </form>
</template>

<script setup>

const props = defineProps({
  text: String
})

</script>