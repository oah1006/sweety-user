<template>
  <div class="flex w-[500px]">
    <div class="w-1/3 bg-orange-500 rounded-l-3xl">
      <p class="text-center text-white font-bold text-xl mt-3">Sweety</p>
    </div>
    <div class="w-2/3 shadow-sm shadow-zinc-400 border border-zinc-300 rounded-r-3xl flex flex-col">
      <p class="mt-4 ml-8 font-bold text-orange-600">{{ props.nameCoupon }}</p>
      <p class="ml-8 text-sm text-zinc-500">{{ props.descriptionCoupon }}</p>
      <p class="ml-auto mr-8 mt-auto mb-3 text-cyan-500">Điều kiện</p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  nameCoupon: String,
  descriptionCoupon: String,
})

</script>