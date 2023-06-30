<template>
  <form>
    <p class="pt-6 text-3xl font-medium">Thông tin cá nhân</p>
    <p class="lg:text-md text-sm text-zinc-500">Dưới đây là thông tin của bạn! Nếu bạn cần cập nhật bất kỳ thông tin nào, bạn có thể chỉnh sửa và nhấn nút cập nhật ngay nhé! Sweety xin chân thành cám ơn quý khách</p>
    <div class="py-6">
      <slot name="box-input"></slot>
      <slot name="gender"></slot>
      <slot name="button"></slot>
    </div>
    <div class="flex">
      <div class="ml-auto">
        <button v-if="!props.isLoadingButton" class="flex items-center gap-2 py-2 px-4 hover:bg-cyan-400 bg-cyan-500 rounded-lg text-white font-medium text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Xác nhận
        </button>
        <button v-else class="flex items-center gap-1 py-2 px-3 hover:bg-orange-400 bg-orange-500 rounded-lg text-white font-medium text-lg">
          <svg class="animate-spin h-8 w-8 text-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p>Đang cập nhật</p>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>

const props = defineProps({
  isLoadingButton: Boolean
})

</script>
